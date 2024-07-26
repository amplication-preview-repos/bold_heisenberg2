export type Lead = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  isContacted: boolean | null;
  phoneNumber: string | null;
  message: string | null;
};
