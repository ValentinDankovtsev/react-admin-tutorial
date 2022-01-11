import React, { useEffect, useState } from "react";
import {
  List,
  Datagrid,
  TextField,
  ArrayField,
  ReferenceField,
  BooleanField,
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
  Edit,
} from "react-admin";
import {
  useDataProvider,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
} from "react-admin";

const UserEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="FirstName" />
        <TextInput source="LastName" />
        <TextInput source="Email" />
        <TextInput source="MobilePhone" />
        <TextInput source="Password" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
