import React from 'react';
import { Project, Service, Testimonial, Stat } from './types';
import { Smartphone, Film, Megaphone, Palette, Layers, Headphones } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const PORTFOLIO_ITEMS: Project[] = [
  {
    id: '1',
    title: 'Midnight Sun',
    category: 'Documentary',
    client: 'National Geographic',
    duration: '12:45',
    thumbnail: 'https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    title: 'Velocity',
    category: 'Promo',
    client: 'Red Bull',
    duration: '0:60',
    thumbnail: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    title: 'Founders Podcast',
    category: 'Talking Head',
    client: 'Stripe',
    duration: '25:00',
    thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80',
  },
  {
    id: '4',
    title: 'Urban Pulse',
    category: 'Shorts',
    client: 'Adidas',
    duration: '0:15',
    thumbnail: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80',
  },
  {
    id: '5',
    title: 'Metamorphosis',
    category: 'Animation',
    client: 'Self-directed',
    duration: '2:10',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80',
  },
  {
    id: '6',
    title: 'Clean Energy Future',
    category: 'Explainer',
    client: 'Tesla',
    duration: '4:30',
    thumbnail: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'short',
    title: 'Short-Form Editing',
    icon: <Smartphone className="w-6 h-6 text-electric-amber" />,
    features: ['Viral pacing', 'Captions & Graphics', 'Sound design', '9:16 Optimization'],
    priceAnchor: 'Starting at $450/video',
  },
  {
    id: 'long',
    title: 'Long-Form & Doc',
    icon: <Film className="w-6 h-6 text-electric-amber" />,
    features: ['Narrative structure', 'Color grading', 'Audio restoration', '4K Workflow'],
    priceAnchor: 'Starting at $1,200/project',
  },
  {
    id: 'commercial',
    title: 'Commercial & Promo',
    icon: <Megaphone className="w-6 h-6 text-electric-amber" />,
    features: ['High-energy pacing', 'Motion graphics', 'Brand kit adherence', 'Fast turnaround'],
    priceAnchor: 'Custom quote',
  },
  {
    id: 'color',
    title: 'Color Grading',
    icon: <Palette className="w-6 h-6 text-electric-amber" />,
    features: ['Look development', 'Skin tone correction', 'HDR delivery', 'LUT creation'],
    priceAnchor: 'Project based',
  },
  {
    id: 'motion',
    title: 'Motion Graphics',
    icon: <Layers className="w-6 h-6 text-electric-amber" />,
    features: ['Logo animation', 'Lower thirds', 'Typography', 'VFX compositing'],
    priceAnchor: 'Project based',
  },
  {
    id: 'audio',
    title: 'Audio Post',
    icon: <Headphones className="w-6 h-6 text-electric-amber" />,
    features: ['Mixing & Mastering', 'SFX layering', 'Voiceover cleanup', 'Loudness compliance'],
    priceAnchor: 'Project based',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Dee Films transformed our raw footage into a cinematic masterpiece. The attention to narrative flow is unmatched in the industry.",
    author: "Sarah Jenkins",
    role: "Creative Director",
    company: "National Geographic",
  },
  {
    id: '2',
    quote: "Fast, professional, and creatively brilliant. Our engagement metrics doubled after switching to Dee for our short-form content.",
    author: "Marcus Chen",
    role: "Marketing Lead",
    company: "Stripe",
  },
  {
    id: '3',
    quote: "Finally, an editor who understands pacing and emotion. The color grading work elevated our brand film to broadcast quality.",
    author: "Elena Rodriguez",
    role: "Brand Manager",
    company: "Red Bull",
  },
];

export const STATS: Stat[] = [
  { id: '1', label: 'Projects Edited', value: 250, suffix: '+' },
  { id: '2', label: 'Happy Clients', value: 85, suffix: '' },
  { id: '3', label: 'Years in Post', value: 6, suffix: '' },
];
