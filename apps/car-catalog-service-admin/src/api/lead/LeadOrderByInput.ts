import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  isContacted?: SortOrder;
  phoneNumber?: SortOrder;
  message?: SortOrder;
};
