import React, { useEffect, useState } from "react";
import { List, Datagrid, TextField, ArrayField } from "react-admin";
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
        <ReferenceManyField
          label="Comments by"
          reference="userRole"
          target="UserId"
        >
          {/* <ArrayField source="Id"> */}
            <SingleFieldList>
              {/* <ChipField source="id" /> */}
              <ReferenceManyField
                label="Comments by"
                reference="role"
                target="Id"
              >
                <SingleFieldList>
                  <ChipField source="Description" />
                </SingleFieldList>
              </ReferenceManyField>
            </SingleFieldList>
          {/* </ArrayField> */}
        </ReferenceManyField>
        {/* <div>{test?.data[0].id}</div> */}
      </Datagrid>
    </List>
  );
};

export default UserList;
