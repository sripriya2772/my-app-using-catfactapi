// Importing all the required modules
import React from 'react';
import {useLocation} from "react-router-dom/cjs/react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";

const ListDetail = () => {
    const { state } = useLocation(); 
    const fact = (state && state.fact) ? state.fact : {}; 
    return (
        <>
            {state && state.fact && (
                <>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">ID</TableCell>
                                    <TableCell align="left">Fact</TableCell>
                                    <TableCell align="left">Updated At</TableCell>
                                    <TableCell align="left">Is Deleted ?</TableCell>
                                    <TableCell align="left">Source</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                    <TableRow
                                        key={fact._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {fact._id}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {fact.text}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {fact.updatedAt}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {fact.deleted ? 'Yes' : 'No'}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {fact.source}
                                        </TableCell>
                                    </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            )}
            {!state && <h3>Please navigate through list page</h3>}
        </>
    );
}

export default ListDetail;
