import type { PageContent } from "../types";
import { about } from "./about";
import { orgPages } from "./org";
import { therapyPages } from "./therapy";
import { wellnessPages } from "./wellness";
import { specializedPages } from "./specialized";

export const PAGES: PageContent[] = [about, ...orgPages, ...therapyPages, ...wellnessPages, ...specializedPages];

const byUrl = new Map(PAGES.map((p) => [p.url, p]));
export function getPage(url: string) {
  return byUrl.get(url);
}
