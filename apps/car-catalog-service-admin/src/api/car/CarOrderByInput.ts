import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  description?: SortOrder;
  engineType?: SortOrder;
  horsePower?: SortOrder;
  fuelEfficiency?: SortOrder;
};
