import { client } from "./client";
import type { QueryParams } from "next-sanity";

export const sanityFetch = async <T>(
  query: string,
  params: QueryParams = {},
  tags: string[] = [],
): Promise<T> => {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  if (!projectId) {
    console.warn(
      "[jtah] NEXT_PUBLIC_SANITY_PROJECT_ID not set - returning empty result.",
    );
    return [] as unknown as T;
  }

  return await client.fetch<T>(query, params, { next: { tags } });
};
