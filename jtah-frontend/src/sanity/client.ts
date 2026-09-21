import { createClient } from "next-sanity";

// Throws loudly if NEXT_PUBLIC_SANITY_PROJECT_ID is missing when fetching
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "unconfigured-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});

