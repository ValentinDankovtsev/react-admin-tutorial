import React from "react";
import {List, Datagrid,TextField } from "react-admin"


const UserRoleList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="UserId" />
        <TextField source="RoleId" />
      </Datagrid>
    </List>
  );
};

export default UserRoleList;
