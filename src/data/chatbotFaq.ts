import type { Language } from '../types';

export interface ChatFaqItem {
  id: string;
  question: string;
  keywords: string[];
  answer: string;
  actionText?: string;
  actionType?: 'consultation' | 'services' | 'approach' | 'dubai';
}

export interface ChatbotLocaleData {
  botName: string;
  botRole: string;
  botStatus: string;
  welcomeMessage: string;
  inputPlaceholder: string;
  sendButton: string;
  suggestedQuestionsTitle: string;
  fallbackMessage: string;
  consultationCta: string;
  faqs: ChatFaqItem[];
}

export const chatbotData: Record<Language, ChatbotLocaleData> = {
  pt: {
    botName: "JVX Concierge",
    botRole: "Assistente Executivo Inteligente",
    botStatus: "Online · Sede em Dubai",
    welcomeMessage: "Olá! Sou o assistente corporativo da JVX. Como posso apoiar a estruturação e o crescimento internacional da sua empresa hoje?",
    inputPlaceholder: "Digite sua dúvida sobre serviços, operações ou Dubai...",
    sendButton: "Enviar",
    suggestedQuestionsTitle: "Perguntas frequentes selecionadas:",
    fallbackMessage: "Entendo sua necessidade. Para detalhes específicos e alinhamento sob medida para o porte da sua empresa, nossos diretores em Dubai podem analisar sua operação diretamente.",
    consultationCta: "Agendar Consulta Executiva",
    faqs: [
      {
        id: "services",
        question: "Quais serviços a JVX oferece?",
        keywords: ["serviços", "servico", "o que faz", "soluções", "marketing", "operacional", "suporte", "trabalho", "atuação"],
        answer: "A JVX oferece soluções integradas em 4 verticais executivas: 1) Marketing e Aquisição de Clientes (tráfego qualificado, posicionamento de autoridade, funis e conversão); 2) Suporte Operacional e Back-Office (gestão de rotinas, atendimento multilíngue e coordenação documental); 3) Presença e Sede em Dubai (abertura societária, governança, domicílio e contas empresariais); 4) Liderança Estratégica Fracionada (CMO e COO sob demanda).",
        actionText: "Conhecer Todos os Serviços",
        actionType: "services"
      },
      {
        id: "how-it-works",
        question: "Como funciona a contratação e o suporte?",
        keywords: ["como funciona", "etapas", "processo", "contratação", "contrato", "onboarding", "passo a passo", "implementação"],
        answer: "Nosso modelo opera em 5 fases contínuas: Diagnóstico Inicial & Auditoria de Gargalos -> Estruturação do Plano Sob Medida -> Onboarding e Conexão Segura de Ferramentas -> Execução Diária com Desk Dedicado -> Relatórios Executivos e Escala. Você conta com comunicação direta via canais corporativos e SLA rigoroso de resposta.",
        actionText: "Ver Modelo Operacional",
        actionType: "approach"
      },
      {
        id: "dubai-base",
        question: "Por que a sede da JVX em Dubai é vantajosa?",
        keywords: ["dubai", "sede", "emirados", "vantagem", "fuso", "impostos", "tributação", "bancos", "internacional"],
        answer: "Dubai é o principal centro financeiro e logístico entre o Ocidente e o Oriente. A partir de Dubai, oferecemos estabilidade regulatória, fuso horário estratégico que cobre as Américas, Europa e Ásia, e uma ponte sólida para conectar sua empresa a parceiros internacionais e clientes globais de alto poder aquisitivo.",
        actionText: "Entender a Base em Dubai",
        actionType: "dubai"
      },
      {
        id: "in-house-vs-jvx",
        question: "Qual a diferença entre a JVX e contratar equipe própria?",
        keywords: ["equipe", "custo", "contratar", "funcionário", "clt", "diferença", "vantagem", "economia", "in-house"],
        answer: "Contratar times internos em múltiplos países envolve custos trabalhistas elevados, encargos, complexidade jurídica e meses de treinamento. A JVX entrega uma operação completa e sênior pronta desde o primeiro dia, com custo previsível, flexibilidade para escalar e sem passivos trabalhistas.",
        actionText: "Agendar Alinhamento",
        actionType: "consultation"
      },
      {
        id: "consultation",
        question: "Como agendar uma reunião com a diretoria?",
        keywords: ["agendar", "reunião", "consulta", "falar", "contato", "atendimento", "conversar", "preço", "orçamento"],
        answer: "Você pode solicitar uma consulta estratégica diretamente pelo site. Avaliamos a estrutura atual do seu negócio, identificamos gargalos operacionais e apresentamos uma proposta personalizada com escopo claro e prazos definidos.",
        actionText: "Agendar Consulta Agora",
        actionType: "consultation"
      },
      {
        id: "confidentiality",
        question: "Como a JVX lida com sigilo e confidencialidade?",
        keywords: ["sigilo", "confidencialidade", "segurança", "nda", "dados", "privacidade", "lgpd", "compliance"],
        answer: "Todas as operações da JVX são resguardadas por Acordos de Confidencialidade (NDA) corporativos internacionais. Utilizamos canais criptografados de governança e controles rigorosos de acesso aos dados operacionais e financeiros dos nossos clientes.",
        actionText: "Falar com Especialista",
        actionType: "consultation"
      }
    ]
  },
  en: {
    botName: "JVX Concierge",
    botRole: "Smart Executive Assistant",
    botStatus: "Online · Dubai Headquarters",
    welcomeMessage: "Hello! I am JVX's corporate assistant. How can we support your company's international structure and cross-border growth today?",
    inputPlaceholder: "Ask about services, operations, or our Dubai base...",
    sendButton: "Send",
    suggestedQuestionsTitle: "Frequently asked questions:",
    fallbackMessage: "I understand your request. For custom requirements and detailed operational scope tailored to your company's scale, our directors in Dubai can review your business directly.",
    consultationCta: "Schedule Executive Consultation",
    faqs: [
      {
        id: "services",
        question: "What services does JVX provide?",
        keywords: ["services", "what do you do", "solutions", "marketing", "operational", "support", "offer"],
        answer: "JVX delivers integrated corporate solutions across 4 executive pillars: 1) Performance Marketing & Client Acquisition (qualified traffic, authority positioning, conversion funnels); 2) Operational Support & Back-Office Execution (routine administration, multilingual support, document workflows); 3) Dubai & UAE Corporate Establishment (entity setup, corporate governance, banking); 4) Fractional Executive Leadership (on-demand CMO and COO).",
        actionText: "Explore All Services",
        actionType: "services"
      },
      {
        id: "how-it-works",
        question: "How does the engagement and onboarding work?",
        keywords: ["how it works", "steps", "process", "onboarding", "contract", "engagement", "sla"],
        answer: "Our engagement runs across 5 agile phases: Initial Diagnostic & Bottleneck Review -> Custom Tailored Plan -> Secure Tool & Team Integration -> Daily Dedicated Desk Execution -> Executive Reporting & Scaling. You benefit from direct corporate communication channels and strict response SLAs.",
        actionText: "View Operating Model",
        actionType: "approach"
      },
      {
        id: "dubai-base",
        question: "Why is JVX based in Dubai?",
        keywords: ["dubai", "headquarters", "uae", "advantage", "timezone", "tax", "banking", "international"],
        answer: "Dubai is the world's premier business hub connecting East and West. Operating from Dubai offers regulatory stability, a strategic time zone overlapping the Americas, Europe, and Asia, and direct access to international financial rails and high-net-worth markets.",
        actionText: "Learn About Our Dubai Base",
        actionType: "dubai"
      },
      {
        id: "in-house-vs-jvx",
        question: "Why choose JVX over building an in-house team?",
        keywords: ["team", "cost", "hire", "in-house", "internal", "advantage", "overhead", "payroll"],
        answer: "Building internal teams across jurisdictions creates substantial payroll liabilities, local compliance headaches, and months of onboarding delays. JVX provides an established, high-performing senior operations and marketing unit from day one at predictable costs.",
        actionText: "Book a Strategic Session",
        actionType: "consultation"
      },
      {
        id: "consultation",
        question: "How can I book an executive consultation?",
        keywords: ["book", "consultation", "schedule", "meeting", "contact", "talk", "pricing", "quote"],
        answer: "You can request an executive consultation directly through our website. We analyze your business model, pinpoint operational bottlenecks, and present a custom scope with clear deliverables and milestones.",
        actionText: "Schedule Consultation",
        actionType: "consultation"
      },
      {
        id: "confidentiality",
        question: "How does JVX ensure confidentiality and data security?",
        keywords: ["confidentiality", "security", "nda", "data", "privacy", "compliance", "discretion"],
        answer: "All client engagements are governed by strict international corporate Non-Disclosure Agreements (NDAs). We employ encrypted governance platforms and rigorous multi-tier access controls for all operational and corporate information.",
        actionText: "Talk to JVX",
        actionType: "consultation"
      }
    ]
  },
  es: {
    botName: "JVX Concierge",
    botRole: "Asistente Ejecutivo Inteligente",
    botStatus: "En línea · Sede en Dubái",
    welcomeMessage: "¡Hola! Soy el asistente corporativo de JVX. ¿Cómo podemos respaldar la estructura y el crecimiento internacional de su empresa hoy?",
    inputPlaceholder: "Escriba su consulta sobre servicios, operaciones o Dubái...",
    sendButton: "Enviar",
    suggestedQuestionsTitle: "Preguntas frecuentes seleccionadas:",
    fallbackMessage: "Comprendo su consulta. Para detalles específicos y una propuesta adaptada a la escala de su empresa, nuestra dirección en Dubái puede evaluar su operación directamente.",
    consultationCta: "Agendar Consulta Ejecutiva",
    faqs: [
      {
        id: "services",
        question: "¿Qué servicios ofrece JVX?",
        keywords: ["servicios", "que hacen", "soluciones", "marketing", "operacional", "soporte", "trabajo"],
        answer: "JVX brinda soluciones integradas en 4 pilares: 1) Marketing y Adquisición de Clientes (tráfico calificado, posicionamiento y embudos de conversión); 2) Soporte Operativo y Back-Office (administración de rutinas, atención multilingüe y coordinación documental); 3) Establecimiento y Sede en Dubái (constitución de empresas, gobernanza y cuentas corporativas); 4) Liderazgo Ejecutivo Fraccional (CMO y COO bajo demanda).",
        actionText: "Ver Todos los Servicios",
        actionType: "services"
      },
      {
        id: "how-it-works",
        question: "¿Cómo funciona la contratación y el soporte?",
        keywords: ["como funciona", "etapas", "proceso", "contratacion", "onboarding", "paso a paso"],
        answer: "Operamos en 5 fases: Diagnóstico y Auditoría de Cuellos de Botella -> Plan a Medida -> Onboarding e Integración Segura de Herramientas -> Ejecución Diaria con Desk Dedicado -> Informes Ejecutivos y Escala. Comunicación directa y estricto SLA de respuesta.",
        actionText: "Ver Modelo Operativo",
        actionType: "approach"
      },
      {
        id: "dubai-base",
        question: "¿Por qué la sede en Dubái es ventajosa?",
        keywords: ["dubai", "sede", "emiratos", "ventaja", "horario", "bancos", "internacional"],
        answer: "Dubái es el principal centro de negocios global entre Oriente y Occidente. Proporciona estabilidad regulatoria, una zona horaria estratégica que conecta América, Europa y Asia, y acceso a mercados internacionales de alto valor.",
        actionText: "Conocer la Base en Dubái",
        actionType: "dubai"
      },
      {
        id: "in-house-vs-jvx",
        question: "¿Cuál es la ventaja frente a contratar equipo propio?",
        keywords: ["equipo", "costo", "contratar", "interno", "ventaja", "in-house", "nomina"],
        answer: "Crear equipos internos en varios países implica elevados costos laborales y meses de reclutamiento. JVX entrega una estructura operativa y de marketing lista desde el primer día, con costos transparentes y sin pasivos laborales.",
        actionText: "Agendar Alineamiento",
        actionType: "consultation"
      },
      {
        id: "consultation",
        question: "¿Cómo agendar una reunión con el equipo directivo?",
        keywords: ["agendar", "reunion", "consulta", "contacto", "hablar", "precio", "presupuesto"],
        answer: "Puede solicitar una consulta estratégica a través de nuestra web. Analizamos su estructura de negocio e identificamos las mejores soluciones para su expansión.",
        actionText: "Agendar Consulta Ahora",
        actionType: "consultation"
      },
      {
        id: "confidentiality",
        question: "¿Cómo maneja JVX la confidencialidad?",
        keywords: ["confidencialidad", "seguridad", "nda", "datos", "privacidad", "discrecion"],
        answer: "Todos los acuerdos están protegidos por Acuerdos de Confidencialidad (NDA) corporativos internacionales, con plataformas seguras y estrictos controles de acceso.",
        actionText: "Hablar con JVX",
        actionType: "consultation"
      }
    ]
  },
  ar: {
    botName: "مساعد JVX الذكي",
    botRole: "المساعد التنفيذي المؤسسي",
    botStatus: "متصل الآن · المقر الرئيسي في دبي",
    welcomeMessage: "مرحباً بك! أنا المساعد المؤسسي لشركة JVX. كيف يمكنني مساعدة شركتك في التوسع الدولي والتنظيم التشغيلي والتسويقي اليوم؟",
    inputPlaceholder: "اكتب استفسارك حول الخدمات، العمليات، أو تأسيس الأعمال في دبي...",
    sendButton: "إرسال",
    suggestedQuestionsTitle: "الأسئلة الشائعة الأكثر طلباً:",
    fallbackMessage: "أفهم استفسارك واحتياجك بدقة. للحصول على تفاصيل مخصصة لحجم وطبيعة عملك، يمكن لفريقنا الاستشاري في دبي دراسة عملياتك مباشرة.",
    consultationCta: "طلب جلسة استشارية تنفيذية",
    faqs: [
      {
        id: "services",
        question: "ما هي الخدمات الرئيسية التي تقدمها JVX؟",
        keywords: ["خدمات", "ماذا تقدم", "حلول", "تسويق", "عمليات", "دعم", "نطاق العمل"],
        answer: "توفر JVX حلولاً متكاملة تشمل: 1) التسويق الرقمي وبناء الحضور المؤسسي (توليد الفرص، الحملات، الهوية والعلاقات العامة)؛ 2) الدعم التشغيلي والإداري (الفواتير الدولية، التوثيق، سلاسل الإمداد ومكتب خدمة العملاء)؛ 3) الهيكلة والربط الدولي من دبي (التدفق المالي، الامتثال والفوترة العالمية)؛ 4) القيادة التنفيذية الاستشارية حسب الطلب.",
        actionText: "استكشف كافة الخدمات",
        actionType: "services"
      },
      {
        id: "approach",
        question: "كيف تبدأ الشراكة ومنهجية العمل؟",
        keywords: ["كيف تعمل", "مراحل", "خطوات", "بداية العمل", "منهجية"],
        answer: "نعمل عبر 5 مراحل واضحة: التشخيص وتحليل الاحتياجات -> تصميم مسار العمل والاتفاقيات -> التهيئة ونقل المهام بأمان -> التنفيذ اليومي المنضبط مع فريق مخصص -> التطوير والمراجعة الدورية.",
        actionText: "عرض النموذج التشغيلي",
        actionType: "approach"
      },
      {
        id: "dubai-base",
        question: "ما هي ميزة العمل والفوترة من دبي؟",
        keywords: ["دبي", "مقر", "إمارات", "منطقة حرة", "ضرائب", "بنوك", "عالمي"],
        answer: "تعد دبي المركز التجاري والمالي الأسرع نمواً عالمياً. يوفر العمل انطلاقاً من منطقتنا الحرة (IFZA FZCO) إعفاءً ضريبياً بنسبة 0% على العمليات الخارجية، وملكية أجنبية 100%، وبنية مصرفية آمنة للفوترة الدولية.",
        actionText: "التعرف على مقر دبي والفوترة",
        actionType: "dubai"
      },
      {
        id: "in-house-vs-jvx",
        question: "ما الفرق بين التعاقد مع JVX والتوظيف الداخلي؟",
        keywords: ["فريق", "تكلفة", "توظيف", "داخلي", "مقارنة", "رواتب"],
        answer: "إنشاء فرق داخلية لكل قسم في عدة دول يترتب عليه تكاليف ثابتة مرتفعة ومسؤوليات قانونية معقدة. تقدم JVX هيكلاً تشغيلياً وتسويقياً جاهزاً ومحترفاً من اليوم الأول، بتكلفة مرنة وشفافة وخالية من التزامات التوظيف الدائمة.",
        actionText: "طلب جلسة استماع",
        actionType: "consultation"
      },
      {
        id: "consultation",
        question: "كيف يمكنني حجز استشارة مع فريق الإدارة؟",
        keywords: ["حجز", "اجتماع", "استشارة", "تواصل", "طلب عرض", "سعر"],
        answer: "يمكنك طلب جلسة استشارية تنفيذية مباشرة عبر الموقع. سنقوم بتحليل نموذج عملك الحالي وتقديم توصية مخصصة لتحقيق أهدافك.",
        actionText: "احجز جلستك الاستشارية الآن",
        actionType: "consultation"
      },
      {
        id: "confidentiality",
        question: "كيف تضمن JVX سرية وأمن البيانات؟",
        keywords: ["سرية", "أمان", "خصوصية", "عقود", "اتفاقية عدم إفشاء", "حماية"],
        answer: "تخضع جميع شراكاتنا لاتفاقيات عدم إفشاء دولية صارمة (NDAs)، مع بنية سحابية مشفرة وصلاحيات وصول محدودة لضمان أقصى درجات الأمان والخصوصية المؤسسية.",
        actionText: "تواصل مع JVX",
        actionType: "consultation"
      }
    ]
  }
};
