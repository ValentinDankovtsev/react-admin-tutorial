import React from "react";
import { DateInput, SimpleForm, TextInput, Edit, SelectInput,NumberInput, useEditController,useRecordContext } from "react-admin";
import MobileFinanceList from './FinanceList'


const FinanceEdit = (props) => {
    
    const controllerProps = useEditController(props);
    console.log(controllerProps,'controllerProps')
    return (
        <Edit title='Edit finance' {...props} >
            <SimpleForm>
                <TextInput source='name' fullWidth/>
                <TextInput multiline source='description' fullWidth/>
                <DateInput label='date' source='date' fullWidth/>
                <NumberInput source='income' fullWidth/>
                <NumberInput source='expenses' fullWidth/>
                <SelectInput source='cash' fullWidth choices={[
                    { id: 'Наличный', name: 'Наличный' },
                    { id: 'Безналичный', name: 'Безналичный' },
                ]} />
            </SimpleForm>
        </Edit>
    )
}

export default FinanceEdit