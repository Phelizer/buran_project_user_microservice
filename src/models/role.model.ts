export const ROLES = <const>{
  USER: 'USER',
  ADMIN: 'ADMIN',
  RESEARCHER: 'RESEARCHER',
};

export type Role = (typeof ROLES)[keyof typeof ROLES];
