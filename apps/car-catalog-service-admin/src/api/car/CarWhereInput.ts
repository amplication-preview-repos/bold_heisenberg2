import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CarWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  description?: StringNullableFilter;
  engineType?: StringNullableFilter;
  horsePower?: IntNullableFilter;
  fuelEfficiency?: FloatNullableFilter;
};
