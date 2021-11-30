import { TextField, useListContext, useGetList, useGetMany, TextInput, FunctionField, SimpleList, useRecordContext, useResourceContext, FinanceList, useChoices } from "react-admin";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography'
import { Box } from "@material-ui/core";

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
        <Box sx={{ color: "red", display: "flex", mr: 2, pt: 1 , alignItems: "right", justifyContent: "right"}}>
            Итого: {sumOfTotals}
        </Box>
        // <TableBody>
        //     <TableRow>
        //         <TableCell colSpan={2}>Total</TableCell>
        //         <TableCell align="right">{500}</TableCell>
        //     </TableRow>
        // </TableBody>
    )
};