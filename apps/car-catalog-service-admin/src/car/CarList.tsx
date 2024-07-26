import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CarList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Cars"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Price" source="price" />
        <TextField label="Description" source="description" />
        <TextField label="EngineType" source="engineType" />
        <TextField label="HorsePower" source="horsePower" />
        <TextField label="FuelEfficiency" source="fuelEfficiency" />
      </Datagrid>
    </List>
  );
};
