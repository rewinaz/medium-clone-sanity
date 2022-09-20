import { createCurrentUserHook, createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};
const builder = imageUrlBuilder(config);

// Creating client for future request
export const sanityClient = createClient(config);

// Building the queried image url to usable url
export const urlFor = (source) => builder.image(source);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
