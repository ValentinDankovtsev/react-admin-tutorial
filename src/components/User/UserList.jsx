import React, { useEffect, useState } from "react";
import {
  List,
  Datagrid,
  TextField,
  ArrayField,
  ReferenceField,
  BooleanField
} from "react-admin";
import {
  useDataProvider,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
} from "react-admin";

const UserList = (props) => {
  console.log(props, "props");

  const [test, setTest] = useState();

  const dataProvider = useDataProvider();

  useEffect(() => {
    dataProvider.getTest().then((res) => {
      setTest(res);
    });
  }, []);

  console.log(test, "res");

  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="FirstName" />
        <TextField source="LastName" />
        <TextField source="Email" />
        <TextField source="MobilePhone" />
        <BooleanField source="IsActive" />
        <ReferenceManyField
          label="Role"
          reference="userRole"
          target="UserId"
        >
          <ArrayField source="RoleId">
            <SingleFieldList>
              <ReferenceField reference="role" source="RoleId">
                <ChipField source="Name" />
              </ReferenceField>
            </SingleFieldList>
          </ArrayField>
        </ReferenceManyField>
      </Datagrid>
    </List>
  );
};

export default UserList;
