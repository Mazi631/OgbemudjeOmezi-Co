export interface NavItem {
  id: string;
  label: string;
  href: string;
  isCta?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About Us', href: '/about' },
  { id: 'services', label: 'Practice Areas', href: '/services' },
  { id: 'team', label: 'Our Team', href: '/team' },
  { id: 'insights', label: 'Insights', href: '/insights' },
  { id: 'faq', label: 'FAQ', href: '/faq' },
  { id: 'careers', label: 'Careers', href: '/careers' },
  { id: 'contact', label: 'Contact', href: '/contact', isCta: true },
];

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  items: string[];
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'banking-law',
    title: 'Banking & Financial Services Law',
    description: 'Advisory services for financial institutions and commercial borrowers on credit facilities, banking compliance, financial documentation, and regulatory transactions.',
    icon: '🏛️',
    image: 'https://res.cloudinary.com/dsgr0pynx/image/upload/v1781340426/cooprate_governance_kfvut0.jpg',
    items: [
      'Credit facility documentation & security perfection',
      'Banking regulatory compliance & advisory',
      'Loan recovery & debt restructuring',
      'Financial transaction vetting & legal risk management',
    ],
  },
  {
    id: 'taxation-law',
    title: 'Taxation Law & Advisory',
    description: 'Legal guidance on corporate tax liabilities, compliance obligations, transaction structuring, and representation before tax revenue authorities.',
    icon: '📊',
    items: [
      'Corporate tax compliance advisory',
      'Tax risk assessment in commercial transactions',
      'Revenue dispute resolution & representation',
      'Structuring joint ventures for tax efficiency',
    ],
  },
  {
    id: 'petroleum-energy',
    title: 'Petroleum & Energy Law',
    description: 'Legal support for organizations operating in the oil, gas, and energy sectors regarding licensing, joint ventures, regulatory compliance, and commercial agreements.',
    icon: '⚡',
    items: [
      'Upstream & downstream contract negotiation',
      'Petroleum regulatory compliance & licensing',
      'Energy sector joint ventures & partnerships',
      'Environmental & operational compliance advisory',
    ],
  },
  {
    id: 'shipping-admiralty',
    title: 'Shipping & Admiralty Law',
    description: 'Representation and legal advisory for maritime stakeholders, shipping operators, cargo owners, and marine insurance entities.',
    icon: '⚓',
    image: 'https://res.cloudinary.com/dsgr0pynx/image/upload/v1781340410/martime_t03hyn.jpg',
    items: [
      'Shipping contracts & carriage of goods disputes',
      'Admiralty claims & vessel arrest proceedings',
      'Marine insurance advisory & claim resolution',
      'Maritime regulatory compliance (NIMASA)',
    ],
  },
  {
    id: 'aviation-law',
    title: 'Aviation Law',
    description: 'Specialized legal counsel for airline operators, service providers, lessors, and aviation sector investors navigating Nigerian statutory requirements.',
    icon: '✈️',
    image: 'https://res.cloudinary.com/dsgr0pynx/image/upload/v1781340443/aviation_atrspt.jpg',
    items: [
      'Aviation regulatory compliance & NCAA licensing',
      'Aircraft leasing, financing & charter agreements',
      'Aviation contract drafting & negotiation',
      'Dispute resolution in aviation operations',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property Law',
    description: 'Protection and management of proprietary assets, including trademark registration, patent advisory, copyright licensing, and IP enforcement.',
    icon: '🔒',
    items: [
      'Trademark, patent & design registration',
      'Intellectual property licensing agreements',
      'Copyright protection & infringement advisory',
      'Commercialization of proprietary rights',
    ],
  },
  {
    id: 'commercial-arbitration',
    title: 'Commercial Arbitration & ADR',
    description: 'Representation in domestic and international commercial arbitration, mediation, and negotiation to resolve disputes outside litigation.',
    icon: '⚖️',
    items: [
      'Arbitral proceedings & tribunal representation',
      'Dispute mediation & structured negotiations',
      'Enforcement & challenge of arbitral awards',
      'Arbitration clause drafting in commercial contracts',
    ],
  },
  {
    id: 'investment-law',
    title: 'Investment Law & Foreign Participation',
    description: 'Advisory for foreign and local investors on capital importation, regulatory approvals (NIPC, NOTAP), and cross-border investment structuring.',
    icon: '💼',
    items: [
      'NIPC registration & foreign investment approvals',
      'Capital importation regulatory compliance',
      'Business permit & expatriate quota advisory',
      'Investment structure optimization',
    ],
  },
  {
    id: 'joint-ventures-partnerships',
    title: 'Joint Ventures & Partnerships',
    description: 'Drafting, negotiating, and structuring collaborative commercial arrangements, partnership deeds, and shareholder agreements.',
    icon: '🤝',
    items: [
      'Joint venture agreement drafting & vetting',
      'Partnership deeds & profit-sharing frameworks',
      'Shareholder agreements & governance structures',
      'Consortium & operating contract advisory',
    ],
  },
  {
    id: 'construction-development',
    title: 'Construction & Development Law',
    description: 'Legal advisory for engineering firms, property developers, and contractors on project procurement, contracts, and development disputes.',
    icon: '🏗️',
    items: [
      'Construction contract drafting (FIDIC, bespoke agreements)',
      'Development procurement & regulatory permits',
      'Contractor & sub-contractor agreement negotiation',
      'Construction dispute advisory & resolution',
    ],
  },
  {
    id: 'mergers-acquisitions',
    title: 'Mergers & Acquisitions',
    description: 'Strategic legal counsel for corporate reorganizations, asset purchases, equity acquisitions, and regulatory filings with statutory authorities.',
    icon: '🏢',
    items: [
      'Legal due diligence for corporate acquisitions',
      'Merger filing & regulatory compliance (SEC, FCCPC)',
      'Share purchase & asset sale agreement drafting',
      'Post-acquisition integration advisory',
    ],
  },
  {
    id: 'receivership-practice',
    title: 'Receivership & Insolvency Practice',
    description: 'Representation for debenture holders, financial institutions, and corporate entities in receivership management and debt recovery.',
    icon: '📋',
    items: [
      'Appointment & management of legal receivership',
      'Asset recovery & debt liquidation enforcement',
      'Insolvency proceedings & corporate restructuring',
      'Secured creditor representation',
    ],
  },
  {
    id: 'contract-negotiation',
    title: 'Contract Negotiation & Drafting',
    description: 'Professional drafting, review, vetting, and structured negotiation of commercial contracts across diverse business operations.',
    icon: '✍️',
    items: [
      'Commercial contract drafting & vetting',
      'Representation at business negotiations',
      'Risk allocation & indemnity clause analysis',
      'Service level agreements (SLAs)',
    ],
  },
  {
    id: 'commercial-litigation',
    title: 'General Commercial Litigation',
    description: 'Advocacy and representation before State and Federal High Courts, National Industrial Court, Court of Appeal, and Supreme Court of Nigeria.',
    icon: '🏛️',
    image: 'https://res.cloudinary.com/dsgr0pynx/image/upload/v1781340431/civil_litigation_sjaond.jpg',
    items: [
      'Civil lawsuit representation & defense',
      'Contractual breach & commercial litigation',
      'Property & title dispute resolution',
      'Injunctive reliefs & enforcement of judgments',
    ],
  },
  {
    id: 'real-estate-practice',
    title: 'Real Estate Practice',
    description: 'Legal representation for land acquisition, property disposition, commercial leasing, title investigation, and real estate transactions.',
    icon: '🏠',
    image: 'https://res.cloudinary.com/dsgr0pynx/image/upload/v1781340408/real_estate_a1fujo.jpg',
    items: [
      'Property title search & legal due diligence',
      'Deeds of assignment & lease agreement drafting',
      'Tenancy & estate management legal advisory',
      'Real estate transaction representation',
    ],
  },
  {
    id: 'legal-perfection-titles',
    title: 'Preparation & Perfection of Titles',
    description: 'Comprehensive processing of land documentation, obtaining statutory consents, and perfection of legal instruments across land registries in Nigeria.',
    icon: '📜',
    items: [
      'Governor\'s Consent processing & registration',
      'Certificate of Occupancy (C of O) processing',
      'Registration of deeds of assignment & mortgages',
      'Land charges & encumbrance searches',
    ],
  },
];

