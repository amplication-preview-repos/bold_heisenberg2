import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const LeadEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Email" source="email" type="email" />
        <BooleanInput label="IsContacted" source="isContacted" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <TextInput label="Message" multiline source="message" />
      </SimpleForm>
    </Edit>
  );
};
