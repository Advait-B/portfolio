export type Rating = { value: number; cached: boolean };

export type RatingProvider = {
  name: string;
  fallback: number;
  fetch(): Promise<number>; // resolves the live value, or throws
};