export interface LegalServiceGroup {
  category: string;
  description: string;
  services: string[];
}

export const LEGAL_SERVICES_GROUPS: LegalServiceGroup[] = [
  {
    category: 'Corporate Governance & Secretarial Services',
    description: 'Ensuring statutory compliance, proper governance frameworks, and administrative order for corporate entities.',
    services: [
      'Company secretarial services & statutory filings',
      'Attendance & minutes management at Board Meetings and AGMs',
      'Board advisory & statutory register maintenance',
      'Corporate compliance audits & regulatory filings',
    ],
  },
  {
    category: 'Legal Documentation & Title Perfection',
    description: 'Rigorous vetting, preparation, and statutory perfection of commercial instruments and land titles.',
    services: [
      'Preparation, review, and vetting of legal documents',
      'Processing Governor\'s Consent & Certificate of Occupancy',
      'Perfection of land titles & mortgage deeds at Land Registries',
      'Legal due diligence & encumbrance searches',
    ],
  },
  {
    category: 'Contract Negotiation & Transactional Advisory',
    description: 'Strategic representation during commercial discussions and legal structuring of business agreements.',
    services: [
      'Representation at commercial business negotiations',
      'Drafting bespoke commercial contracts & joint venture deeds',
      'Legal correspondence & regulatory communication',
      'Mergers, acquisitions & investment transaction structuring',
    ],
  },
  {
    category: 'Litigation, Advocacy & Arbitration',
    description: 'Rigorous advocacy in courts and alternative dispute resolution forums to defend client interests.',
    services: [
      'Civil and commercial litigation representation',
      'Criminal defense representation in business-related matters',
      'Commercial arbitration tribunal representation',
      'Receivership management & debt recovery enforcement',
    ],
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  initials?: string;
  category: 'partner' | 'associate' | 'admin';
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Sampson Ogbemudje',
    role: 'Managing Partner',
    bio: 'Called to the Nigerian Bar in 1988, Sampson brings over 35 years of legal experience specializing in real estate practice and corporate law. Co-founder of Ogbemudje, Omezi & Co. in 1994, he is a former Vice Chairman of the Nigerian Bar Association (NBA) Ikeja Branch and a Member of the Chartered Institute of Arbitrators (CIArb).',
    image: 'https://res.cloudinary.com/dsgr0pynx/image/upload/v1781341094/WhatsApp_Image_2026-06-12_at_10.56.57_kcrpe8.jpg',
    category: 'partner',
  },
  {
    name: 'Okechukwu Omezi',
    role: 'Managing Partner',
    bio: 'With nearly 40 years of legal practice since his call to the Bar, Okechukwu specializes in dispute resolution, corporate law, aviation, maritime, and energy law. Co-founder of the firm in 1994, he serves as an Independent Non-Executive Director of Eterna Plc and Chairman of High Flyers Estate Ltd. Member of the International Bar Association (IBA) and the Society for Corporate Governance Nigeria.',
    image: 'https://res.cloudinary.com/dsgr0pynx/image/upload/v1781441489/WhatsApp_Image_2026-06-13_at_19.43.55_fask7t.jpg',
    category: 'partner',
  },
  {
    name: 'Morenikeji Elemi',
    role: 'Partner, Head of Chamber',
    bio: 'Called to the Nigerian Bar with over two decades of legal practice, Morenikeji holds a Master of Laws (LL.M) from Lagos State University. She specializes in corporate restructuring, property law, company secretarial functions, and the perfection of title documents.',
    image: 'https://res.cloudinary.com/dsgr0pynx/image/upload/q_auto/f_auto/v1781343147/WhatsApp_Image_2026-06-12_at_10.56.36_2_psyfsd.jpg',
    category: 'partner',
  },
  {
    name: 'Theophilus Terfa Shaapera',
    role: 'Senior Associate',
    bio: 'Called to the Bar in 2015, Theophilus has over 10 years of experience advising corporate clients across aviation, energy, property, and corporate practice. He routinely handles corporate restructuring and dispute resolution matters.',
    image: 'https://res.cloudinary.com/dsgr0pynx/image/upload/v1781341142/WhatsApp_Image_2026-06-12_at_10.56.57_2_gflung.jpg',
    category: 'associate',
  },
  {
    name: 'Ebiere Theresa Ovuru',
    role: 'Associate',
    bio: 'Called to the Nigerian Bar in 2022, Ebiere advises on real estate practice, aviation law, data protection, and corporate matters. She is a member of the NBA, the Chartered Institute of Human Resource Management (CIHRM), and the Chartered Risk Management Institute of Nigeria (CRMI).',
    initials: 'EO',
    category: 'associate',
  },
  {
    name: 'Nalazai Rejoice Asa',
    role: 'Associate',
    bio: 'Called to the Bar in 2022, Rejoice focuses on corporate and commercial legal practice and dispute resolution. She holds memberships with the NBA, the Institute of Chartered Mediators and Conciliators (ICMC), and the Institute of Chartered Secretaries and Administrators of Nigeria (ICSN).',
    image: 'https://res.cloudinary.com/dsgr0pynx/image/upload/v1781341203/WhatsApp_Image_2026-06-12_at_10.56.57_1_vyshgv.jpg',
    category: 'associate',
  },
  {
    name: 'Blossom Brian Izuogu',
    role: 'Associate',
    bio: 'Called to the Bar in 2022, Blossom practices in corporate law, real estate, and energy law. He is involved in legal drafting, opinion preparation, and company secretarial services. Member of the NBA, ICMC, and CRMI.',
    image: 'https://res.cloudinary.com/dsgr0pynx/image/upload/v1781343116/WhatsApp_Image_2026-06-12_at_10.56.36_1_ltkqfa.jpg',
    category: 'associate',
  },
  {
    name: 'Cynthia Obiageli Abuah',
    role: 'Secretary',
    bio: 'A Business Administration graduate from the University of Lagos, Cynthia has managed administrative operations at the firm since 2009, supporting the legal team across corporate secretarial and office management duties.',
    image: 'https://res.cloudinary.com/dsgr0pynx/image/upload/v1781343051/WhatsApp_Image_2026-06-12_at_10.56.36_j2dzcs.jpg',
    category: 'admin',
  },
];

