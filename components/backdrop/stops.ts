import type { Stop } from "@/content/types";

/** Focal points on the branch master (16368 x 9207), as fractions. */
export const STOPS: Record<Stop, { x: number; y: number; scale: number; mobileScale: number }> = {
  wide: { x: 0.5, y: 0.5, scale: 1.08, mobileScale: 1.15 },
  cairn: { x: 0.15, y: 0.46, scale: 2.3, mobileScale: 3.2 },
  pool: { x: 0.36, y: 0.53, scale: 2.5, mobileScale: 3.4 },
  labyrinth: { x: 0.5, y: 0.535, scale: 2.5, mobileScale: 3.4 },
  seated: { x: 0.655, y: 0.44, scale: 2.4, mobileScale: 3.2 },
  standing: { x: 0.83, y: 0.45, scale: 2.4, mobileScale: 3.2 },
  ivy: { x: 0.42, y: 0.6, scale: 2.1, mobileScale: 2.8 },
  ground: { x: 0.5, y: 0.72, scale: 1.25, mobileScale: 1.6 },
};

export const BACKDROP_RATIO = 16368 / 9207;
