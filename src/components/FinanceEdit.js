import React from "react";
import { DateInput, SimpleForm, TextInput, Edit, SelectInput,NumberInput } from "react-admin";



const FinanceEdit = (props) => {
    return (
        <Edit title='Edit finance' {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput multiline source='description' />
                <DateInput label='date' source='date' />
                <NumberInput source='income' />
                <NumberInput source='expenses' />
                <SelectInput source='cash' choices={[
                    { id: 'Наличный', name: 'Наличный' },
                    { id: 'Безналичный', name: 'Безналичный' },
                ]} />
            </SimpleForm>
        </Edit>
    )
}

export default FinanceEdit