import { TextField, useListContext, useGetList, useGetMany, TextInput, FunctionField, SimpleList, useRecordContext, useResourceContext, FinanceList, useChoices } from "react-admin";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography'

export const TotalofOperation = ({ record }) => {

    return (
        <FunctionField render={record => `${record.income}` - `${record.expenses}`} />
    )
}


export const Aside = () => {

    const { data } = useListContext();

    const sumOfTotals = Object.values(data).reduce((acc, { income, expenses }) => {
        const sum = income - expenses
        return acc + sum
    }, 0)

    return (
        <div class="RaList-main-54">
            Итого: {sumOfTotals}
        </div>
        // <TableBody>
        //     <TableRow>
        //         <TableCell colSpan={2}>Total</TableCell>
        //         <TableCell align="right">{500}</TableCell>
        //     </TableRow>
        // </TableBody>
    )
};