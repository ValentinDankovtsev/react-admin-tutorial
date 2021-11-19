import { DateInput, SimpleForm, TextInput, Create, SelectInput, useGetMany } from "react-admin";
import React from "react";


const FinanceCreate = (props) => {
    return (
        <Create title='Create finance operation' {...props}>
            <SimpleForm>
                <TextInput multiline source='description' />
                <DateInput label='date' source='date' />
                <TextInput source='income' />
                <TextInput source='expenses' />
                <SelectInput source='cash' choices={[
                    { id: 'Наличный', name: 'Наличный' },
                    { id: 'Безналичный', name: 'Безналичный' },
                ]} />
            </SimpleForm>
        </Create>
    )
}

export default FinanceCreate