import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.common.white,
  },
  body: {
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

const useStyles = makeStyles({
  styletable: {
    marginTop: '15%'
  },
  table: {
    minWidth: 300,
  },
  linkcolor: {
    color: '#0277bd'
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.styletable}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Original URL</StyledTableCell>
            <StyledTableCell align="right">Short URL</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row"><Link target="_blank" href={`${props.full}`} className={classes.linkcolor}>{props.full}</Link></StyledTableCell>
            <StyledTableCell align="right"><Link href={`http://localhost:5000/${props.short}`} className={classes.linkcolor}>{props.short}</Link></StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
