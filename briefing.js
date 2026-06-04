document.addEventListener('DOMContentLoaded', () => {
    // 1. Wizard Tabs Navigation
    let currentStep = 1;
    const totalSteps = 5;

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const stepsProgress = document.querySelectorAll('.steps-progress .step');

    function updateStepIndicator() {
        stepsProgress.forEach((step, index) => {
            const stepNum = index + 1;
            if (stepNum === currentStep) {
                step.className = 'step active';
            } else if (stepNum < currentStep) {
                step.className = 'step completed';
            } else {
                step.className = 'step';
            }
        });
    }

    function showStep(stepNum) {
        document.querySelectorAll('.form-step').forEach(step => {
            step.classList.remove('active');
        });
        document.getElementById(`step-${stepNum}`).classList.add('active');
        
        currentStep = stepNum;
        updateStepIndicator();

        // Control buttons
        if (currentStep === 1) {
            btnPrev.style.display = 'none';
        } else {
            btnPrev.style.display = 'block';
        }

        if (currentStep === totalSteps) {
            btnNext.innerText = 'Finalizar & Gerar';
            btnNext.style.display = 'none'; // Step 5 shows export CTAs directly
            buildPreviewDashboard();
        } else {
            btnNext.innerText = 'Próximo Passo';
            btnNext.style.display = 'block';
        }

        // Scroll to top of the form box
        document.querySelector('.form-box-briefing').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    btnNext.addEventListener('click', () => {
        if (currentStep < totalSteps) {
            // Validate required inputs on current step before moving
            const activeStepEl = document.getElementById(`step-${currentStep}`);
            const requiredFields = activeStepEl.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('invalid');
                    isValid = false;
                } else {
                    field.classList.remove('invalid');
                }
            });

            if (!isValid) {
                showToast('⚠️ Por favor, preencha os campos obrigatórios em destaque.');
                return;
            }

            showStep(currentStep + 1);
        }
    });

    btnPrev.addEventListener('click', () => {
        if (currentStep > 1) {
            showStep(currentStep - 1);
        }
    });

    // Make steps progress bar clickable for quick navigation
    stepsProgress.forEach(step => {
        step.addEventListener('click', () => {
            const clickedStep = parseInt(step.getAttribute('data-step'));
            // Only allow jumping back, or jumping forward if they are already completed or it's step 1
            if (clickedStep < currentStep || clickedStep === currentStep + 1) {
                showStep(clickedStep);
            }
        });
    });


    // 2. Data Sourcing and LocalStorage persistence (Auto-Save)
    const form = document.getElementById('briefing-form');

    function getFormData() {
        const data = {};
        
        // Text/Email/Tel Inputs & Textareas
        const textInputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
        textInputs.forEach(input => {
            if (input.name) {
                data[input.name] = input.value;
            }
        });

        // Checkboxes (grouped by name)
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => {
            if (cb.name) {
                if (!data[cb.name]) {
                    data[cb.name] = [];
                }
                if (cb.checked) {
                    data[cb.name].push(cb.value);
                }
            }
        });

        // Radios
        const radios = form.querySelectorAll('input[type="radio"]:checked');
        radios.forEach(radio => {
            if (radio.name) {
                data[radio.name] = radio.value;
            }
        });

        return data;
    }

    function saveToLocalStorage() {
        const data = getFormData();
        localStorage.setItem('jvx_briefing_data', JSON.stringify(data));
    }

    function loadFromLocalStorage() {
        const savedData = localStorage.getItem('jvx_briefing_data');
        if (savedData) {
            try {
                const data = JSON.parse(savedData);
                
                // Set text fields
                Object.keys(data).forEach(key => {
                    const val = data[key];
                    const element = form.querySelector(`[name="${key}"]`);
                    
                    if (element) {
                        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                            if (element.type !== 'checkbox' && element.type !== 'radio') {
                                element.value = val;
                            }
                        }
                    }
                });

                // Set checkboxes
                const checkboxes = form.querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach(cb => {
                    if (cb.name && data[cb.name] && Array.isArray(data[cb.name])) {
                        cb.checked = data[cb.name].includes(cb.value);
                    }
                });

                // Set radios
                const radios = form.querySelectorAll('input[type="radio"]');
                radios.forEach(radio => {
                    if (radio.name && data[radio.name]) {
                        radio.checked = (radio.value === data[radio.name]);
                    }
                });

            } catch (e) {
                console.error("Error parsing localstorage data", e);
            }
        }
    }

    // Bind event listeners to auto-save
    form.addEventListener('input', saveToLocalStorage);
    form.addEventListener('change', saveToLocalStorage);

    // Initial load
    loadFromLocalStorage();


    // 3. Web Speech API (Speech-to-Text) Implementation
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let activeRecognition = null;
    let activeBtn = null;

    if (!SpeechRecognition) {
        // Speech recognition not supported
        document.querySelectorAll('.btn-voice').forEach(btn => {
            btn.style.display = 'none'; // Hide voice option
        });
        document.querySelectorAll('.voice-status').forEach(status => {
            status.innerText = 'Transcrição indisponível no navegador (use Chrome/Edge)';
        });
        console.warn('Web Speech API is not supported in this browser.');
    } else {
        const voiceButtons = document.querySelectorAll('.btn-voice');
        
        voiceButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = btn.getAttribute('data-target');
                const textarea = document.getElementById(targetId);
                const statusSpan = btn.parentElement.querySelector('.voice-status');
                const langSelect = btn.parentElement.querySelector('.voice-lang');
                const selectedLang = langSelect ? langSelect.value : 'pt-BR';

                // If this button is already recording, stop it
                if (activeRecognition && activeBtn === btn) {
                    activeRecognition.stop();
                    return;
                }

                // If another button is recording, stop that one first
                if (activeRecognition) {
                    activeRecognition.stop();
                }

                // Initialize new SpeechRecognition
                const recognition = new SpeechRecognition();
                recognition.continuous = true;
                recognition.interimResults = false;
                recognition.lang = selectedLang;

                recognition.onstart = () => {
                    activeRecognition = recognition;
                    activeBtn = btn;
                    btn.classList.add('recording');
                    btn.querySelector('.voice-text').innerText = 'Parar Gravação';
                    statusSpan.innerText = 'Ouvindo... Fale agora.';
                    statusSpan.classList.add('listening');
                };

                recognition.onerror = (event) => {
                    console.error('Speech recognition error', event.error);
                    let errMsg = 'Erro de áudio';
                    if (event.error === 'not-allowed') {
                        errMsg = 'Permissão do Microfone negada!';
                    } else if (event.error === 'no-speech') {
                        errMsg = 'Nenhuma voz detectada.';
                    }
                    statusSpan.innerText = errMsg;
                    stopRecordingUI(btn, statusSpan);
                };

                recognition.onend = () => {
                    stopRecordingUI(btn, statusSpan);
                    activeRecognition = null;
                    activeBtn = null;
                    saveToLocalStorage();
                };

                recognition.onresult = (event) => {
                    let finalTranscript = '';
                    for (let i = event.resultIndex; i < event.results.length; ++i) {
                        if (event.results[i].isFinal) {
                            finalTranscript += event.results[i][0].transcript;
                        }
                    }
                    
                    if (finalTranscript) {
                        // Clean transcript punctuation padding
                        const spacing = textarea.value ? ' ' : '';
                        textarea.value += spacing + finalTranscript.charAt(0).toUpperCase() + finalTranscript.slice(1);
                        textarea.dispatchEvent(new Event('input')); // Trigger auto-save
                    }
                };

                recognition.start();
            });
        });
    }

    function stopRecordingUI(btn, statusSpan) {
        btn.classList.remove('recording');
        btn.querySelector('.voice-text').innerText = 'Falar Resposta';
        statusSpan.classList.remove('listening');
        if (statusSpan.innerText === 'Ouvindo... Fale agora.') {
            statusSpan.innerText = 'Processado.';
            setTimeout(() => { statusSpan.innerText = 'Aguardando...'; }, 2000);
        }
    }


    // 4. Dynamic Preview Dashboard Builder
    function buildPreviewDashboard() {
        const data = getFormData();
        const previewContent = document.getElementById('preview-content');
        
        let html = '';

        // Section 1: Contato
        html += `
            <div class="preview-section">
                <h4>1. Informações de Contato & Registro</h4>
                <div class="preview-grid">
                    <div class="preview-item"><strong>Razão Social:</strong> <span>${data.razaoSocial || '-'}</span></div>
                    <div class="preview-item"><strong>Nome Fantasia:</strong> <span>${data.nomeFantasia || '-'}</span></div>
                    <div class="preview-item"><strong>Telefone/WhatsApp:</strong> <span>${data.telefone || '-'}</span></div>
                    <div class="preview-item"><strong>E-mail Principal:</strong> <span>${data.email || '-'}</span></div>
                    <div class="preview-item"><strong>Licença Comercial:</strong> <span>${data.licencaComercial || '-'}</span></div>
                </div>
                <div class="preview-item" style="margin-top:0.5rem;"><strong>Endereço Físico:</strong> <span>${data.endereco || '-'}</span></div>
            </div>
            <hr style="border: 0; border-top: 1px solid var(--border-glass); margin: 1rem 0;">
        `;

        // Section 2: Negócio & Escopo
        const servicos = (data.servicos && data.servicos.length > 0) ? data.servicos.join(', ') : 'Nenhum selecionado';
        const setores = (data.setores && data.setores.length > 0) ? data.setores.join(', ') : 'Nenhum selecionado';
        const perfilCliente = (data.perfilCliente && data.perfilCliente.length > 0) ? data.perfilCliente.join(', ') : 'Nenhum selecionado';
        const diferenciais = (data.diferenciais && data.diferenciais.length > 0) ? data.diferenciais.join(', ') : 'Nenhum selecionado';

        html += `
            <div class="preview-section">
                <h4>2. Modelo de Negócio & Escopo</h4>
                <div class="preview-item"><strong>Serviços JVX:</strong> <span>${servicos}</span></div>
                <div class="preview-item"><strong>Setores Alvo:</strong> <span>${setores}</span></div>
                <div class="preview-item"><strong>Perfil de Cliente:</strong> <span>${perfilCliente}</span></div>
                <div class="preview-item"><strong>Diferenciais Comunicados:</strong> <span>${diferenciais}</span></div>
                <div class="preview-item" style="margin-top:0.5rem;"><strong>Detalhes da Operação:</strong> <span>${data.detalheEscopo || '-'}</span></div>
            </div>
            <hr style="border: 0; border-top: 1px solid var(--border-glass); margin: 1rem 0;">
        `;

        // Section 3: Trabalhadores & Sourcing
        const paisesSourcing = (data.paisesSourcing && data.paisesSourcing.length > 0) ? data.paisesSourcing.join(', ') : 'Nenhum selecionado';
        const qualificacao = (data.qualificacao && data.qualificacao.length > 0) ? data.qualificacao.join(', ') : 'Nenhum selecionado';

        html += `
            <div class="preview-section">
                <h4>3. Força de Trabalho & Sourcing</h4>
                <div class="preview-grid">
                    <div class="preview-item"><strong>Países de Sourcing:</strong> <span>${paisesSourcing}</span></div>
                    <div class="preview-item"><strong>Qualificações:</strong> <span>${qualificacao}</span></div>
                    <div class="preview-item"><strong>Banco de Talentos:</strong> <span>${data.bancoTalentos || '-'}</span></div>
                </div>
                <div class="preview-item" style="margin-top:0.5rem;"><strong>Funções Principais:</strong> <span>${data.funcoesPrincipais || '-'}</span></div>
                <div class="preview-item" style="margin-top:0.5rem;"><strong>Parcerias Locais:</strong> <span>${data.parceriasSourcing || '-'}</span></div>
            </div>
            <hr style="border: 0; border-top: 1px solid var(--border-glass); margin: 1rem 0;">
        `;

        // Section 4: Identidade & Marca
        const coresMarca = (data.coresMarca && data.coresMarca.length > 0) ? data.coresMarca.join(', ') : 'Nenhuma selecionada';
        
        html += `
            <div class="preview-section">
                <h4>4. Identidade Visual & Conceito da Marca</h4>
                <div class="preview-grid">
                    <div class="preview-item"><strong>Estética Visual:</strong> <span>${data.percepcaoMarca || '-'}</span></div>
                    <div class="preview-item"><strong>Origem da Marca:</strong> <span>${data.origemMarca || '-'}</span></div>
                </div>
                <div class="preview-item" style="margin-top:0.5rem;"><strong>Cores Preferidas:</strong> <span>${coresMarca} ${data.corOutra ? '(' + data.corOutra + ')' : ''}</span></div>
                <div class="preview-item" style="margin-top:0.5rem;"><strong>Significado do Nome:</strong> <span>${data.nomeSignificado || '-'}</span></div>
                <div class="preview-item" style="margin-top:0.5rem;"><strong>Preferência de Logotipo:</strong> <span>${data.diretrizesLogo || '-'}</span></div>
            </div>
        `;

        previewContent.innerHTML = html;
    }


    // 5. Generate Reports and Export logic
    function generateMarkdownReport(data) {
        const timestamp = new Date().toLocaleString();
        
        const servicos = (data.servicos && data.servicos.length > 0) ? data.servicos.map(x => `- ${x}`).join('\n') : '* Nenhum selecionado';
        const setores = (data.setores && data.setores.length > 0) ? data.setores.map(x => `- ${x}`).join('\n') : '* Nenhum selecionado';
        const perfilCliente = (data.perfilCliente && data.perfilCliente.length > 0) ? data.perfilCliente.map(x => `- ${x}`).join('\n') : '* Nenhum selecionado';
        const diferenciais = (data.diferenciais && data.diferenciais.length > 0) ? data.diferenciais.map(x => `- ${x}`).join('\n') : '* Nenhum selecionado';
        const paisesSourcing = (data.paisesSourcing && data.paisesSourcing.length > 0) ? data.paisesSourcing.map(x => `- ${x}`).join('\n') : '* Nenhum selecionado';
        const qualificacao = (data.qualificacao && data.qualificacao.length > 0) ? data.qualificacao.map(x => `- ${x}`).join('\n') : '* Nenhum selecionado';
        const coresMarca = (data.coresMarca && data.coresMarca.length > 0) ? data.coresMarca.map(x => `- ${x}`).join('\n') : '* Nenhuma selecionada';

        return `# Relatório de Briefing Estratégico - JVX Emirates
*Gerado automaticamente em: ${timestamp}*

---

## 1. Informações Corporativas & Contato (Dados Reais do Site)
* **Razão Social:** ${data.razaoSocial || 'Não informado'}
* **Nome Fantasia:** ${data.nomeFantasia || 'Não informado'}
* **Telefone / WhatsApp:** ${data.telefone || 'Não informado'}
* **E-mail de Contato:** ${data.email || 'Não informado'}
* **Licença Comercial / Free Zone:** ${data.licencaComercial || 'Não informado'}
* **Endereço do Escritório:** ${data.endereco || 'Não informado'}

---

## 2. Modelo de Negócio & Escopo
### Serviços Oferecidos:
${servicos}

### Setores de Atendimento Iniciais:
${setores}

### Perfil dos Clientes Contratantes:
${perfilCliente}

### Diferenciais Competitivos:
${diferenciais}

### Detalhes Operacionais do Escopo:
${data.detalheEscopo || 'Sem observações adicionais.'}

---

## 3. Força de Trabalho & Sourcing
### Países de Origem (Sourcing):
${paisesSourcing}

### Nível de Qualificação:
${qualificacao}

### Principais Funções a Destacar:
${data.funcoesPrincipais || 'Não informado.'}

### Banco de Talentos no Site:
- ${data.bancoTalentos || 'Não informado.'}

### Detalhes de Recrutamento & Parcerias:
${data.parceriasSourcing || 'Sem observações adicionais.'}

---

## 4. Identidade Visual & Conceito da Marca
### Percepção Visual & Vibe da Marca:
- ${data.percepcaoMarca || 'Não informado.'}

### Origem da Imagem de Marca:
- ${data.origemMarca || 'Não informado.'}

### Paleta de Cores Preferida:
${coresMarca}
*Outros comentários sobre cores:* ${data.corOutra || 'Nenhum'}

### Significado do Nome (JVX Emirates):
${data.nomeSignificado || 'Não informado.'}

### Diretrizes e Conceito para o Símbolo/Logo:
${data.diretrizesLogo || 'Não informado.'}
`;
    }

    // Export Action 1: Copy to clipboard
    document.getElementById('btn-copy-markdown').addEventListener('click', () => {
        const data = getFormData();
        const mdText = generateMarkdownReport(data);
        
        navigator.clipboard.writeText(mdText).then(() => {
            showToast('📋 Relatório copiado para a Área de Transferência!');
        }).catch(err => {
            console.error('Error copying text', err);
            showToast('❌ Erro ao copiar relatório.');
        });
    });

    // Export Action 2: Download MD File
    document.getElementById('btn-download-md').addEventListener('click', () => {
        const data = getFormData();
        const mdText = generateMarkdownReport(data);
        const blob = new Blob([mdText], { type: 'text/markdown;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `briefing_jvx_emirates_${data.nomeFantasia || 'jvx'}.md`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        showToast('📝 Download do relatório Markdown iniciado!');
    });

    // Export Action 3: Download JSON File
    document.getElementById('btn-download-json').addEventListener('click', () => {
        const data = getFormData();
        const jsonText = JSON.stringify(data, null, 4);
        const blob = new Blob([jsonText], { type: 'application/json;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `briefing_data_jvx_${data.nomeFantasia || 'jvx'}.json`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        showToast('⚙️ Download dos dados JSON iniciado!');
    });

    // Export Action 4: Share by Email
    document.getElementById('btn-share-email').addEventListener('click', () => {
        const data = getFormData();
        const mdText = generateMarkdownReport(data);
        
        const subject = encodeURIComponent(`Briefing Estratégico JVX Emirates - ${data.nomeFantasia || ''}`);
        
        // Mail body with summary to fit within character limits (max 2000 chars safely for some clients)
        let emailBody = `Olá,\n\nAqui está o briefing estruturado da JVX Emirates.\n\n`;
        emailBody += `Razão Social: ${data.razaoSocial || ''}\n`;
        emailBody += `Telefone: ${data.telefone || ''}\n`;
        emailBody += `E-mail: ${data.email || ''}\n`;
        emailBody += `Estética de Marca: ${data.percepcaoMarca || ''}\n\n`;
        emailBody += `Por favor, faça download do arquivo de briefing completo em anexo ou copie o relatório markdown diretamente.\n\n`;
        emailBody += `Relatório Completo:\n${mdText.substring(0, 1000)}...\n\n[Texto truncado para evitar limite de e-mail. Por favor, copie do portal completo.]`;
        
        window.location.href = `mailto:?subject=${subject}&body=${encodeURIComponent(emailBody)}`;
        showToast('📧 Abrindo seu aplicativo de e-mail...');
    });


    // Reset Form button
    document.getElementById('btn-clear-form').addEventListener('click', () => {
        if (confirm('⚠️ Tem certeza que deseja limpar todos os campos? Isso apagará as respostas salvas neste computador.')) {
            localStorage.removeItem('jvx_briefing_data');
            form.reset();
            // Desmarcar todos os checks
            form.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
            form.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
            
            showToast('🔄 Todos os dados foram limpos.');
            showStep(1);
        }
    });


    // 6. Toast System Helper
    function showToast(message) {
        // Remove existing toast if there is one
        const oldToast = document.querySelector('.status-toast');
        if (oldToast) {
            oldToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = 'status-toast';
        toast.innerText = message;
        document.body.appendChild(toast);

        // Remove toast automatically after 3 seconds
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
});
