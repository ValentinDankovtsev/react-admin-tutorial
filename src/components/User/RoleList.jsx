import React from "react";
import {List, Datagrid,TextField } from "react-admin"


const RoleList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="Name" />
      </Datagrid>
    </List>
  );
};

export default RoleList;
