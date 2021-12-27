import React from "react";
import {Create, TextInput, SimpleForm } from "react-admin"


const RoleCreate = (props) => {
  return (
    <Create title="Create finance operation" {...props}>
      <SimpleForm>
        <TextInput source="Name" />
      </SimpleForm>
    </Create>
  );
};

export default RoleCreate;
