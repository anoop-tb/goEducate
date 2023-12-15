import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { ReduxTableDataProps } from "../commonType"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { getTable } from "../redux/features/data-slice";



const TableComponent = () =>{
    const tableDetails = useSelector((state: RootState) => state.table.value);
    const dispatch = useDispatch<AppDispatch>();
  
    useEffect(()=>{
      if (tableDetails.table === null){
      dispatch(getTable())
      }
    },[tableDetails])
    return(
        <>
        {tableDetails?.table !== null && tableDetails.isTable ? (<TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">User ID</TableCell>
              <TableCell align="center">title</TableCell>
              <TableCell align="right">completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableDetails?.table.map((row:ReduxTableDataProps) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.userId}</TableCell>
                <TableCell align="center">{row.title}</TableCell>
                <TableCell align="right">{String(row.completed)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>)
      : <CircularProgress />  
    }
      </>
    )
}

export default TableComponent