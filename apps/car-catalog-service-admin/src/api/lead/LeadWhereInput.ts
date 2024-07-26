import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type LeadWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  isContacted?: BooleanNullableFilter;
  phoneNumber?: StringNullableFilter;
  message?: StringNullableFilter;
};
