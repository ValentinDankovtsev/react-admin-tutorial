import React, { useContext } from 'react';
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, TextInput, ReferenceInput, SelectInput, useGetMany, Filter, ReferenceField, useListContext, useGetManyReference, AutocompleteInput, SimpleList, ResourceContextProvider, useRecordContext } from 'react-admin'
import { TotalofOperation, Total, ResourceName } from './Total';
import { Aside } from './Total';
import { useMediaQuery } from '@material-ui/core';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const financeFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <SelectInput
        choices={
            [
                { id: 'Alexey', name: 'Alexey' },
                { id: 'Vasily', name: 'Vasily' },
                { id: 'Alexandr', name: 'Alexandr' },
            ]
        }
        source="name"
    />,
    <SelectInput
        choices={[
            { id: 'Наличный', name: 'Наличный' },
            { id: 'Безналичный', name: 'Безналичный' },
        ]}
        source="cash"
    />
];


const CommentEditButton = (record) => {
    console.log(record, 'record')
    // const { record } = data
    // console.log(Object.keys(record), 'record')

    return (
        <EditButton basePath={`/finance/${record.id}`}  record={record}/>

    );
}

const MobileFinanceList = (props) => {
    console.log(props)
    const { data } = props
    console.log(data)
    const dataArray = Object.values(data)
    return (
        dataArray.map(operation => <Accordion key={operation.id}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{operation.id}   {operation.date} from {operation.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Description: {operation.description}
                </Typography>
                <hr></hr>
                <Typography>
                    INC: {operation.income}
                </Typography>
                <Typography>
                    EXP: {operation.expenses}
                </Typography>
                <CommentEditButton record={data} />
            </AccordionDetails>
        </Accordion>)
    )
}

const FinanceList = (props) => {

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));


    return (

        <List
            // aside={<Aside />} 
            {...props} filters={financeFilters}>
            {isSmall ? (
                // <SimpleList
                //     primaryText={record => record.name}
                //     secondaryText={record => `Операция: ${record.id} 
                //     Income: ${record.income}`}
                //     tertiaryText={record => new Date(record.date).toLocaleDateString()}

                // />
                <MobileFinanceList />
            ) : (
                <Datagrid>
                    <TextField source='name' />
                    <DateField source='date' />
                    <TextField source='income' />
                    <TextField source='expenses' />
                    <TextField source='description' />
                    <TextField source='cash' />
                    <TotalofOperation label='Total' />
                    <EditButton basePath='/finance' />
                    <DeleteButton basePath='/finance' />
                </Datagrid>
            )}

        </List>

        //     <List {...props} filters={postFilters} >
        //     {isSmall ? (
        //         <SimpleList
        //             primaryText={record => record.title}
        //             secondaryText={record => `${record.views} views`}
        //             tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
        //         />
        //     ) : (
        //         <Datagrid>
        //             <TextField source="id" />
        //             <ReferenceField label="User" source="userId" reference="users">
        //                 <TextField source="name" />
        //             </ReferenceField>
        //             <TextField source="title" />
        //             <TextField source="body" />
        //             <EditButton />
        //         </Datagrid>
        //     )}
        // </List>
    )
}

export default FinanceList