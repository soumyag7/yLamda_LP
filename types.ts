
import React from 'react';

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  industry: string;
}

export interface BenefitItem {
  percentage: string;
  title: string;
  description: string;
}

// Fix: Import React to provide the React namespace for React.ReactNode
export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}