import React from "react";
import { List, Datagrid, TextField, ReferenceField } from "react-admin";

const UserRoleList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />

        <ReferenceField label="User" source="UserId" reference="user">
          <TextField source="Email" />
        </ReferenceField>

        <ReferenceField label="Role" source="RoleId" reference="role">
          <TextField source="Name" />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

export default UserRoleList;
