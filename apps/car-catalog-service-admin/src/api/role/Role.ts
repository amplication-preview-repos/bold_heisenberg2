export type Role = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  name: string | null;
  catalogManager: string | null;
  admin: string | null;
  user: string | null;
};
