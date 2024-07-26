import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  catalogManager?: StringNullableFilter;
  admin?: StringNullableFilter;
  user?: StringNullableFilter;
};