export interface FaqItemData {
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_ITEMS: FaqItemData[] = [
  {
    question: 'What is the primary legal practice focus of the firm?',
    answer: 'Ogbemudje, Omezi & Co. is a commercial legal practice specializing in banking, taxation, petroleum and energy, shipping and admiralty, aviation, intellectual property, commercial arbitration, investment, joint ventures, construction, mergers and acquisitions, receivership, litigation, and real estate practice.',
    category: 'General',
  },
  {
    question: 'Where is the firm located?',
    answer: 'Our chambers are located at 3rd Floor, 34 Kofo Abayomi Street, Victoria Island, Lagos State, Nigeria.',
    category: 'General',
  },
  {
    question: 'What client sectors does the firm represent?',
    answer: 'We represent high-net-worth individuals and corporate organizations operating across financial, consulting, petroleum, aviation, engineering, trading, manufacturing, and banking sectors.',
    category: 'General',
  },
  {
    question: 'How do I schedule a legal consultation?',
    answer: 'Consultations can be scheduled by contacting our chambers directly via phone at +234 802 303 2981, via email at info@ogbemudjeomezi.com, or by submitting an inquiry through our website contact form.',
    category: 'Consultation',
  },
  {
    question: 'Does the firm handle alternative dispute resolution (ADR)?',
    answer: 'Yes. Where appropriate, we represent clients in commercial arbitration, mediation, and structured settlement negotiations prior to or alongside formal court litigation.',
    category: 'Dispute Resolution',
  },
  {
    question: 'Does the firm provide company secretarial services?',
    answer: 'Yes. We provide company secretarial services, corporate compliance advisory, and representation at Board Meetings and Annual General Meetings (AGMs).',
    category: 'Corporate Services',
  },
  {
    question: 'What real estate legal services are available?',
    answer: 'We conduct property title searches, prepare deeds of assignment and lease agreements, handle real estate due diligence, and process title perfection (including Governor\'s Consent and Certificates of Occupancy) at Land Registries.',
    category: 'Real Estate',
  },
  {
    question: 'In what language are services conducted?',
    answer: 'All legal services, correspondence, documentation, and representations are conducted in English.',
    category: 'General',
  },
];

export interface BlogPost {
  tag: string;
  title: string;
  excerpt: string;
  icon: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    tag: 'Corporate Practice',
    title: 'Director Liabilities & Governance Obligations under CAMA 2020',
    excerpt: 'An examination of statutory fiduciary duties, director compliance obligations, and corporate governance practices for companies operating in Nigeria.',
    icon: '🏛️',
  },
  {
    tag: 'Data Protection',
    title: 'Statutory Compliance Obligations under the Nigeria Data Protection Act',
    excerpt: 'Analysis of key compliance requirements for data controllers and processors, including statutory audit filings and data subject rights management.',
    icon: '🔒',
  },
  {
    tag: 'Real Estate Practice',
    title: 'Legal Requirements for Title Perfection in Lagos State',
    excerpt: 'A practical legal guide to obtaining Governor\'s Consent, processing Certificates of Occupancy, and registering land charges at the Land Registry.',
    icon: '🏠',
  },
];

