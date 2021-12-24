import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  DateField,
  useResourceContext,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
  ReferenceArrayField,
  useGetList,
  useGetOne,
  useRecordContext,
} from "react-admin";
import { useDataProvider } from "ra-core";

function UsersList(props) {
  //   const { ids } = useGetList(
  //     'users',
  // );

  // const record = useRecordContext();

  // console.log(record)
  // const { data} = useGetOne(
  //   'userUseType', id
  // );

  // console.log(data)

  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        
        <TextField source="email" />
        <ReferenceManyField
          label="userRole"
          reference="user"
          target="userId"
        >
          <SingleFieldList>
            <ChipField source="roleId" />
          </SingleFieldList>
        </ReferenceManyField>

        {/* <ReferenceManyField label="useType" reference="useType" target="id">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceManyField> */}

        {/* <ReferenceManyField label="userId" reference="userUseType" target="userId">
                <SingleFieldList>
                    <ChipField source="userId" />
                </SingleFieldList>
            </ReferenceManyField>


            <ReferenceManyField label="useType" reference="useType" target="id">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceManyField> */}
        {/* 
            <ReferenceManyField label="payments" reference="payments" target="useTypeId">
                <SingleFieldList>
                    <ChipField source="amount" />
                </SingleFieldList>
            </ReferenceManyField>

            <ReferenceManyField label="cashBoxId" reference="userCashBox" target="userId">
                <SingleFieldList>
                    <ChipField source="cashBoxId" />
                </SingleFieldList>
            </ReferenceManyField>

            <ReferenceManyField label="cash" reference="cash" target="id">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceManyField>

            <ReferenceManyField label="payments" reference="payments" target="cashBoxId">
                <SingleFieldList>
                    <ChipField source="cashBoxId" />
                </SingleFieldList>
            </ReferenceManyField> */}

        {/* 
        <ReferenceField label="CashBox" source="id" reference="cash">
          <TextField source="name" />
        </ReferenceField>

        <ReferenceField label="UseType" source="id" reference="useType">
          <TextField source="name" />
        </ReferenceField>

        <ReferenceField label="User" source="id" reference="users">
          <TextField source="firstName" />
        </ReferenceField> */}
      </Datagrid>
    </List>
  );
}

export default UsersList;
