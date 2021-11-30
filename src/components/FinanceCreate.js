import {
  DateInput,
  SimpleForm,
  TextInput,
  Create,
  SelectInput,
  useGetMany,
} from "react-admin";
import React from "react";
import { Box } from "@material-ui/core";

const FinanceCreate = (props) => {
  return (
    <Create title="Create finance operation" {...props}>
      {/* <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", width:"120%"}}> */}
        <SimpleForm fullWidth >
          <TextInput multiline source="description" fullWidth />
          <DateInput label="date" source="date" fullWidth  />
          <TextInput source="income" fullWidth />
          <TextInput source="expenses" fullWidth />
          <SelectInput fullWidth 
            source="cash"
            choices={[
              { id: "Наличный", name: "Наличный" },
              { id: "Безналичный", name: "Безналичный" },
            ]}
          />
        </SimpleForm>
      {/* </Box> */}
    </Create>
  );
};

export default FinanceCreate;
