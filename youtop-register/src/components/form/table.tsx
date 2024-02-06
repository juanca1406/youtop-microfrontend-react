import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell align="right">Edad</TableCell>
                        <TableCell align="right">Correo</TableCell>
                        <TableCell align="right">Contraseña</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">juan</TableCell>
                        <TableCell align="right">18</TableCell>
                        <TableCell align="right">dsad</TableCell>
                        <TableCell align="right">sdad</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
