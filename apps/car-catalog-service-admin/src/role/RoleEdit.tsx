import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RoleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <TextInput label="CatalogManager" source="catalogManager" />
        <TextInput label="Admin" source="admin" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Edit>
  );
};