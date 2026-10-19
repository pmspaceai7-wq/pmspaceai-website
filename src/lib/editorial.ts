export type EditorialOwner = {
  id: string;
  name: string;
  role: string;
  bio: string;
  areas: string[];
  url: string;
};

export const editorialOwners: EditorialOwner[] = [
  {
    id: "space-ai-editorial",
    name: "Space AI Editorial Team",
    role: "Construction AI Research and Product Education",
    bio:
      "The Space AI Editorial Team maintains product education, construction AI explainers, workflow documentation, and software evaluation resources.",
    areas: [
      "Construction management software",
      "AI in construction",
      "Project controls",
      "Workflow documentation",
      "Construction software evaluation",
    ],
    url: "https://pmspace.ai/docs/",
  },
  {
    id: "space-ai-product",
    name: "Space AI Product Team",
    role: "Product Knowledge and Workflow Documentation",
    bio:
      "The Space AI Product Team maintains documentation that explains how Space AI supports scheduling, cost control, document management, integrations, and buyer evaluation.",
    areas: [
      "Product methodology",
      "Scheduling workflows",
      "Cost control workflows",
      "Integrations",
      "AI claims and trust",
    ],
    url: "https://pmspace.ai/trust/ai-claims/",
  },
];

export function getEditorialOwner(id = "space-ai-editorial") {
  return editorialOwners.find((owner) => owner.id === id) || editorialOwners[0];
}
