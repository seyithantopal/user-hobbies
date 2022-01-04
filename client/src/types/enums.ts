export enum PassionLevel {
  low = 'Low',
  medium = 'Medium',
  high = 'High',
  veryHigh = 'Very-High'
}

export type PassionLevelStrings = keyof typeof PassionLevel;