export const FIRM_VALUES = [
  { title: 'Integrity', description: 'Adherence to the highest professional and ethical standards of the Nigerian Bar.' },
  { title: 'Excellence', description: 'Precise, diligent, and rigorous legal representation across all instructions.' },
  { title: 'Confidentiality', description: 'Strict protection of proprietary client information and legal communications.' },
  { title: 'Client Commitment', description: 'Dedicated advocacy centered on achieving commercial and statutory objectives.' },
];

export const FIRM_PILLARS = [
  {
    icon: '⚖️',
    title: 'Commercial Legal Expertise',
    description: 'Over 30 years of practice in commercial advisory, litigation, arbitration, and statutory compliance across major economic sectors in Nigeria.',
  },
  {
    icon: '🤝',
    title: 'Client-Focused Representation',
    description: 'Direct partner involvement, responsive legal communication, and practical strategy designed for corporate organizations and private clients.',
  },
  {
    icon: '🧠',
    title: 'Strategic Dispute Resolution',
    description: 'Thorough legal analysis aimed at minimizing exposure, resolving disputes efficiently through arbitration or court advocacy.',
  },
  {
    icon: '🏆',
    title: 'Professional Integrity',
    description: 'Unwavering adherence to legal ethics, procedural diligence, and professional standards across every client instruction.',
  },
];

