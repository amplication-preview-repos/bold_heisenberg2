import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CarCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="EngineType" source="engineType" />
        <NumberInput step={1} label="HorsePower" source="horsePower" />
        <NumberInput label="FuelEfficiency" source="fuelEfficiency" />
      </SimpleForm>
    </Create>
  );
};
