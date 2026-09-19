export type ProblemSolutionItem = {
  problem: string;
  solutionSlug: string;
  solutionLabel: string;
};

export const problemSolutions: ProblemSolutionItem[] = [
  {
    problem: "Low water pressure?",
    solutionSlug: "repiping",
    solutionLabel: "Could point to aging pipes — see Repiping",
  },
  {
    problem: "Recurring drain clogs?",
    solutionSlug: "clogs-hydro-jetting",
    solutionLabel: "Buildup in the line — see Clogs & Hydro Jetting",
  },
  {
    problem: "No hot water?",
    solutionSlug: "water-heaters",
    solutionLabel: "Diagnosis and repair — see Water Heaters",
  },
  {
    problem: "Suspected hidden leak?",
    solutionSlug: "leak-detection",
    solutionLabel: "Locate it before it spreads — see Leak Detection",
  },
  {
    problem: "Old or failing pipes?",
    solutionSlug: "repiping",
    solutionLabel: "Full or partial repiping — see Repiping",
  },
  {
    problem: "Backed-up sewer line?",
    solutionSlug: "sewer-drain",
    solutionLabel: "Diagnosis and repair — see Sewer & Drain",
  },
];
