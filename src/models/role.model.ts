export const ROLES = <const>{
  USER: 'USER',
  MARKETER: 'MARKETER',
};

export type Role = (typeof ROLES)[keyof typeof ROLES];