export const FIRM_STATS = [
  { num: '1994', label: 'Year Established' },
  { num: '16', label: 'Practice Areas' },
  { num: '8', label: 'Legal Professionals & Staff' },
];

export const CONTACT_INFO = {
  name: 'Ogbemudje, Omezi & Co.',
  subline: 'Barristers, Solicitors & Arbitrators',
  address: '3rd Floor, 34 Kofo Abayomi Street,\nVictoria Island, Lagos State, Nigeria.',
  phone: '+234 802 303 2981',
  email: 'info@ogbemudjeomezi.com',
  hours: 'Monday – Friday: 9:00 AM – 5:00 PM\nSaturday: By Appointment\nSunday & Public Holidays: Closed',
  logoUrl: 'https://res.cloudinary.com/dsgr0pynx/image/upload/v1781340948/WhatsApp_Image_2026-06-12_at_11.16.14-removebg-preview_apjn2u.png',
};

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Ogbemudje, Omezi & Co. navigated our corporate acquisition with extraordinary care. Their strategic counsel saved us millions and months of complex negotiation.",
    author: "David Chen",
    role: "CEO, Meridian Holdings",
  },
  {
    quote: "Facing high-stakes commercial litigation, we needed a legal team that understood both Nigerian statutory law and commercial stakes. They delivered beyond expectation.",
    author: "Sarah Whitmore",
    role: "Managing Director, Whitmore Industries",
  },
  {
    quote: "From the initial chambers consultation to final governor's consent perfection, every property transaction detail was handled with precision and absolute integrity.",
    author: "Marcus T. Reid",
    role: "Director, Reid Family Trust",
  },
  {
    quote: "Responsive, thorough, and genuinely invested in our legal outcome. Their senior partner guidance made us feel supported every step of the way.",
    author: "Gregory Park",
    role: "CEO, Parkview Capital",
  },
];

