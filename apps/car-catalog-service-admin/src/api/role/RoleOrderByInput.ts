import { SortOrder } from "../../util/SortOrder";

export type RoleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  name?: SortOrder;
  catalogManager?: SortOrder;
  admin?: SortOrder;
  user?: SortOrder;
};
