import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CarEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="EngineType" source="engineType" />
        <NumberInput step={1} label="HorsePower" source="horsePower" />
        <NumberInput label="FuelEfficiency" source="fuelEfficiency" />
      </SimpleForm>
    </Edit>
  );
};
