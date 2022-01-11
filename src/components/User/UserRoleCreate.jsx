import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  TextInput,
  required,
  ReferenceInput,
  SelectInput,
  AutocompleteInput
} from "react-admin";

const UserRoleCreate = (props) => {
  return (
    <Create title="Create User Roles" {...props}>
      <SimpleForm>
        <ReferenceInput
          label="User"
          source="UserId"
          reference="user"
        >
          <AutocompleteInput optionText="Email" />
        </ReferenceInput>
        
        <ReferenceInput
          label="Role"
          source="RoleId"
          reference="role"
        >
          <SelectInput optionText="Name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default UserRoleCreate;
