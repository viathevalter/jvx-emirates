export type Language = 'en' | 'es' | 'pt' | 'ar';

export type ServiceId = 
  | 'marketing'
  | 'finance_admin'
  | 'hr_admin'
  | 'procurement'
  | 'commercial'
  | 'documentation'
  | 'customer_support'
  | 'executive_assistance'
  | 'international';

export interface QuizAnswers {
  primaryArea: string;
  supportType: string;
  operationalChallenge: string;
  customChallenge?: string;
  name: string;
  email: string;
  phone: string;
  companyName?: string;
  country: string;
}

export interface QuizRecommendation {
  primaryAreaTitle: string;
  headline: string;
  summary: string;
  recommendedServices: string[];
  disclaimer: string;
}

export interface ServiceDetail {
  id: ServiceId;
  tag: string;
  title: string;
  headline: string;
  strategicDescription: string;
  whyUae: {
    title: string;
    points: string[];
  };
  whoThisIsFor: string[];
  whatJvxHandles: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  whatYouNeed: string[];
  expectedTimeline: string;
  complianceNotice: string;
}

export interface CaseStudy {
  id: string;
  tag: string;
  profile: string;
  market: string;
  objective: string;
  challenge: string;
  approach: string[];
  result: string;
}

export interface InsightArticle {
  id: string;
  category: 'TAX' | 'RESIDENCY' | 'BUSINESS' | 'INVESTMENT' | 'REGULATION';
  title: string;
  summary: string;
  date: string;
  readTime: string;
  bulletPoints: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  country: string;
  quote: string;
  profileTag: string;
}
