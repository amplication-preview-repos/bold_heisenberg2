import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const LeadCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Email" source="email" type="email" />
        <BooleanInput label="IsContacted" source="isContacted" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <TextInput label="Message" multiline source="message" />
      </SimpleForm>
    </Create>
  );
};
