import { businessConfig } from "./config";
import type { FaqItem } from "./services-data";

export const generalFaqs: FaqItem[] = [
  {
    question: "What plumbing services does Imperium Plumbing provide?",
    answer: `Imperium Plumbing provides residential and commercial plumbing services including general plumbing repair, sewer and drain service, water heater repair and replacement, repiping, leak detection and repair, and clog clearing with hydro jetting.`,
  },
  {
    question: "Do you work with residential and commercial customers?",
    answer: "Yes. We take on both residential and commercial plumbing work.",
  },
  {
    question: "What area do you serve?",
    answer: `Imperium Plumbing serves ${businessConfig.serviceArea}.`,
  },
  {
    question: "Do you handle water heater problems?",
    answer:
      "Yes, we diagnose and repair tank and tankless water heaters, and handle full replacement when a unit is beyond repair.",
  },
  {
    question: "Do you repair sewer and drain issues?",
    answer:
      "Yes, from a single slow drain to sewer line diagnosis and replacement.",
  },
  {
    question: "Do you offer repiping?",
    answer:
      "Yes, both full and partial repiping for aging or failing pipe systems, residential and commercial.",
  },
  {
    question: "Can you diagnose hidden leaks?",
    answer:
      "Yes. We locate leaks behind walls, under slabs, or underground, and repair them once confirmed.",
  },
  {
    question: "Do you handle clogged drains and hydro jetting?",
    answer:
      "Yes. We clear standard clogs and use hydro jetting for buildup that causes a drain to clog repeatedly.",
  },
  {
    question: "How do I request service?",
    answer: `Call ${businessConfig.phoneDisplay} or submit a request through the contact form, and we'll follow up to schedule a visit.`,
  },
  {
    question: `How much plumbing experience does Imperium Plumbing have?`,
    answer: `Imperium Plumbing has ${businessConfig.yearsExperience} years of experience in residential and commercial plumbing.`,
  },
];
