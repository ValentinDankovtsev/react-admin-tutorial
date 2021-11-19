import React, { useContext } from 'react';
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, TextInput, ReferenceInput, SelectInput, useGetMany, Filter, ReferenceField, useListContext, useGetManyReference, AutocompleteInput, SimpleList, ResourceContextProvider, useRecordContext } from 'react-admin'
import { TotalofOperation, Total, ResourceName } from './Total';
import { Aside } from './Total';
import { useMediaQuery } from '@material-ui/core';


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


const FinanceList = (props) => {


    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));


    return (

        <List
            // aside={<Aside />} 
            {...props} filters={financeFilters}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `Операция: ${record.id} 
                    Income: ${record.income}`}
                    tertiaryText={record => new Date(record.date).toLocaleDateString()}

                />
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