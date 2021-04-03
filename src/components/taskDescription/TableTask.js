import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontWeight: 'bold',
    backgroundColor:'rgba(66, 66, 224, 0.411)',
    color: 'black',
  },
  body: {
    fontWeight: 'bold',
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(prioridades, titulo, descripcion, modificaciones) {
  return { prioridades, titulo, descripcion, modificaciones};
}

const rows = [
  createData('Rojo', 'Hacer una torta', 'Hacer un pastel para mi hijo', 'Iconos'),
  createData('Rojo', 237, 9.0,1),
  createData('Rojo', 262, 16.0, 24),
  createData('Rojo', 305, 3.7, 67),
  createData('Rojo', 356, 16.0,2),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


export const TableTask = () => {
  const classes = useStyles();
  return (
    <>
      <h1 className="mb-5">Tareas</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Prioridad</StyledTableCell>
              <StyledTableCell align="center">Título</StyledTableCell>
              <StyledTableCell align="center">Descripción</StyledTableCell>
              <StyledTableCell align="center">Modificar</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.titulo}>
                {/* <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell> */}
                <StyledTableCell align="center">{row.prioridades}</StyledTableCell>
                <StyledTableCell align="center">{row.titulo}</StyledTableCell>
                <StyledTableCell align="center">{row.descripcion}</StyledTableCell>
                <StyledTableCell align="center">{row.modificaciones}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

