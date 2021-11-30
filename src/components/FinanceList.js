import React, { useContext } from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  TextInput,
  ReferenceInput,
  SelectInput,
  useGetMany,
  Filter,
  ReferenceField,
  useListContext,
  useGetManyReference,
  AutocompleteInput,
  SimpleList,
  ResourceContextProvider,
  useRecordContext,
} from "react-admin";
import { TotalofOperation, Total, ResourceName } from "./Total";
import { Aside } from "./Total";
import { Box, useMediaQuery } from "@material-ui/core";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FinanceEdit from "./FinanceEdit";
import Button from "@mui/material/Button";
// import history from 'react-dom'

const choiscesNames = () => {};

const financeFilters = [
  <TextInput label="Search" source="q" alwaysOn />,
  <SelectInput
    choices={[
      { id: "Alexey", name: "Alexey" },
      { id: "Vasily", name: "Vasily" },
      { id: "Alexandr", name: "Alexandr" },
    ]}
    source="name"
  />,
  <SelectInput
    choices={[
      { id: "Наличный", name: "Наличный" },
      { id: "Безналичный", name: "Безналичный" },
    ]}
    source="cash"
  />,
];

const CommentEditButton = ({ record, basePath }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "right" }}>
      {record && <EditButton basePath={basePath} record={record}></EditButton>}
    </Box>
  );
};

export const MobileFinanceList = (props) => {
  console.log(props, "MobileFinancceProps");
  const { data } = props;
  console.log(data);
  const dataArray = Object.values(data);
  return dataArray.map((record) => (
    <Accordion key={record.id}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          {record.id} {record.date} from {record.name}
        </Typography>
      </AccordionSummary>
      
      <AccordionDetails>
        <Typography>Description: {record.description}</Typography>
        <hr></hr>
        <Typography>INC: {record.income}</Typography>
        <Typography>EXP: {record.expenses}</Typography>
        <CommentEditButton record={record} basePath={props.basePath} />
      </AccordionDetails>
      
    </Accordion>
  ));
};

const FinanceList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List {...props} filters={financeFilters}>
      {isSmall ? (
        <MobileFinanceList />
      ) : (
        <>
          <Datagrid>
            <TextField source="name" />
            <DateField source="date" />
            <TextField source="income" />
            <TextField source="expenses" />
            <TextField source="description" />
            <TextField source="cash" />
            <TotalofOperation label="Total" />
            <EditButton basePath="/finance" />
            <DeleteButton basePath="/finance" />
          </Datagrid>
          <Aside />
        </>
      )}
    </List>
  );
};

export default FinanceList;
