import type { ServiceDetail, Language } from '../types';

const baseServicesData: Record<'en' | 'es' | 'pt', Record<string, ServiceDetail>> = {
  en: {
    marketing: {
      id: 'marketing',
      tag: 'LEAD SERVICE / 01',
      title: 'Marketing',
      headline: 'Marketing that moves your business forward.',
      strategicDescription: 'Strategic and operational marketing support for businesses that want to strengthen their digital presence, generate opportunities and grow across markets. We act as your remote marketing department, delivering consistent multi-channel execution.',
      whyUae: {
        title: 'Strategic Core Drivers',
        points: [
          'Consistent brand presence across web, social and digital channels',
          'Lead generation support tailored to B2B and high-value service businesses',
          'Executive collateral, pitch decks and digital presentation assets',
          'Multi-market positioning without hiring full-time internal marketing staff',
          'Clear performance tracking and regular reporting on visibility and outreach'
        ]
      },
      whoThisIsFor: [
        'Founders and leadership teams seeking active market presence without in-house overhead',
        'B2B companies expanding internationally needing multi-country digital positioning',
        'Service and consulting firms looking to generate qualified client opportunities',
        'Enterprises needing ongoing creative, social and campaign support'
      ],
      whatJvxHandles: [
        'Corporate digital presence and brand positioning architecture',
        'Campaign coordination, outreach and lead generation support',
        'Executive content creation, presentations and marketing collateral',
        'Cross-market presence and international digital footprint',
        'Operational marketing tracking, reporting and performance visibility'
      ],
      process: [
        {
          step: '01',
          title: 'Brand & Market Audit',
          description: 'We assess your current digital channels, audience, and key commercial priorities.'
        },
        {
          step: '02',
          title: 'Execution Roadmap',
          description: 'We define the content, outreach, and campaign rhythms aligned with your goals.'
        },
        {
          step: '03',
          title: 'Creative & Digital Assets',
          description: 'We produce presentations, collateral, social assets, and digital touchpoints.'
        },
        {
          step: '04',
          title: 'Campaign & Outreach',
          description: 'We run coordinated initiatives to drive visibility and client inquiries.'
        },
        {
          step: '05',
          title: 'Tracking & Optimization',
          description: 'We track results, refine messaging, and provide structured management reports.'
        }
      ],
      whatYouNeed: [
        'Overview of target clients and primary offerings',
        'Existing brand guidelines, assets, or presentations (if available)',
        'Access to relevant digital communication channels'
      ],
      expectedTimeline: 'Initial setup & first campaign rollout within 10–14 business days.',
      complianceNotice: 'JVX delivers strategic and operational marketing execution. Specific commercial conversions depend on market conditions and product-market fit.'
    },
    finance_admin: {
      id: 'finance_admin',
      tag: 'OPERATIONAL SUPPORT / 02',
      title: 'Finance & Administration',
      headline: 'Keep your financial and administrative operations organized, controlled and up to date.',
      strategicDescription: 'Managing invoices, supplier reconciliations, expense tracking, and cash flow reports demands continuous attention. JVX provides structured administrative and financial support so you maintain full visibility and control.',
      whyUae: {
        title: 'Core Operational Advantages',
        points: [
          'Eliminate administrative backlogs and overdue payment reconciliation',
          'Timely invoice issuance and systematic customer follow-up',
          'Organized receipts and documentation ready for accounting',
          'Transparent cash flow visibility for informed management decisions',
          'Strict operational control without positioning as a financial institution'
        ]
      },
      whoThisIsFor: [
        'Growing companies needing dedicated bookkeeping and administrative support',
        'International enterprises managing cross-border invoices and multicurrency expenses',
        'Executive teams wanting clean, organized accounting records without manual friction'
      ],
      whatJvxHandles: [
        'Invoice issuance and distribution',
        'Accounts payable and receivable management',
        'Payment preparation for management approval',
        'Bank and account reconciliation',
        'Expense control and categorization',
        'Customer collections and payment follow-ups',
        'Organization of receipts and supporting documents',
        'Cash flow summaries and operational reports'
      ],
      process: [
        {
          step: '01',
          title: 'Workflow Mapping',
          description: 'Review of current billing, reconciliation, and payment approval mechanisms.'
        },
        {
          step: '02',
          title: 'Tool Integration',
          description: 'Connection with your cloud accounting, spreadsheet, or ERP systems.'
        },
        {
          step: '03',
          title: 'Operational Execution',
          description: 'Daily / weekly invoice processing, reconciliation, and expense filing.'
        },
        {
          step: '04',
          title: 'Approval Gateways',
          description: 'Payment batches prepared for your authorized sign-off.'
        },
        {
          step: '05',
          title: 'Reporting',
          description: 'Periodic cash flow and receivables reporting delivered to leadership.'
        }
      ],
      whatYouNeed: [
        'Access to billing/accounting platforms (read/prep permissions)',
        'Banking read-access or statement export protocols',
        'Approved expense policies and payment authorization thresholds'
      ],
      expectedTimeline: 'Operational integration within 5–7 business days.',
      complianceNotice: 'JVX provides administrative and operational support. We do not act as a financial institution, custodian of funds, or regulated financial advisor.'
    },
    hr_admin: {
      id: 'hr_admin',
      tag: 'OPERATIONAL SUPPORT / 03',
      title: 'HR Administration',
      headline: 'Keep employee records, documentation and administrative processes organized.',
      strategicDescription: 'From onboarding and contract management to tracking leave, working hours, and certificate expiries, JVX handles human resource administration systematically.',
      whyUae: {
        title: 'Core Administrative Benefits',
        points: [
          'Centralized, up-to-date employee dossiers and contracts',
          'Zero missed deadlines for visa, license, or certificate renewals',
          'Structured holiday and working hour tracking',
          'Accurate payroll data preparation ready for payroll disbursement'
        ]
      },
      whoThisIsFor: [
        'Companies with distributed or international team members',
        'Businesses needing structured HR paperwork without a full-time HR department',
        'Leaders wanting organized recruitment pipelines and candidate coordination'
      ],
      whatJvxHandles: [
        'Worker registration and personal dossier maintenance',
        'Contract preparation and document management',
        'Document and credentials validity control',
        'Holiday and leave management tracking',
        'Hours worked and attendance reporting',
        'Preparation of monthly payroll data',
        'Monitoring expiration of visas, licenses, and certificates',
        'Recruitment scheduling and candidate organization'
      ],
      process: [
        {
          step: '01',
          title: 'HR Audit',
          description: 'Inventory of current staff records, contracts, and renewal dates.'
        },
        {
          step: '02',
          title: 'Database Setup',
          description: 'Structuring cloud HR folders and alert calendars for renewals.'
        },
        {
          step: '03',
          title: 'Ongoing Support',
          description: 'Managing leave requests, work hours, and new contract drafting.'
        },
        {
          step: '04',
          title: 'Payroll Prep',
          description: 'Compiling approved hours and deductions for payroll release.'
        },
        {
          step: '05',
          title: 'Review & Compliance',
          description: 'Routine verification of documentation completeness and compliance.'
        }
      ],
      whatYouNeed: [
        'Employee lists and current contract templates',
        'Company holiday and working hour policies',
        'Existing tracking spreadsheets or HR software access'
      ],
      expectedTimeline: 'Setup completed within 5–7 business days.',
      complianceNotice: 'JVX provides administrative HR management. Formal employment law legal advice is not provided unless explicitly contracted with certified legal counsel.'
    },
    procurement: {
      id: 'procurement',
      tag: 'OPERATIONAL SUPPORT / 04',
      title: 'Procurement & Suppliers',
      headline: 'Organize purchasing processes and keep supplier operations under control.',
      strategicDescription: 'Sourcing quotes, issuing purchase orders, following up with vendors, and checking invoices ensure your company never overpays or experiences operational downtime.',
      whyUae: {
        title: 'Procurement Control Pillars',
        points: [
          'Systematic comparison of multiple vendor quotations',
          'Proper purchase order documentation for audit readiness',
          'Rigorous 3-way invoice checking against delivered goods/services',
          'Centralized supplier database and rating history'
        ]
      },
      whoThisIsFor: [
        'Businesses managing frequent supplier interactions and service contracts',
        'Companies purchasing equipment, software, logistics, or operational supplies',
        'Executives wanting transparency over vendor pricing and order delivery'
      ],
      whatJvxHandles: [
        'Requesting commercial proposals and quotes from vendors',
        'Comparing quotations side-by-side on price, timeline, and terms',
        'Creating and issuing Purchase Orders (POs)',
        'Order tracking, fulfillment follow-up, and delivery verification',
        'Supplier registration and vendor compliance records',
        'Invoice checking against purchase orders and delivery notes'
      ],
      process: [
        {
          step: '01',
          title: 'Requisition Review',
          description: 'Receipt of purchase needs and specifications from your team.'
        },
        {
          step: '02',
          title: 'RFQ & Quoting',
          description: 'Soliciting proposals and organizing comparative matrices.'
        },
        {
          step: '03',
          title: 'PO Generation',
          description: 'Creating standardized purchase orders upon management sign-off.'
        },
        {
          step: '04',
          title: 'Vendor Tracking',
          description: 'Active monitoring of production, shipping, and delivery timelines.'
        },
        {
          step: '05',
          title: 'Invoice Matching',
          description: 'Verifying vendor invoices against delivered scopes before payment.'
        }
      ],
      whatYouNeed: [
        'List of approved vendors and procurement guidelines',
        'Company Purchase Order format or template',
        'Standard approval hierarchy for order values'
      ],
      expectedTimeline: 'Immediate operational onboarding within 3–5 business days.',
      complianceNotice: 'JVX acts on behalf of client instructions. Final purchase commitments remain under client management authorization.'
    },
    commercial: {
      id: 'commercial',
      tag: 'OPERATIONAL SUPPORT / 05',
      title: 'Commercial Support',
      headline: 'Support your commercial operation from proposal to follow-up.',
      strategicDescription: 'Keeping deals moving requires swift proposal drafting, up-to-date CRM records, consistent follow-ups, and organized sales contracts. JVX coordinates the operational engine behind your sales team.',
      whyUae: {
        title: 'Commercial Operational Strengths',
        points: [
          'Rapid proposal turnaround so prospective clients stay engaged',
          'Clean, updated CRM data for accurate sales pipeline visibility',
          'Structured follow-up cadences without letting leads slip through',
          'Seamless contract and NDA preparation for closing'
        ]
      },
      whoThisIsFor: [
        'Sales leaders and founders who want to spend time pitching, not filling forms',
        'B2B firms managing complex commercial negotiations and service proposals',
        'Companies requiring disciplined CRM administration and follow-up routines'
      ],
      whatJvxHandles: [
        'Preparing and sending commercial proposals and quotes',
        'CRM updates, pipeline hygiene, and deal stage tracking',
        'Customer registration and account onboarding records',
        'Proposal follow-up and status communications',
        'Standard contract and agreement preparation',
        'Organization of commercial documentation and collateral'
      ],
      process: [
        {
          step: '01',
          title: 'Sales Flow Alignment',
          description: 'Mapping your proposal templates, pricing tables, and CRM fields.'
        },
        {
          step: '02',
          title: 'Template Standardization',
          description: 'Refining executive proposal decks and agreement templates.'
        },
        {
          step: '03',
          title: 'Live Proposal Support',
          description: 'Drafting custom quotes and sending proposals promptly.'
        },
        {
          step: '04',
          title: 'Follow-Up Routine',
          description: 'Executing scheduled touchpoints with clients on pending proposals.'
        },
        {
          step: '05',
          title: 'CRM Maintenance',
          description: 'Logging meeting notes, deal progressions, and closed contracts.'
        }
      ],
      whatYouNeed: [
        'Current proposal templates and standard rate cards',
        'CRM access (HubSpot, Salesforce, Pipedrive, Notion, etc.)',
        'Guidelines for follow-up schedules and client communications'
      ],
      expectedTimeline: 'Integration within 3–5 business days.',
      complianceNotice: 'JVX provides operational and administrative commercial support. We do not claim to close sales or guarantee specific revenue outcomes.'
    },
    documentation: {
      id: 'documentation',
      tag: 'OPERATIONAL SUPPORT / 06',
      title: 'Documentation',
      headline: 'Bring structure, visibility and control to your company\'s documents.',
      strategicDescription: 'Disorganized cloud drives, misplaced contracts, and expiring certificates create operational risk. JVX audits, standardizes, and maintains your company documentation systematically.',
      whyUae: {
        title: 'Governance & Structure',
        points: [
          'Intuitive folder hierarchies across OneDrive or Google Drive',
          'Complete indexing, metadata tagging, and searchable archives',
          'Proactive alerts before any regulatory license or contract expires',
          'Frictionless electronic signature workflows for contracts and forms'
        ]
      },
      whoThisIsFor: [
        'Companies facing cluttered cloud storage and fragmented folder structures',
        'Businesses subject to audits, due diligence, or multi-party reviews',
        'Executives needing instant access to critical company records'
      ],
      whatJvxHandles: [
        'Organization of files in OneDrive, Google Drive, or SharePoint',
        'Digitization, naming standardization, and document classification',
        'Document validity monitoring and renewal reminder schedules',
        'Form preparation, PDF standardization, and data compilation',
        'Electronic signature management via DocuSign, PandaDoc, or Adobe Sign'
      ],
      process: [
        {
          step: '01',
          title: 'Drive Structure Audit',
          description: 'Assessing your current storage, folder confusion, and access levels.'
        },
        {
          step: '02',
          title: 'Taxonomy Design',
          description: 'Creating standardized naming conventions and folder trees.'
        },
        {
          step: '03',
          title: 'Re-indexing & Filing',
          description: 'Sorting, converting, and placing files in their correct repositories.'
        },
        {
          step: '04',
          title: 'E-Signature Setup',
          description: 'Standardizing template fields and signature routing for rapid execution.'
        },
        {
          step: '05',
          title: 'Maintenance',
          description: 'Weekly filing upkeep, validity tracking, and permission management.'
        }
      ],
      whatYouNeed: [
        'Administrator or folder access to company cloud drive',
        'Identification of key document categories (Legal, Financial, HR, Commercial)',
        'E-signature platform credentials or preference'
      ],
      expectedTimeline: 'Full reorganization and setup within 5–7 business days.',
      complianceNotice: 'JVX maintains document order and classification under strict confidentiality. Original master document legal validity remains with the issuing authority.'
    },
    customer_support: {
      id: 'customer_support',
      tag: 'OPERATIONAL SUPPORT / 07',
      title: 'Customer Support',
      headline: 'Ensure your customers receive a professional and organized first response.',
      strategicDescription: 'Unanswered emails or delayed WhatsApp messages cost clients. JVX provides reliable first-tier customer response, ticket routing, and inquiry tracking during business hours.',
      whyUae: {
        title: 'Customer Experience Foundations',
        points: [
          'Professional, courteous, and prompt initial client response',
          'Dedicated management of corporate inbox and business WhatsApp',
          'Clear triage routing technical or billing issues to the right internal lead',
          'Complete resolution follow-up so no customer ticket is forgotten'
        ]
      },
      whoThisIsFor: [
        'Companies experiencing growing inbound inquiries through email and WhatsApp',
        'B2B firms requiring structured customer triage and ticketing',
        'Businesses seeking reliable first-response coverage during business hours'
      ],
      whatJvxHandles: [
        'Corporate email inbox triage and response handling',
        'Business WhatsApp customer communications and routing',
        'Initial customer support, standard FAQ replies, and triage',
        'Request routing to appropriate internal departments or specialists',
        'Ticket and inquiry follow-up through completion'
      ],
      process: [
        {
          step: '01',
          title: 'Knowledge Base Setup',
          description: 'Compiling standard responses, FAQs, escalation contacts, and brand tone.'
        },
        {
          step: '02',
          title: 'Channel Integration',
          description: 'Connecting to business inbox, WhatsApp Business, or helpdesk tool.'
        },
        {
          step: '03',
          title: 'Live Triage & Response',
          description: 'Handling incoming requests with verified response protocols.'
        },
        {
          step: '04',
          title: 'Escalation Routing',
          description: 'Forwarding complex technical or strategic issues to your core team.'
        },
        {
          step: '05',
          title: 'Weekly Ticket Review',
          description: 'Reporting on inquiry volume, common questions, and response times.'
        }
      ],
      whatYouNeed: [
        'Access to support email or ticketing software',
        'WhatsApp Business number or multi-agent access',
        'Product/service FAQ guidelines and internal escalation matrix'
      ],
      expectedTimeline: 'Trained and live within 5–7 business days.',
      complianceNotice: 'Support is provided during agreed business hours. 24/7 coverage is available only under customized enterprise SLA arrangements.'
    },
    executive_assistance: {
      id: 'executive_assistance',
      tag: 'OPERATIONAL SUPPORT / 08',
      title: 'Executive Assistance',
      headline: 'Give leadership more time to focus on decisions while we support the operational details.',
      strategicDescription: 'Executives should spend their hours driving vision and closing relationships, not rescheduling calendars, booking itineraries, or chasing meeting minutes. JVX provides discreet, high-level executive support.',
      whyUae: {
        title: 'Executive Freedom',
        points: [
          'Flawless calendar coordination across multiple international time zones',
          'Stress-free corporate travel, flight, hotel, and dinner reservations',
          'Action-oriented meeting minutes, briefs, and follow-up tracking',
          'Absolute discretion and confidential handling of executive affairs'
        ]
      },
      whoThisIsFor: [
        'C-level executives, founders, and managing directors with demanding schedules',
        'Leadership teams traveling frequently across international markets',
        'Executives requiring a dedicated, polished right-hand executive coordinator'
      ],
      whatJvxHandles: [
        'Calendar and schedule management across time zones',
        'Meeting coordination, confirmations, and attendee briefings',
        'Travel logistics: flights, executive accommodation, and transport',
        'Reservations, memberships, and concierge arrangements',
        'Executive document preparation, agendas, and executive summaries',
        'Management reports and slide deck formatting',
        'Task follow-up and action-item monitoring for management'
      ],
      process: [
        {
          step: '01',
          title: 'Executive Onboarding',
          description: 'Understanding your schedule habits, travel preferences, and key priorities.'
        },
        {
          step: '02',
          title: 'Calendar Takeover',
          description: 'Integrating calendar management and scheduling rules.'
        },
        {
          step: '03',
          title: 'Daily Coordination',
          description: 'Managing appointments, scheduling changes, and incoming requests.'
        },
        {
          step: '04',
          title: 'Travel & Meeting Briefs',
          description: 'Preparing detailed travel itineraries and meeting packs.'
        },
        {
          step: '05',
          title: 'Action Item Tracking',
          description: 'Ensuring commitments made in executive meetings are executed.'
        }
      ],
      whatYouNeed: [
        'Calendar access (Google Workspace / Outlook)',
        'Travel profile preferences (airlines, seating, hotels, loyalty numbers)',
        'Communication channel preference for quick updates (WhatsApp / Telegram / Slack)'
      ],
      expectedTimeline: 'Seamless onboarding within 48–72 hours.',
      complianceNotice: 'Executive assistance is conducted under strict confidentiality. Confidentiality agreements are executed prior to operational start.'
    },
    international: {
      id: 'international',
      tag: 'OPERATIONAL SUPPORT / 09',
      title: 'International Support',
      headline: 'Support your business when operations, communication and documentation cross borders.',
      strategicDescription: 'Operating in multiple countries introduces language differences, varied document requirements, and cultural nuances. Based in Dubai—one of the world\'s premier cross-border hubs—JVX provides fluent international support.',
      whyUae: {
        title: 'Cross-Border Excellence',
        points: [
          'Smooth English, Spanish, and multilingual business communications',
          'Document preparation adapted to regional requirements across Europe, the Americas, and MENA',
          'Professional coordination with overseas clients, partners, and vendors',
          'Strategic perspective anchored in international business hub dynamics'
        ]
      },
      whoThisIsFor: [
        'Companies serving international clients or dealing with foreign suppliers',
        'Businesses needing multilingual administrative communication',
        'Enterprises expanding beyond their domestic market into global territory'
      ],
      whatJvxHandles: [
        'Administrative translations (business English, Spanish, Portuguese)',
        'Communication and correspondence with international clients and partners',
        'Preparation and review of documentation for different country standards',
        'Cross-border operational process follow-up and coordination'
      ],
      process: [
        {
          step: '01',
          title: 'Jurisdictional Review',
          description: 'Identifying target markets, partner languages, and documentation rules.'
        },
        {
          step: '02',
          title: 'Communication Protocol',
          description: 'Establishing multilingual email and correspondence standards.'
        },
        {
          step: '03',
          title: 'Document Harmonization',
          description: 'Translating and formatting commercial files for international use.'
        },
        {
          step: '04',
          title: 'Partner Liaison',
          description: 'Direct communication with overseas contacts on operational matters.'
        },
        {
          step: '05',
          title: 'Continuous Coordination',
          description: 'Ongoing cross-border tracking and operational progress reporting.'
        }
      ],
      whatYouNeed: [
        'Details of cross-border operations and overseas partner requirements',
        'Source documents requiring administrative translation or formatting',
        'Preferred communication tone and response protocols'
      ],
      expectedTimeline: 'Operational within 3–5 business days.',
      complianceNotice: 'JVX provides administrative translations and commercial support. Sworn, apostilled, or legal certifications require accredited notarization bodies where statutory.'
    }
  },
  es: {
    marketing: {
      id: 'marketing',
      tag: 'SERVICIO PRINCIPAL / 01',
      title: 'Marketing',
      headline: 'Marketing que impulsa su negocio.',
      strategicDescription: 'Soporte estratégico y operativo de marketing para empresas que buscan fortalecer su presencia digital, generar oportunidades y expandirse en diversos mercados.',
      whyUae: {
        title: 'Factores Clave de Crecimiento',
        points: [
          'Presencia constante de marca en canales web, redes y plataformas digitales',
          'Generación de oportunidades orientada a empresas B2B y servicios de alto valor',
          'Material comercial, presentaciones ejecutivas y piezas digitales de alto impacto',
          'Posicionamiento internacional sin contratar equipos internos fijos',
          'Informes periódicos de métricas, visibilidad y alcance'
        ]
      },
      whoThisIsFor: [
        'Empresas que buscan presencia activa de mercado sin costes fijos de contratación',
        'Compañías B2B en expansión internacional que necesitan visibilidad multicanal',
        'Firmas de servicios profesionales orientadas a generar contactos cualificados'
      ],
      whatJvxHandles: [
        'Presencia digital y posicionamiento corporativo de marca',
        'Coordinación de campañas y soporte en generación de oportunidades',
        'Creación de contenido y material digital ejecutivo',
        'Presencia multicanal y alcance transfronterizo',
        'Seguimiento operativo de marketing e informes de rendimiento'
      ],
      process: [
        {
          step: '01',
          title: 'Auditoría Digital',
          description: 'Evaluamos sus canales actuales, propuesta de valor y objetivos comerciales.'
        },
        {
          step: '02',
          title: 'Hoja de Ruta',
          description: 'Definimos los ritmos de publicación, campañas y generación de contactos.'
        },
        {
          step: '03',
          title: 'Producción de Materiales',
          description: 'Diseño y redacción de presentaciones, creatividades y contenidos.'
        },
        {
          step: '04',
          title: 'Ejecución y Difusión',
          description: 'Lanzamiento coordinado para generar visibilidad y consultas comerciales.'
        },
        {
          step: '05',
          title: 'Optimización Continua',
          description: 'Medición de impacto, ajustes de mensaje y reportes a la dirección.'
        }
      ],
      whatYouNeed: [
        'Descripción del cliente objetivo y servicios principales',
        'Directrices de marca o presentaciones existentes (si las hubiera)',
        'Acceso a los canales de comunicación digital pertinentes'
      ],
      expectedTimeline: 'Integración inicial y primeros lanzamientos en 10–14 días hábiles.',
      complianceNotice: 'JVX proporciona soporte estratégico y operativo de marketing. La conversión final depende de las condiciones del mercado.'
    },
    finance_admin: {
      id: 'finance_admin',
      tag: 'SOPORTE OPERATIVO / 02',
      title: 'Finanzas y Administración',
      headline: 'Mantenga sus operaciones financieras y administrativas organizadas, controladas y al día.',
      strategicDescription: 'La gestión de facturas, conciliaciones bancarias, gastos y reportes de flujo de caja requiere atención continua. JVX aporta un soporte administrativo y financiero estructurado para un control impecable.',
      whyUae: {
        title: 'Ventajas Operativas',
        points: [
          'Eliminación de retrasos administrativos y conciliaciones pendientes',
          'Emisión puntual de facturas y seguimiento sistemático de cobros',
          'Recibos y justificantes organizados para el cierre contable',
          'Visibilidad clara del flujo de caja para decisiones informadas'
        ]
      },
      whoThisIsFor: [
        'Empresas en crecimiento que necesitan orden administrativo diario',
        'Compañías internacionales con facturación y gastos multimoneda',
        'Equipos directivos que requieren información contable ordenada'
      ],
      whatJvxHandles: [
        'Emisión de facturas',
        'Cuentas por pagar y por cobrar',
        'Preparación de pagos para aprobación',
        'Conciliación bancaria',
        'Control de gastos',
        'Gestión de cobros a clientes',
        'Organización de recibos y justificantes',
        'Informes de flujo de caja'
      ],
      process: [
        {
          step: '01',
          title: 'Mapeo de Flujos',
          description: 'Revisión de circuitos de facturación, cobro y autorización.'
        },
        {
          step: '02',
          title: 'Integración',
          description: 'Conexión con su software de facturación o plantillas operativas.'
        },
        {
          step: '03',
          title: 'Gestión Periódica',
          description: 'Procesamiento de facturas, conciliaciones y archivo de justificantes.'
        },
        {
          step: '04',
          title: 'Lotes de Pago',
          description: 'Preparación de transferencias listas para su firma y autorización.'
        },
        {
          step: '05',
          title: 'Reportes',
          description: 'Entrega periódica de resúmenes de tesorería y saldos pendientes.'
        }
      ],
      whatYouNeed: [
        'Acceso de consulta/preparación a plataformas contables',
        'Extractos bancarios o protocolos de consulta',
        'Políticas de aprobación de gastos'
      ],
      expectedTimeline: 'Integración operativa en 5–7 días hábiles.',
      complianceNotice: 'JVX presta soporte administrativo y operativo. No actuamos como entidad financiera ni gestora de fondos.'
    },
    hr_admin: {
      id: 'hr_admin',
      tag: 'SOPORTE OPERATIVO / 03',
      title: 'Administración de RRHH',
      headline: 'Mantenga organizados los registros de personal, la documentación y los procesos administrativos.',
      strategicDescription: 'Desde el alta de colaboradores y la gestión contractual hasta el control de vacaciones, horas y vencimientos, JVX gestiona la administración de personal con total rigor.',
      whyUae: {
        title: 'Beneficios Administrativos',
        points: [
          'Expedientes y contratos de trabajo organizados y actualizados',
          'Control preventivo de vencimiento de visados, licencias y certificados',
          'Gestión sistemática de vacaciones y registro horario',
          'Datos de nómina preparados puntualmente cada mes'
        ]
      },
      whoThisIsFor: [
        'Empresas con equipos distribuidos o internacionales',
        'Compañías que requieren procesos de RRHH ordenados sin un departamento fijo',
        'Líderes que buscan agilidad en la organización de selecciones'
      ],
      whatJvxHandles: [
        'Registro de colaboradores',
        'Contratos',
        'Control documental',
        'Gestión de vacaciones',
        'Registro de horas trabajadas',
        'Preparación de datos de nómina',
        'Control de vencimientos de visados, licencias y certificados',
        'Organización de procesos de selección'
      ],
      process: [
        {
          step: '01',
          title: 'Auditoría Inicial',
          description: 'Inventario de contratos existentes, fichas y calendario de renovaciones.'
        },
        {
          step: '02',
          title: 'Estructuración',
          description: 'Creación de repositorio seguro de RRHH y calendario de alertas.'
        },
        {
          step: '03',
          title: 'Gestión Continua',
          description: 'Tramitación de solicitudes de ausencia, altas y contratos.'
        },
        {
          step: '04',
          title: 'Preparación de Nómina',
          description: 'Cálculo de variables y horas para emisión de nóminas.'
        },
        {
          step: '05',
          title: 'Supervisión',
          description: 'Revisión periódica de documentación y cumplimiento.'
        }
      ],
      whatYouNeed: [
        'Listado de plantilla y modelos de contrato vigentes',
        'Normativa interna sobre jornadas y vacaciones',
        'Herramientas actuales de registro'
      ],
      expectedTimeline: 'Puesta en marcha en 5–7 días hábiles.',
      complianceNotice: 'JVX proporciona soporte administrativo de RRHH. No constituye asesoramiento jurídico laboral formal.'
    },
    procurement: {
      id: 'procurement',
      tag: 'SOPORTE OPERATIVO / 04',
      title: 'Compras y Proveedores',
      headline: 'Organice los procesos de compra y mantenga bajo control las operaciones con proveedores.',
      strategicDescription: 'Solicitar cotizaciones, emitir órdenes de compra, coordinar entregas y cotejar facturas previene sobrecostes y asegura el abastecimiento puntual de su operativa.',
      whyUae: {
        title: 'Control de Compras',
        points: [
          'Comparativa analítica de ofertas para optimizar costes',
          'Documentación estandarizada mediante órdenes de compra (PO)',
          'Cotejo estricto de facturas con albaranes de entrega',
          'Registro actualizado y cualificación de proveedores'
        ]
      },
      whoThisIsFor: [
        'Compañías con compras recurrentes de servicios, software o suministros',
        'Empresas que gestionan múltiples contratos con proveedores externos',
        'Direcciones que requieren transparencia en compras y facturación de terceros'
      ],
      whatJvxHandles: [
        'Solicitud de propuestas',
        'Comparativa de cotizaciones',
        'Creación de órdenes de compra (Purchase Orders)',
        'Seguimiento de pedidos',
        'Registro de proveedores',
        'Revisión y cotejo de facturas (Invoices)'
      ],
      process: [
        {
          step: '01',
          title: 'Requerimientos',
          description: 'Recepción de especificaciones de compra solicitadas por su equipo.'
        },
        {
          step: '02',
          title: 'Petición de Ofertas',
          description: 'Solicitud y cuadro comparativo de presupuestos.'
        },
        {
          step: '03',
          title: 'Emisión de PO',
          description: 'Generación formal de la orden de compra aprobada.'
        },
        {
          step: '04',
          title: 'Seguimiento',
          description: 'Contacto con el proveedor para asegurar plazos de entrega.'
        },
        {
          step: '05',
          title: 'Validación de Factura',
          description: 'Comprobación de la factura contra la orden y lo recibido.'
        }
      ],
      whatYouNeed: [
        'Lista de proveedores habituales y criterios de compra',
        'Plantilla de Orden de Compra o especificaciones',
        'Niveles de autorización de gasto'
      ],
      expectedTimeline: 'Integración en 3–5 días hábiles.',
      complianceNotice: 'JVX actúa según las instrucciones del cliente. La aprobación definitiva de compra corresponde a la dirección de la empresa.'
    },
    commercial: {
      id: 'commercial',
      tag: 'SOPORTE OPERATIVO / 05',
      title: 'Soporte Comercial',
      headline: 'Apoye su operativa comercial desde la propuesta hasta el seguimiento final.',
      strategicDescription: 'Acelerar el ciclo de ventas requiere rapidez en presupuestos, CRM actualizado, seguimiento riguroso de propuestas y redacción ágil de contratos.',
      whyUae: {
        title: 'Eficiencia Comercial',
        points: [
          'Emisión rápida de propuestas comerciales a prospectos interesados',
          'CRM ordenado y actualizado para visibilidad real del pipeline',
          'Rutina disciplinada de seguimiento sin perder oportunidades',
          'Preparación inmediata de contratos de servicio y acuerdos NDA'
        ]
      },
      whoThisIsFor: [
        'Líderes comerciales que deben enfocarse en cerrar y no en tareas burocráticas',
        'Empresas B2B con propuestas comerciales detalladas',
        'Compañías que requieren higiene y actualización continua de su CRM'
      ],
      whatJvxHandles: [
        'Preparación y envío de propuestas',
        'Actualización de CRM',
        'Registro de clientes',
        'Seguimiento de propuestas (Follow-up)',
        'Preparación de contratos',
        'Organización de documentación comercial'
      ],
      process: [
        {
          step: '01',
          title: 'Modelos de Propuesta',
          description: 'Estandarización de tarifas, plantillas y campos de CRM.'
        },
        {
          step: '02',
          title: 'Emisión Ágil',
          description: 'Redacción y envío de ofertas comerciales a clientes.'
        },
        {
          step: '03',
          title: 'Seguimiento',
          description: 'Contacto coordinado con el cliente para verificar recepción y dudas.'
        },
        {
          step: '04',
          title: 'Contratación',
          description: 'Preparación de acuerdos y contratos comerciales.'
        },
        {
          step: '05',
          title: 'Control en CRM',
          description: 'Registro de estados, motivos de cierre y altas de cuenta.'
        }
      ],
      whatYouNeed: [
        'Modelos de propuesta comercial y tarifas vigentes',
        'Acceso al CRM de la compañía',
        'Pautas de tono y frecuencia de seguimiento'
      ],
      expectedTimeline: 'Integración operativa en 3–5 días hábiles.',
      complianceNotice: 'JVX presta soporte comercial operativo. No garantiza el cierre de ventas ni volúmenes específicos de facturación.'
    },
    documentation: {
      id: 'documentation',
      tag: 'SOPORTE OPERATIVO / 06',
      title: 'Documentación',
      headline: 'Aporte estructura, visibilidad y control a los documentos de su compañía.',
      strategicDescription: 'Archivos dispersos en la nube, contratos sin clasificar y documentos caducados generan vulnerabilidad. JVX audita, organiza y mantiene su documentación corporativa bajo control.',
      whyUae: {
        title: 'Gobierno Documental',
        points: [
          'Estructura de carpetas intuitiva en OneDrive o Google Drive',
          'Nomenclatura homogénea y archivo indexado para búsqueda inmediata',
          'Alertas proactivas ante vencimientos de acuerdos o registros',
          'Gestión ágil de firmas electrónicas para contratos y actas'
        ]
      },
      whoThisIsFor: [
        'Compañías con almacenamiento en la nube desordenado y duplicado',
        'Empresas en procesos de auditoría, due diligence o inversión',
        'Directivos que necesitan acceder a contratos clave sin demoras'
      ],
      whatJvxHandles: [
        'Organización de archivos en OneDrive / Google Drive',
        'Digitalización y clasificación',
        'Control de vigencia y vencimientos de documentos',
        'Preparación de formularios',
        'Gestión de firmas electrónicas'
      ],
      process: [
        {
          step: '01',
          title: 'Diagnóstico',
          description: 'Revisión del estado actual del repositorio y carpetas.'
        },
        {
          step: '02',
          title: 'Estructuración',
          description: 'Definición de taxonomía, permisos y nomenclatura clara.'
        },
        {
          step: '03',
          title: 'Clasificación',
          description: 'Ordenación masiva y archivo sistemático de expedientes.'
        },
        {
          step: '04',
          title: 'Firma Digital',
          description: 'Configuración de circuitos de firma electrónica segura.'
        },
        {
          step: '05',
          title: 'Mantenimiento',
          description: 'Mantenimiento semanal del orden documental y alertas.'
        }
      ],
      whatYouNeed: [
        'Acceso a la nube corporativa (OneDrive, Drive, etc.)',
        'Categorías principales de archivo',
        'Plataforma de firma electrónica utilizada'
      ],
      expectedTimeline: 'Reorganización completa en 5–7 días hábiles.',
      complianceNotice: 'JVX organiza y custodia la documentación bajo estricta confidencialidad. La validez legal sustantiva corresponde al emisor.'
    },
    customer_support: {
      id: 'customer_support',
      tag: 'SOPORTE OPERATIVO / 07',
      title: 'Atención al Cliente',
      headline: 'Asegure que sus clientes reciban una primera respuesta profesional y organizada.',
      strategicDescription: 'Correos sin responder o consultas de WhatsApp desatendidas dañan la reputación comercial. JVX proporciona una primera respuesta ágil, enrutamiento de peticiones y seguimiento sistemático.',
      whyUae: {
        title: 'Calidad de Servicio',
        points: [
          'Atención inicial rápida, educada y profesional en horario comercial',
          'Gestión coordinada de buzones corporativos y WhatsApp Business',
          'Derivación precisa de asuntos técnicos o urgentes al departamento idóneo',
          'Seguimiento exhaustivo para asegurar que ninguna consulta queda sin resolver'
        ]
      },
      whoThisIsFor: [
        'Empresas con volumen creciente de consultas por email y WhatsApp',
        'Negocios B2B que requieren triaje profesional de peticiones de clientes',
        'Compañías que buscan garantizar cobertura ágil en horario laboral'
      ],
      whatJvxHandles: [
        'Gestión de correo corporativo',
        'WhatsApp Business corporativo',
        'Atención inicial a clientes',
        'Enrutamiento de solicitudes',
        'Seguimiento de tickets y peticiones'
      ],
      process: [
        {
          step: '01',
          title: 'Base de Respuestas',
          description: 'Recopilación de respuestas tipo, preguntas frecuentes y protocolo de tono.'
        },
        {
          step: '02',
          title: 'Conexión',
          description: 'Habilitación de buzón de correo o WhatsApp Business multisesión.'
        },
        {
          step: '03',
          title: 'Atención Diaria',
          description: 'Respuesta inmediata a consultas habituales y dudas iniciales.'
        },
        {
          step: '04',
          title: 'Derivación',
          description: 'Canalización de casos específicos al responsable adecuado en su equipo.'
        },
        {
          step: '05',
          title: 'Seguimiento',
          description: 'Comprobación de resolución satisfactoria y reporte de incidencias.'
        }
      ],
      whatYouNeed: [
        'Acceso al buzón de soporte o herramienta de tickets',
        'Línea de WhatsApp Business o acceso a plataforma',
        'Guía de preguntas frecuentes y matriz de contactos internos'
      ],
      expectedTimeline: 'Operativo en 5–7 días hábiles.',
      complianceNotice: 'El servicio se presta en el horario comercial acordado. La cobertura 24/7 requiere acuerdos específicos.'
    },
    executive_assistance: {
      id: 'executive_assistance',
      tag: 'SOPORTE OPERATIVO / 08',
      title: 'Asistencia Ejecutiva',
      headline: 'Proporcione al liderazgo más tiempo para decidir mientras gestionamos los detalles operativos.',
      strategicDescription: 'Los directivos deben dedicar su tiempo a la visión estratégica y al cierre de acuerdos, no a coordinar calendarios, reservas de viaje o redactar minutas. JVX brinda asistencia ejecutiva remota de alto nivel.',
      whyUae: {
        title: 'Tiempo para lo Esencial',
        points: [
          'Gestión impecable de agenda en múltiples husos horarios',
          'Coordinación de vuelos, traslados, hoteles y reservas ejecutivas',
          'Preparación de resúmenes previos a reuniones y actas de seguimiento',
          'Máxima discreción y confidencialidad en los asuntos de dirección'
        ]
      },
      whoThisIsFor: [
        'Directores generales, fundadores y socios con agendas de alta intensidad',
        'Líderes con desplazamientos internacionales frecuentes',
        'Equipos directivos que valoran una interlocución ejecutiva de confianza'
      ],
      whatJvxHandles: [
        'Gestión de agenda y calendarios',
        'Coordinación de reuniones',
        'Viajes y desplazamientos',
        'Reservas ejecutivas',
        'Preparación de documentos',
        'Informes y reportes de gestión',
        'Seguimiento de tareas para la dirección'
      ],
      process: [
        {
          step: '01',
          title: 'Alineación de Hábitos',
          description: 'Comprensión de sus rutinas de trabajo, preferencias de viaje y prioridades.'
        },
        {
          step: '02',
          title: 'Agenda',
          description: 'Toma de control del calendario y reglas de disponibilidad.'
        },
        {
          step: '03',
          title: 'Coordinación Diaria',
          description: 'Programación de citas, preparación de enlaces y reajustes.'
        },
        {
          step: '04',
          title: 'Viajes y Reservas',
          description: 'Elaboración de itinerarios completos de vuelos y alojamientos.'
        },
        {
          step: '05',
          title: 'Seguimiento de Tareas',
          description: 'Control de compromisos adquiridos en comités o reuniones.'
        }
      ],
      whatYouNeed: [
        'Acceso al calendario (Google / Outlook)',
        'Preferencias de viaje (aerolíneas, hoteles, fidelización)',
        'Canal de mensajería directa para comunicación ágil'
      ],
      expectedTimeline: 'Integración en 48–72 horas.',
      complianceNotice: 'La asistencia se realiza bajo estrictos acuerdos de confidencialidad suscritos con anterioridad.'
    },
    international: {
      id: 'international',
      tag: 'SOPORTE OPERATIVO / 09',
      title: 'Soporte Internacional',
      headline: 'Respalde su negocio cuando las operaciones, comunicaciones y documentación cruzan fronteras.',
      strategicDescription: 'Operar en diversos países introduce diferencias lingüísticas, requerimientos formales específicos y dinámicas transfronterizas. Con sede en Dubái, JVX ofrece un soporte internacional fluido.',
      whyUae: {
        title: 'Alcance Transfronterizo',
        points: [
          'Comunicación empresarial fluida en inglés, español y entornos multilenguaje',
          'Preparación documental adaptada a exigencias de diferentes países',
          'Coordinación profesional con clientes, proveedores y socios extranjeros',
          'Perspectiva estratégica forjada en un centro neurálgico internacional'
        ]
      },
      whoThisIsFor: [
        'Empresas con clientes en múltiples geografías o proveedores internacionales',
        'Compañías que requieren comunicación administrativa multilingüe',
        'Negocios en expansión más allá de su mercado doméstico'
      ],
      whatJvxHandles: [
        'Traducciones administrativas',
        'Comunicación con clientes internacionales',
        'Preparación de documentación para diferentes países',
        'Seguimiento de trámites internacionales'
      ],
      process: [
        {
          step: '01',
          title: 'Análisis de Mercados',
          description: 'Identificación de países destino, idiomas y particularidades documentales.'
        },
        {
          step: '02',
          title: 'Protocolo de Comunicación',
          description: 'Pautas de correspondencia y traducción administrativa.'
        },
        {
          step: '03',
          title: 'Adaptación de Documentos',
          description: 'Revisión y formato de expedientes comerciales para su uso en el exterior.'
        },
        {
          step: '04',
          title: 'Interlocución',
          description: 'Contacto directo con contrapartes internacionales en temas operativos.'
        },
        {
          step: '05',
          title: 'Seguimiento',
          description: 'Supervisión del avance de gestiones y reporte regular a la dirección.'
        }
      ],
      whatYouNeed: [
        'Detalles de la operativa exterior y exigencias de los socios internacionales',
        'Documentación comercial de origen a adaptar o traducir',
        'Protocolo de comunicación y tono preferido'
      ],
      expectedTimeline: 'Operativo en 3–5 días hábiles.',
      complianceNotice: 'JVX proporciona soporte comercial y traducciones administrativas. Las traducciones juradas o apostillas oficiales requieren los organismos notariales correspondientes.'
    }
  },
  pt: {
    marketing: {
      id: 'marketing',
      tag: 'SERVIÇO PRINCIPAL / 01',
      title: 'Marketing',
      headline: 'Marketing que impulsiona seus negócios.',
      strategicDescription: 'Suporte estratégico e operacional de marketing para empresas que buscam fortalecer sua presença digital, gerar oportunidades e crescer em diversos mercados.',
      whyUae: {
        title: 'Pilares de Crescimento',
        points: [
          'Presença constante de marca em canais digitais, web e mídias sociais',
          'Geração de oportunidades voltada a empresas B2B e serviços de alto valor',
          'Materiais executivos, apresentações comerciais e criativos digitais de impacto',
          'Posicionamento internacional sem custos fixos de contratação interna',
          'Relatórios frequentes de métricas, alcance e oportunidades geradas'
        ]
      },
      whoThisIsFor: [
        'Lideranças que buscam presença ativa de mercado sem custos fixos de equipe',
        'Empresas B2B em expansão internacional que necessitam de presença multicanal',
        'Firmas de serviços profissionais focadas em gerar leads qualificados'
      ],
      whatJvxHandles: [
        'Presença digital e posicionamento corporativo de marca',
        'Coordenação de campanhas e suporte em geração de leads',
        'Criação de conteúdo e materiais digitais executivos',
        'Presença multicanal e alcance internacional',
        'Acompanhamento operacional de marketing e relatórios de desempenho'
      ],
      process: [
        {
          step: '01',
          title: 'Diagnóstico Digital',
          description: 'Avaliamos seus canais atuais, posicionamento e metas comerciais.'
        },
        {
          step: '02',
          title: 'Planejamento de Ações',
          description: 'Definimos cronograma de conteúdo, campanhas e abordagem.'
        },
        {
          step: '03',
          title: 'Produção Criativa',
          description: 'Elaboração de peças, apresentações comerciais e conteúdos.'
        },
        {
          step: '04',
          title: 'Veiculação & Prospecção',
          description: 'Disseminação estruturada para gerar visibilidade e consultas.'
        },
        {
          step: '05',
          title: 'Otimização Contínua',
          description: 'Mensuração de resultados e ajustes estratégicos de mensagem.'
        }
      ],
      whatYouNeed: [
        'Definição do público-alvo e portfólio de serviços',
        'Identidade visual ou materiais existentes',
        'Acesso aos canais de comunicação digital relevantes'
      ],
      expectedTimeline: 'Primeiras ações e materiais no ar em 10–14 dias úteis.',
      complianceNotice: 'A JVX fornece suporte operacional e estratégico de marketing. Resultados comerciais dependem das condições de mercado.'
    },
    finance_admin: {
      id: 'finance_admin',
      tag: 'SUPORTE OPERACIONAL / 02',
      title: 'Finanças e Administração',
      headline: 'Mantenha suas operações financeiras e administrativas organizadas, controladas e em dia.',
      strategicDescription: 'Emissão de invoices, conciliações, controle de despesas e relatórios de fluxo de caixa exigem rotina disciplinada. A JVX provê suporte operacional estruturado para controle total.',
      whyUae: {
        title: 'Vantagens Operacionais',
        points: [
          'Eliminação de pendências administrativas e atrasos em conciliações',
          'Emissão ágil de faturas e acompanhamento rigoroso de cobranças',
          'Comprovantes organizados para o fechamento contábil',
          'Visibilidade clara de fluxo de caixa para decisões da diretoria'
        ]
      },
      whoThisIsFor: [
        'Empresas em crescimento que demandam rotina administrativa organizada',
        'Operações com faturamento internacional e despesas em várias moedas',
        'Diretorias que precisam de dados contábeis limpos e estruturados'
      ],
      whatJvxHandles: [
        'Emissão de faturas e invoices',
        'Contas a pagar e a receber',
        'Preparação de pagamentos para aprovação',
        'Conciliação bancária',
        'Controle de despesas operacionais e corporativas',
        'Cobrança e follow-up de recebíveis',
        'Organização de recibos e comprovantes',
        'Relatórios de fluxo de caixa'
      ],
      process: [
        {
          step: '01',
          title: 'Mapeamento',
          description: 'Revisão dos fluxos de faturamento, conciliação e autorizações.'
        },
        {
          step: '02',
          title: 'Integração',
          description: 'Conexão com planilhas ou sistemas de gestão financeira.'
        },
        {
          step: '03',
          title: 'Rotina Operacional',
          description: 'Lançamento de contas, conciliações e arquivo de recibos.'
        },
        {
          step: '04',
          title: 'Lotes de Pagamento',
          description: 'Preparação de remessas para aprovação final da liderança.'
        },
        {
          step: '05',
          title: 'Relatórios',
          description: 'Envio regular de resumos de caixa e contas pendentes.'
        }
      ],
      whatYouNeed: [
        'Acesso de consulta aos sistemas financeiros',
        'Extratos bancários para conferência',
        'Alçadas de aprovação de despesas'
      ],
      expectedTimeline: 'Integração em 5–7 dias úteis.',
      complianceNotice: 'A JVX fornece suporte administrativo e operacional. Não atuamos como instituição financeira regulada ou custodiante de recursos.'
    },
    hr_admin: {
      id: 'hr_admin',
      tag: 'SUPORTE OPERACIONAL / 03',
      title: 'Administração de RH',
      headline: 'Mantenha os registros de colaboradores, documentação e processos administrativos organizados.',
      strategicDescription: 'De admissões e gestão de contratos ao controle de férias, horas e certidões, a JVX cuida da administração de colaboradores de forma metódica.',
      whyUae: {
        title: 'Governança de Pessoas',
        points: [
          'Dossiês e contratos de trabalho padronizados e arquivados',
          'Controle preventivo de vencimento de vistos, licenças e certificados',
          'Acompanhamento de férias e horas trabalhadas sem fricção',
          'Fechamento pontual de dados para processamento da folha'
        ]
      },
      whoThisIsFor: [
        'Empresas com equipes remotas ou atuando em diferentes países',
        'Negócios que precisam de rotina estruturada de RH sem contratar setor fixo',
        'Líderes que buscam apoio operacional na condução de processos seletivos'
      ],
      whatJvxHandles: [
        'Registro e cadastro de colaboradores',
        'Contratos de trabalho e prestação de serviço',
        'Controle documental e certidões',
        'Gestão de férias e ausências',
        'Controle de horas trabalhadas',
        'Preparação de dados para folha de pagamento',
        'Acompanhamento de vencimentos de vistos, licenças e certificados',
        'Organização de etapas de recrutamento'
      ],
      process: [
        {
          step: '01',
          title: 'Auditoria de Registros',
          description: 'Levantamento de colaboradores, contratos e datas críticas.'
        },
        {
          step: '02',
          title: 'Organização',
          description: 'Criação de pastas seguras na nuvem e cronograma de renovações.'
        },
        {
          step: '03',
          title: 'Rotina de RH',
          description: 'Gestão de solicitações de ausência, apontamentos e novos contratos.'
        },
        {
          step: '04',
          title: 'Compilação de Folha',
          description: 'Consolidação de horas e adicionais para envio à contabilidade.'
        },
        {
          step: '05',
          title: 'Acompanhamento',
          description: 'Verificação contínua de conformidade e validade documental.'
        }
      ],
      whatYouNeed: [
        'Lista de colaboradores e modelos contratuais vigentes',
        'Políticas de férias e horários da empresa',
        'Ferramentas atuais de apontamento'
      ],
      expectedTimeline: 'Configuração em 5–7 dias úteis.',
      complianceNotice: 'A JVX fornece gestão administrativa de RH. Não constitui consultoria jurídica trabalhista formal.'
    },
    procurement: {
      id: 'procurement',
      tag: 'SUPORTE OPERACIONAL / 04',
      title: 'Compras e Fornecedores',
      headline: 'Organize processos de compras e mantenha as operações com fornecedores sob total controle.',
      strategicDescription: 'Solicitação de cotações, ordens de compra, rastreio de pedidos e conferência de notas garantem economia e continuidade operacional.',
      whyUae: {
        title: 'Controle de Compras',
        points: [
          'Comparação analítica de propostas para otimizar custos',
          'Formalização de pedidos por meio de Purchase Orders (POs)',
          'Conferência rigorosa de faturas contra mercadorias/serviços entregues',
          'Cadastro organizado de fornecedores qualificados'
        ]
      },
      whoThisIsFor: [
        'Empresas com compras recorrentes de insumos, tecnologia e serviços',
        'Operações com múltiplos fornecedores e contratos terceirizados',
        'Gestores que exigem clareza nos preços e entregas contratadas'
      ],
      whatJvxHandles: [
        'Solicitação de propostas comerciais',
        'Comparação analítica de cotações',
        'Criação de ordens de compra (Purchase Orders)',
        'Acompanhamento e rastreio de pedidos',
        'Cadastro e qualificação de fornecedores',
        'Conferência e validação de faturas'
      ],
      process: [
        {
          step: '01',
          title: 'Requisição',
          description: 'Recebimento das especificações de compra da sua equipe.'
        },
        {
          step: '02',
          title: 'Cotação',
          description: 'Envio de RFQs e montagem do mapa comparativo de preços.'
        },
        {
          step: '03',
          title: 'Emissão de PO',
          description: 'Formalização da ordem de compra após aprovação da diretoria.'
        },
        {
          step: '04',
          title: 'Rastreio',
          description: 'Acompanhamento junto ao fornecedor até a entrega.'
        },
        {
          step: '05',
          title: 'Validação',
          description: 'Checagem da fatura com o que foi entregue antes do pagamento.'
        }
      ],
      whatYouNeed: [
        'Relação de fornecedores usuais e diretrizes de compras',
        'Modelo padrão de Purchase Order ou especificações',
        'Tabela de alçadas de autorização'
      ],
      expectedTimeline: 'Operação iniciada em 3–5 dias úteis.',
      complianceNotice: 'A JVX atua conforme instruções do cliente. A autorização final de contratação cabe à liderança da empresa.'
    },
    commercial: {
      id: 'commercial',
      tag: 'SUPORTE OPERACIONAL / 05',
      title: 'Suporte Comercial',
      headline: 'Apoie sua operação comercial da elaboração da proposta ao acompanhamento de fechamento.',
      strategicDescription: 'Agilidade no envio de orçamentos, CRM sempre em dia, follow-up constante de propostas e minutas contratuais mantêm suas vendas aquecidas.',
      whyUae: {
        title: 'Eficiência Comercial',
        points: [
          'Envio rápido de propostas comerciais para prospectos aquecidos',
          'CRM limpo e atualizado para visão fidedigna do pipeline',
          'Cadência disciplinada de follow-up sem deixar negócios esfriarem',
          'Agilidade na elaboração de contratos e termos de confidencialidade'
        ]
      },
      whoThisIsFor: [
        'Líderes comerciais que precisam focar em negociar e não em tarefas operacionais',
        'Empresas B2B com propostas detalhadas e múltiplos tomadores de decisão',
        'Companhias que exigem higiene contínua de dados em seus CRMs'
      ],
      whatJvxHandles: [
        'Elaboração e envio de propostas comerciais',
        'Atualização e saneamento de CRM',
        'Cadastro e registro de clientes',
        'Follow-up de propostas em negociação',
        'Minutas e preparação contratual',
        'Organização de documentação comercial'
      ],
      process: [
        {
          step: '01',
          title: 'Alinhamento',
          description: 'Padronização de propostas, tabela de preços e campos de CRM.'
        },
        {
          step: '02',
          title: 'Emissão Rápida',
          description: 'Redação e envio de propostas conforme solicitação dos consultores.'
        },
        {
          step: '03',
          title: 'Follow-up',
          description: 'Contato pontual para tirar dúvidas e manter o lead engajado.'
        },
        {
          step: '04',
          title: 'Contratos',
          description: 'Elaboração do instrumento contratual para assinatura.'
        },
        {
          step: '05',
          title: 'Atualização de CRM',
          description: 'Registro de histórico, fechamento e onboarding do cliente.'
        }
      ],
      whatYouNeed: [
        'Modelos de propostas e tabela de preços vigentes',
        'Acesso ao CRM da empresa',
        'Diretrizes de cadência e tom de comunicação'
      ],
      expectedTimeline: 'Integração em 3–5 dias úteis.',
      complianceNotice: 'A JVX provê suporte operacional comercial. Não garantimos fechamento de vendas nem volumes mínimos de faturamento.'
    },
    documentation: {
      id: 'documentation',
      tag: 'SUPORTE OPERACIONAL / 06',
      title: 'Documentação',
      headline: 'Traga estrutura, visibilidade e governança aos documentos da sua empresa.',
      strategicDescription: 'Arquivos desorganizados em nuvem, contratos perdidos e prazos expirados trazem risco. A JVX audita, categoriza e mantém seu acervo sob rigoroso controle.',
      whyUae: {
        title: 'Governança Documental',
        points: [
          'Estrutura de pastas clara no OneDrive ou Google Drive',
          'Nomenclatura padronizada e indexação para localização em segundos',
          'Alertas automáticos antes do vencimento de licenças ou contratos',
          'Fluxo ágil de coleta e gestão de assinaturas eletrônicas'
        ]
      },
      whoThisIsFor: [
        'Empresas com armazenamento na nuvem disperso e sem hierarquia',
        'Operações que passam por auditorias, due diligence ou captações',
        'Lideranças que precisam localizar documentos essenciais com rapidez'
      ],
      whatJvxHandles: [
        'Organização de repositórios em OneDrive / Google Drive',
        'Digitalização, indexação e classificação',
        'Monitoramento de validade e renovações',
        'Preparação e padronização de formulários',
        'Gestão e coleta de assinaturas eletrônicas'
      ],
      process: [
        {
          step: '01',
          title: 'Diagnóstico',
          description: 'Mapeamento do estado atual dos repositórios e acessos.'
        },
        {
          step: '02',
          title: 'Padronização',
          description: 'Definição da árvore de pastas e regras de nomenclatura.'
        },
        {
          step: '03',
          title: 'Classificação',
          description: 'Organização e movimentação sistemática de arquivos.'
        },
        {
          step: '04',
          title: 'Assinaturas',
          description: 'Estruturação de fluxos no DocuSign / Adobe Sign / PandaDoc.'
        },
        {
          step: '05',
          title: 'Manutenção',
          description: 'Acompanhamento semanal de arquivamento e alertas de vencimento.'
        }
      ],
      whatYouNeed: [
        'Acesso à nuvem corporativa (OneDrive, Drive, SharePoint)',
        'Categorias principais de arquivos',
        'Plataforma de assinatura digital utilizada'
      ],
      expectedTimeline: 'Organização completa em 5–7 dias úteis.',
      complianceNotice: 'A JVX organiza e mantém os documentos com estrito sigilo. A validade substantiva dos documentos cabe aos emissores.'
    },
    customer_support: {
      id: 'customer_support',
      tag: 'SUPORTE OPERACIONAL / 07',
      title: 'Atendimento ao Cliente',
      headline: 'Assegure que seus clientes recebam um primeiro atendimento ágil, profissional e estruturado.',
      strategicDescription: 'Mensagens de WhatsApp sem resposta ou e-mails atrasados desgastam a relação com o cliente. A JVX provê triagem ágil, respostas padronizadas e encaminhamento metódico.',
      whyUae: {
        title: 'Excelência no Atendimento',
        points: [
          'Primeiro retorno cordial, rápido e profissional em horário comercial',
          'Gestão estruturada de e-mails corporativos e WhatsApp Business',
          'Triagem precisa encaminhando dúvidas complexas ao setor correto',
          'Acompanhamento contínuo para que nenhum chamado fique esquecido'
        ]
      },
      whoThisIsFor: [
        'Empresas com volume crescente de solicitações por e-mail e WhatsApp',
        'Negócios B2B que precisam de triagem profissional de demandas de clientes',
        'Companhias que buscam garantir resposta ágil e padronizada em dias úteis'
      ],
      whatJvxHandles: [
        'Gestão de e-mail corporativo',
        'WhatsApp Business corporativo',
        'Primeiro atendimento e triagem',
        'Encaminhamento e roteamento de demandas',
        'Acompanhamento de tickets e solicitações'
      ],
      process: [
        {
          step: '01',
          title: 'Base de Conhecimento',
          description: 'Mapeamento de FAQs, respostas modelo e tom de voz.'
        },
        {
          step: '02',
          title: 'Conexão',
          description: 'Configuração dos canais de atendimento e e-mails.'
        },
        {
          step: '03',
          title: 'Atendimento',
          description: 'Resposta ágil e triagem das mensagens recebidas.'
        },
        {
          step: '04',
          title: 'Encaminhamento',
          description: 'Direcionamento de casos técnicos aos especialistas internos.'
        },
        {
          step: '05',
          title: 'Acompanhamento',
          description: 'Aferição de satisfação e relatório de chamados atendidos.'
        }
      ],
      whatYouNeed: [
        'Acesso ao e-mail de suporte ou sistema de chamados',
        'Número ou acesso ao WhatsApp Business da empresa',
        'Manual de dúvidas frequentes e matriz de contatos internos'
      ],
      expectedTimeline: 'Operação ativa em 5–7 dias úteis.',
      complianceNotice: 'O suporte é prestado no horário comercial combinado. Cobertura 24/7 disponível sob demanda em acordos específicos.'
    },
    executive_assistance: {
      id: 'executive_assistance',
      tag: 'SUPORTE OPERACIONAL / 08',
      title: 'Assistência Executiva',
      headline: 'Dê à liderança mais tempo para focar nas grandes decisões enquanto cuidamos dos detalhes operacionais.',
      strategicDescription: 'Executivos devem focar em negócios e relacionamentos estratégicos, não em conciliar agendas, remarcar voos ou redigir atas. A JVX provê assistência executiva remota impecável.',
      whyUae: {
        title: 'Foco no Essencial',
        points: [
          'Gestão de agenda sem conflitos considerando múltiplos fusos horários',
          'Logística completa de viagens: voos, traslados, hotéis e reservas executivas',
          'Atas de reuniões, briefings prévios e acompanhamento de tarefas',
          'Discrição absoluta no tratamento dos assuntos de diretoria'
        ]
      },
      whoThisIsFor: [
        'Diretores, sócios e fundadores com agendas corporativas intensas',
        'Executivos com viagens de negócios internacionais frequentes',
        'Lideranças que valorizam um braço direito operacional de total confiança'
      ],
      whatJvxHandles: [
        'Gestão de agendas e calendários',
        'Coordenação e preparação de reuniões',
        'Logística e itinerários de viagens',
        'Reservas executivas',
        'Preparação de briefings e documentos',
        'Relatórios e atas de acompanhamento',
        'Follow-up de tarefas para a diretoria'
      ],
      process: [
        {
          step: '01',
          title: 'Entendimento',
          description: 'Mapeamento de rotinas, preferências de viagem e prioridades.'
        },
        {
          step: '02',
          title: 'Gestão de Agenda',
          description: 'Assunção do controle de calendário e regras de agendamento.'
        },
        {
          step: '03',
          title: 'Rotina Diária',
          description: 'Agendamento de compromissos, convites e confirmações.'
        },
        {
          step: '04',
          title: 'Viagens & Reservas',
          description: 'Pesquisa e emissão de bilhetes, traslados e hospedagens.'
        },
        {
          step: '05',
          title: 'Follow-up',
          description: 'Cobrança e acompanhamento de itens acordados em reuniões.'
        }
      ],
      whatYouNeed: [
        'Acesso ao calendário (Google Workspace ou Microsoft 365)',
        'Perfil de preferências de viagens e programas de fidelidade',
        'Canal de comunicação rápida (WhatsApp ou Telegram)'
      ],
      expectedTimeline: 'Integração em 48–72 horas.',
      complianceNotice: 'A assistência executiva é prestada sob termos formais de confidencialidade e sigilo prévio.'
    },
    international: {
      id: 'international',
      tag: 'SUPORTE OPERACIONAL / 09',
      title: 'Suporte Internacional',
      headline: 'Dê suporte ao seu negócio quando operações, comunicação e documentação cruzam fronteiras.',
      strategicDescription: 'Atuar em diferentes países impõe diferenças de idioma, formalidades documentais e especificidades locais. Sediada em Dubai, a JVX oferece suporte internacional com excelência.',
      whyUae: {
        title: 'Alcance Global',
        points: [
          'Comunicação executiva fluida em inglês, espanhol e português',
          'Elaboração e revisão documental adaptada a padrões de outros países',
          'Interlocução profissional com clientes, fornecedores e parceiros no exterior',
          'Perspectiva internacional forjada no epicentro dos negócios globais'
        ]
      },
      whoThisIsFor: [
        'Empresas que atendem clientes no exterior ou negociam com fornecedores estrangeiros',
        'Operações que exigem comunicação administrativa e contratual multilíngue',
        'Negócios em processo de expansão para além do mercado nacional'
      ],
      whatJvxHandles: [
        'Traduções administrativas e comerciais',
        'Comunicação com parceiros e clientes internacionais',
        'Preparação documental para exigências de outros países',
        'Acompanhamento de trâmites e processos transfronteiriços'
      ],
      process: [
        {
          step: '01',
          title: 'Mapeamento',
          description: 'Identificação de países, idiomas e requisitos das contrapartes.'
        },
        {
          step: '02',
          title: 'Comunicação',
          description: 'Definição de modelos de redação e tradução administrativa.'
        },
        {
          step: '03',
          title: 'Documentos',
          description: 'Adaptação e formatação de dossiês para circulação no exterior.'
        },
        {
          step: '04',
          title: 'Interlocução',
          description: 'Contato direto com parceiros internacionais para demandas operacionais.'
        },
        {
          step: '05',
          title: 'Acompanhamento',
          description: 'Supervisão do andamento de processos e reporte periódico à liderança.'
        }
      ],
      whatYouNeed: [
        'Detalhes das operações no exterior e exigências dos parceiros',
        'Documentação original a ser adaptada ou traduzida',
        'Definição de alçadas e tom de comunicação'
      ],
      expectedTimeline: 'Operação iniciada em 3–5 dias úteis.',
      complianceNotice: 'A JVX fornece traduções administrativas e suporte comercial. Traduções juramentadas oficiais exigem tradutores públicos juramentados nos países de destino.'
    }
  }
};

export const servicesData: Record<Language, Record<string, ServiceDetail>> = {
  ...baseServicesData,
  ar: baseServicesData.en,
};

