import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string; // Placeholder for video functionality
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  features: string[];
  priceAnchor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}