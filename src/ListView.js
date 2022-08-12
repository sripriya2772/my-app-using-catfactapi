import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";


const ListView = () => {
    let history = useHistory();
    const [rows, setRows] = useState([]);
    const fetchData = async () => {
        await fetch('https://cat-fact.herokuapp.com/facts/random?amount=20')
            .then(response => response.json()) 
            .then(response => {
                    setRows(response); 
                }
            )
            .catch(err => console.error(err));
    };

    
    useEffect(() => {
        fetchData();
    }, []);

    const viewDetail = (row) => {
        history.push(`/listdetail/${row._id}`,
            { fact: row }
        );
    }
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Fact</TableCell>
                            <TableCell align="left">Source</TableCell>
                            <TableCell align="left">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.text}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.source}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <Button onClick={() => viewDetail(row)}>View Detail</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default ListView;
