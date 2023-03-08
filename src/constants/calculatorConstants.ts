// Operators

export enum OPERATORS {
  division = '/',
  multiplication = 'x',
  subtraction = '-',
  addition = '+',
}

export const OPERATORS_ARRAY: OPERATORS[] = [
  OPERATORS.division,
  OPERATORS.multiplication,
  OPERATORS.subtraction,
  OPERATORS.addition,
]

// Numbers

export type NUMBERS = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | ','

export const NUMBERS_ARRAY: NUMBERS[] = [7, 8, 9, 4, 5, 6, 3, 2, 1, 0, ',']
