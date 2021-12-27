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
} from "react-admin";
import {
  useDataProvider,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
} from "react-admin";

const validateUserCreation = (values) => {
  const errors = {};
  if (!values.FirstName) {
    errors.FirstName = "The firstName is required";
  }
  if (!values.LastName) {
    // You can return translation keys
    errors.LastName = "ra.validation.required";
  }
  if (!values.Email) {
    // You can return translation keys
    errors.Email = "ra.validation.required";
  }
  if (!values.MobilePhone) {
    // You can return translation keys
    errors.MobilePhone = "ra.validation.required";
  }
  if (!values.Password) {
    // You can return translation keys
    errors.Password = "ra.validation.required";
  }
  return errors;
};

const UserCreate = (props) => {
  return (
    <Create title="Create finance operation" {...props}>
      {/* <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", width:"120%"}}> */}
      <SimpleForm validate={validateUserCreation}>
        <TextInput source="FirstName" />
        <TextInput source="LastName" />
        <TextInput source="Email" />
        <TextInput source="MobilePhone" />
        <TextInput source="Password" />
        {/* <DateInput label="date" source="date" fullWidth />
        <TextInput source="income" fullWidth />
        <TextInput source="expenses" fullWidth />
        <SelectInput
          fullWidth
          source="cash"
          choices={[
            { id: "Наличный", name: "Наличный" },
            { id: "Безналичный", name: "Безналичный" },
          ]}
        /> */}
      </SimpleForm>
      {/* </Box> */}
    </Create>
  );
};

export default UserCreate;
