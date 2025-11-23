export enum FormType {
  INVESTOR = 'INVESTOR',
  COLLABORATION = 'COLLABORATION',
  GENERAL = 'GENERAL'
}

export interface InvestorFormData {
  name: string;
  email: string;
  organization: string;
  investmentRange: string;
  thesis: string;
}

export interface CollaborationFormData {
  name: string;
  email: string;
  projectType: string;
  technicalRequirements: string;
  timeline: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}