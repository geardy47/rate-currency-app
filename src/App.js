import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

import Rate from './components/Rate';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container: {
    marginX: 150,
    marginTop: 120,
  },
});

const FOREX_REF = 'https://api.exchangeratesapi.io';

function App() {
  const classes = useStyles();

  const [rates, setRates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getForex = (API, symbol) => {
    axios
      .get(API, {
        params: {
          symbols: symbol,
        },
      })
      .then(function (response) {
        console.log(response.data.rates);
        setRates(response.data.rates);
      });
  };
  useEffect(() => {
    getForex(FOREX_REF + '/latest', 'IDR,USD,CAD,JPY,CHF,GBP');
  }, []);

  var keys = Object.keys(rates);
  var values = keys.map(function (key) {
    return rates[key];
  });

  console.log(keys, values);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getForex(FOREX_REF + '/latest', searchTerm);

      setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='App'>
      <Header handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />
      <CssBaseline />
      <Container className={classes.container}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Currency</TableCell>
                <TableCell align='center'>We Buy</TableCell>
                <TableCell align='center'>Exchange Rate</TableCell>
                <TableCell align='center'>We Sell</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {keys.map((key) => (
                <Rate key={key} rateKey={key} rates={rates} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Footer name='© Copyright Currency Rate App by Genta Shandi 2021' />
    </div>
  );
}

export default App;
