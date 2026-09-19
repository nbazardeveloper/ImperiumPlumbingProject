import type { LucideIcon } from "lucide-react";
import { Flame, Network, Search, Waves, Wrench, Zap } from "lucide-react";
import { businessConfig } from "./config";

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServiceData = {
  slug: string;
  title: string;
  shortTitle: string;
  cardDescription: string;
  metaDescription: string;
  icon: LucideIcon;
  h1: string;
  intro: string;
  explanation: string;
  symptoms: string[];
  included: string[];
  process: { title: string; description: string }[];
  whyChoose: string[];
  faqs: FaqItem[];
  relatedSlugs: string[];
};

const area = businessConfig.serviceAreaShort;

export const services: ServiceData[] = [
  {
    slug: "plumbing",
    title: "Plumbing Services",
    shortTitle: "Plumbing",
    cardDescription:
      "General plumbing repair and installation for fixtures, pipes, and fittings — handled without the runaround.",
    metaDescription: `General plumbing repair and installation for homes and businesses in the ${area}. Faucets, fixtures, pipe repair, and more from Imperium Plumbing.`,
    icon: Wrench,
    h1: `Plumbing Repair & Installation in the ${area}`,
    intro:
      "A dripping faucet, a fixture that won't shut off, or a pipe fitting that finally gave out — general plumbing issues rarely happen on a convenient schedule. Imperium Plumbing handles the everyday repair and installation work that keeps a home or business running.",
    explanation:
      "Our general plumbing service covers the repair, replacement, and installation work that doesn't fall neatly into a single category — fixtures, shutoff valves, supply lines, drain assemblies, and the connections between them. We diagnose the actual cause of the problem first, explain what we find in plain language, and then do the work.",
    symptoms: [
      "Dripping or leaking faucets",
      "Running or constantly cycling toilets",
      "Low or inconsistent water pressure at a specific fixture",
      "Corroded or failing shutoff valves",
      "Noisy or vibrating pipes",
      "Fixtures that won't install flush or seal correctly",
    ],
    included: [
      "Diagnosis of the specific fixture or line causing the issue",
      "Faucet, valve, and fixture repair or replacement",
      "Supply line and fitting repair",
      "Installation of new fixtures, sinks, and toilets",
      "A clear explanation of findings before work begins",
    ],
    process: [
      { title: "Describe the Issue", description: "Call or send a request with what you're noticing." },
      { title: "On-Site Diagnosis", description: "We inspect the fixture or line and identify the actual cause." },
      { title: "Review Your Options", description: "We walk through what needs to happen and answer questions before starting." },
      { title: "Complete the Repair", description: "Work is completed and the area is left clean." },
    ],
    whyChoose: [
      `${businessConfig.yearsExperience} years handling residential and commercial plumbing`,
      "Straightforward pricing conversations before work starts",
      "Fast scheduling — plumbing problems don't wait",
      "Work explained in plain language, not jargon",
    ],
    faqs: [
      {
        question: "What counts as a general plumbing repair?",
        answer:
          "Faucets, toilets, shutoff valves, supply lines, and fixture installation are the most common calls. If it's a sewer line, drain clog, or water heater, we handle those too — just as their own specialty.",
      },
      {
        question: "Do you work on both homes and businesses?",
        answer:
          "Yes. Imperium Plumbing takes on residential and commercial plumbing work.",
      },
      {
        question: "Can you replace a fixture I already purchased?",
        answer:
          "Yes, we can install customer-supplied fixtures as well as source and install fixtures ourselves.",
      },
    ],
    relatedSlugs: ["leak-detection", "clogs-hydro-jetting", "repiping"],
  },
  {
    slug: "sewer-drain",
    title: "Sewer & Drain Services",
    shortTitle: "Sewer & Drain",
    cardDescription:
      "Sewer line inspection, drain repair, and sewer drain replacement when a line is beyond a simple clearing.",
    metaDescription: `Sewer line and drain repair for the ${area}. Sewer drain replacement and diagnosis from Imperium Plumbing.`,
    icon: Waves,
    h1: `Sewer & Drain Services in the ${area}`,
    intro:
      "A slow drain that keeps coming back, a sewer smell that won't go away, or water backing up somewhere it shouldn't — these usually point to something further down the line than a simple clog. Imperium Plumbing diagnoses and repairs sewer and drain problems at the source.",
    explanation:
      "Sewer and drain issues range from a single slow drain to a compromised main sewer line. We start by identifying where the actual problem is in the system, then recommend the least invasive fix that actually solves it — repair where a repair holds, and sewer drain replacement when a section of line is beyond repair.",
    symptoms: [
      "Multiple drains backing up at the same time",
      "Recurring clogs in the same drain despite clearing it",
      "Gurgling sounds from drains or toilets",
      "Sewage odor inside or near the property",
      "Wet or soft spots in the yard above a sewer line",
      "Water backing up into a tub or shower when using another fixture",
    ],
    included: [
      "Diagnosis of slow, recurring, or backed-up drains",
      "Sewer line inspection",
      "Drain line repair",
      "Sewer drain replacement for compromised sections",
      "Cleanup and restoration of the work area",
    ],
    process: [
      { title: "Contact Us", description: "Describe what you're seeing — backups, odor, or a recurring clog." },
      { title: "Diagnose the Line", description: "We locate where in the system the problem actually is." },
      { title: "Explain Your Options", description: "Repair vs. replacement, explained before any work starts." },
      { title: "Complete the Work", description: "We fix the line and restore the work area." },
    ],
    whyChoose: [
      "Diagnosis before recommending replacement",
      `${businessConfig.yearsExperience} years of residential and commercial sewer work`,
      "Fast response for backed-up or non-functioning lines",
      "Straightforward explanation of repair vs. replacement",
    ],
    faqs: [
      {
        question: "How do I know if it's a clog or a sewer line problem?",
        answer:
          "If more than one drain is affected, or a cleared drain keeps clogging again, it's often a sign the issue is further down the line rather than in a single fixture. A proper diagnosis is the only way to know for sure.",
      },
      {
        question: "Do you offer hydro jetting for drain clogs?",
        answer:
          "Yes — hydro jetting is handled as part of our clogs and hydro jetting service, and we'll recommend it when it's the right tool for the line.",
      },
      {
        question: "Do you replace sewer lines, or only repair them?",
        answer:
          "Both. We repair sections that can be repaired and replace sections that can't — and explain which applies to your situation before starting work.",
      },
    ],
    relatedSlugs: ["clogs-hydro-jetting", "leak-detection", "plumbing"],
  },
  {
    slug: "water-heaters",
    title: "Water Heater Services",
    shortTitle: "Water Heaters",
    cardDescription:
      "Water heater repair and replacement when hot water is inconsistent, delayed, or gone entirely.",
    metaDescription: `Water heater repair and replacement for the ${area}. Diagnosis and installation from Imperium Plumbing.`,
    icon: Flame,
    h1: `Water Heater Repair & Replacement in the ${area}`,
    intro:
      "No hot water, water that runs out fast, or a unit that's making noise or leaking — water heater problems affect the whole household or building at once. Imperium Plumbing diagnoses the issue and lays out repair versus replacement clearly.",
    explanation:
      "We service both tank and tankless water heaters. Some issues are a straightforward component repair; others mean the unit has reached the end of its service life. We diagnose which situation you're in, explain the tradeoffs, and handle the repair or replacement.",
    symptoms: [
      "No hot water or hot water that runs out quickly",
      "Water heater making popping, rumbling, or knocking sounds",
      "Water pooling at the base of the unit",
      "Inconsistent water temperature",
      "Discolored or rusty hot water",
      "Pilot light or ignition issues",
    ],
    included: [
      "Diagnosis of tank and tankless water heater issues",
      "Component repair (heating elements, thermostats, valves, and more)",
      "Full water heater replacement and installation",
      "Explanation of repair vs. replacement before work begins",
    ],
    process: [
      { title: "Contact Us", description: "Tell us what the unit is doing — or not doing." },
      { title: "Diagnose the Unit", description: "We identify whether it's a repair or a replacement situation." },
      { title: "Explain Your Options", description: "You'll know the tradeoffs before any work starts." },
      { title: "Complete the Work", description: "Repair or new installation, completed and tested." },
    ],
    whyChoose: [
      "Clear repair-vs-replacement guidance, not an automatic upsell",
      `${businessConfig.yearsExperience} years working on residential and commercial units`,
      "Fast diagnosis — hot water problems affect the whole property",
      "Straightforward explanation of what a new unit involves",
    ],
    faqs: [
      {
        question: "Should I repair or replace my water heater?",
        answer:
          "It depends on the age of the unit, the specific failure, and the cost of the repair relative to a new installation. We diagnose the unit and walk through both options rather than defaulting to one.",
      },
      {
        question: "Do you install tankless water heaters?",
        answer: "Yes, we service and install both tank and tankless units.",
      },
      {
        question: "Why does my hot water run out so quickly?",
        answer:
          "This can point to a sediment buildup, a failing heating element, or an undersized unit for current demand. A diagnosis will identify the actual cause.",
      },
    ],
    relatedSlugs: ["plumbing", "leak-detection", "repiping"],
  },
  {
    slug: "repiping",
    title: "Repiping Services",
    shortTitle: "Repiping",
    cardDescription:
      "Full or partial repiping for aging, corroded, or failing pipe systems in homes and commercial buildings.",
    metaDescription: `Repiping services for older or failing plumbing systems in the ${area}. Full and partial repiping from Imperium Plumbing.`,
    icon: Network,
    h1: `Repiping Services in the ${area}`,
    intro:
      "Discolored water, frequent pinhole leaks, or pressure that keeps dropping across the whole system usually means the pipes themselves — not a single fixture — are the problem. Imperium Plumbing evaluates aging pipe systems and repipes what needs to be replaced.",
    explanation:
      "Repiping means replacing some or all of a property's supply lines, typically because the existing pipe material is corroding, scaling, or reaching the end of its expected service life. We assess the current system, identify which sections need replacement, and plan the work to minimize disruption.",
    symptoms: [
      "Discolored (brown, yellow, or rusty) water from multiple fixtures",
      "Frequent pinhole leaks in different locations",
      "Water pressure that has dropped gradually over time",
      "Visible corrosion on exposed pipes",
      "A property with original pipe material from an older building era",
      "Repeated leaks despite individual repairs",
    ],
    included: [
      "Assessment of existing pipe material and condition",
      "Full or partial repiping, based on what the system actually needs",
      "Coordination of shutoffs to limit disruption",
      "Pressure testing after installation",
    ],
    process: [
      { title: "Contact Us", description: "Tell us what you're seeing — discoloration, leaks, or pressure loss." },
      { title: "Assess the System", description: "We evaluate the current pipe material and condition." },
      { title: "Explain Your Options", description: "Full vs. partial repiping, explained before work starts." },
      { title: "Complete the Work", description: "Repiping is completed and the system is pressure tested." },
    ],
    whyChoose: [
      "Assessment-first approach — no repiping without a clear reason",
      `${businessConfig.yearsExperience} years working on residential and commercial systems`,
      "Planning that accounts for minimizing disruption to the property",
      "Straightforward explanation of full vs. partial scope",
    ],
    faqs: [
      {
        question: "How do I know if I need a full or partial repipe?",
        answer:
          "It depends on which sections of the system are affected and the material and age of the existing pipes. An assessment will identify the actual scope needed.",
      },
      {
        question: "Do you repipe commercial buildings as well as homes?",
        answer: "Yes, we handle both residential and commercial repiping.",
      },
      {
        question: "Will repiping affect other parts of my property?",
        answer:
          "We plan the work to limit disruption and walk you through what access is needed before starting.",
      },
    ],
    relatedSlugs: ["leak-detection", "water-heaters", "plumbing"],
  },
  {
    slug: "leak-detection",
    title: "Leak Detection & Repair",
    shortTitle: "Leak Detection",
    cardDescription:
      "Locating hidden water leaks behind walls, under slabs, or underground before they cause real damage.",
    metaDescription: `Leak detection and repair for hidden water leaks in the ${area}. Imperium Plumbing locates and fixes leaks before they cause damage.`,
    icon: Search,
    h1: `Leak Detection & Repair in the ${area}`,
    intro:
      "A higher-than-usual water bill, a damp spot on a wall or floor with no obvious source, or the sound of running water when nothing's on — hidden leaks are hard to find and easy to underestimate. Imperium Plumbing locates the source before it causes real damage.",
    explanation:
      "Hidden leaks can be behind a wall, under a slab, or underground between a meter and the property. We use diagnostic methods to narrow down the location without unnecessary demolition, then repair the leak once it's confirmed.",
    symptoms: [
      "Water bill that has increased with no change in usage",
      "Damp, warped, or discolored spots on walls, ceilings, or flooring",
      "The sound of running water when all fixtures are off",
      "A water meter that keeps moving with everything shut off",
      "Mold or musty odor with no obvious cause",
      "A consistently wet spot in the yard",
    ],
    included: [
      "Leak location using non-invasive diagnostic methods where possible",
      "Confirmation of the leak source before any repair work",
      "Repair of the leak once located",
      "Guidance on any repair needed to affected surfaces",
    ],
    process: [
      { title: "Contact Us", description: "Describe what you're noticing — a bill spike, sound, or damp spot." },
      { title: "Locate the Leak", description: "We narrow down the source using diagnostic methods." },
      { title: "Explain Your Options", description: "We confirm the leak and explain the repair needed." },
      { title: "Complete the Repair", description: "The leak is repaired and the area is left in working order." },
    ],
    whyChoose: [
      "Diagnostic-first approach to avoid unnecessary wall or floor damage",
      `${businessConfig.yearsExperience} years locating and repairing hidden leaks`,
      "Fast response — hidden leaks get more expensive the longer they run",
      "Clear explanation of where the leak is and why",
    ],
    faqs: [
      {
        question: "How do you find a leak without tearing out my walls?",
        answer:
          "We use diagnostic methods to narrow down the likely location before any opening up is done, which keeps unnecessary demolition to a minimum.",
      },
      {
        question: "My water bill went up but I don't see any water — could it still be a leak?",
        answer:
          "Yes. Hidden leaks — behind walls, under slabs, or underground — often show up as a rising bill well before there's any visible sign.",
      },
      {
        question: "Do you repair the leak, or just locate it?",
        answer: "Both. Once the leak is confirmed, we repair it as part of the same service.",
      },
    ],
    relatedSlugs: ["repiping", "sewer-drain", "water-heaters"],
  },
  {
    slug: "clogs-hydro-jetting",
    title: "Clogs & Hydro Jetting",
    shortTitle: "Clogs & Hydro Jetting",
    cardDescription:
      "Clearing stubborn clogs and buildup with hydro jetting when a standard drain snake isn't enough.",
    metaDescription: `Drain clog clearing and hydro jetting for the ${area}. Imperium Plumbing clears stubborn clogs and buildup.`,
    icon: Zap,
    h1: `Clogs & Hydro Jetting in the ${area}`,
    intro:
      "A drain that clogs again a few weeks after being cleared usually has buildup along the walls of the pipe, not just a single blockage. Imperium Plumbing clears the immediate clog and uses hydro jetting when the line needs a full clean-out.",
    explanation:
      "Standard clog removal clears what's blocking the line right now. Hydro jetting uses high-pressure water to clean the full interior of the pipe — grease, scale, and buildup included — which is why it holds up longer against recurring clogs. We recommend jetting when the situation calls for it, not as a default upsell.",
    symptoms: [
      "A drain that clogs again shortly after being cleared",
      "Slow-draining sinks, tubs, or showers",
      "Grease or buildup visible near a drain opening",
      "Multiple fixtures clogging around the same time",
      "Gurgling or bubbling when using a nearby fixture",
      "A kitchen or floor drain with a recurring odor",
    ],
    included: [
      "Diagnosis of the clog and what's causing it to recur",
      "Standard clog clearing for isolated blockages",
      "Hydro jetting for buildup along the pipe interior",
      "Camera-informed assessment where useful",
    ],
    process: [
      { title: "Contact Us", description: "Tell us which drain is clogged and how often it's happening." },
      { title: "Diagnose the Line", description: "We determine whether it's a single clog or buildup along the pipe." },
      { title: "Explain Your Options", description: "Standard clearing vs. hydro jetting, explained clearly." },
      { title: "Complete the Work", description: "The line is cleared and flowing properly again." },
    ],
    whyChoose: [
      "Jetting recommended only when the line actually needs it",
      `${businessConfig.yearsExperience} years clearing residential and commercial drains`,
      "Fast response for clogged or backed-up drains",
      "Straightforward explanation of why a clog keeps coming back",
    ],
    faqs: [
      {
        question: "What's the difference between a standard clog clearing and hydro jetting?",
        answer:
          "Standard clearing removes what's currently blocking the line. Hydro jetting cleans the full interior wall of the pipe with high-pressure water, which is more effective against buildup that causes clogs to keep coming back.",
      },
      {
        question: "Is hydro jetting safe for older pipes?",
        answer:
          "We assess the pipe material and condition before recommending jetting, since it isn't the right approach for every line.",
      },
      {
        question: "Why does the same drain keep clogging?",
        answer:
          "Recurring clogs in the same spot usually mean buildup along the pipe walls rather than a single blockage — which is exactly what hydro jetting is designed to address.",
      },
    ],
    relatedSlugs: ["sewer-drain", "plumbing", "leak-detection"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(service: ServiceData): ServiceData[] {
  return service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServiceData => Boolean(s));
}
