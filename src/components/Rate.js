import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Rate = ({ rateKey, rates }) => {
  return (
    <>
      <TableRow>
        <TableCell align='center' component='th' scope='row'>
          {rateKey}
        </TableCell>
        <TableCell align='center'>
          {(1.02 * rates[rateKey]).toFixed(4)}
        </TableCell>
        <TableCell align='center'>{rates[rateKey]}</TableCell>
        <TableCell align='center'>
          {(0.98 * rates[rateKey]).toFixed(4)}
        </TableCell>
      </TableRow>
    </>
  );
};

export default Rate;
