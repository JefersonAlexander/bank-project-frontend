import React, { useState, useEffect } from 'react';
import {
  Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Typography,CircularProgress,Alert,
} from '@mui/material';
import { GetTransactionAcountService } from '../services/transactionServices/transactionsForAccountService'; 

const TransactionList = ({ accountNumber }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      setError(null);
      const data = await GetTransactionAcountService(accountNumber);
      if (data) {
        setTransactions(data);
      } else {
        setError(`Error al cargar el historial de transacciones para la cuenta: ${accountNumber}`);
      }
      setLoading(false);
    };

    if (accountNumber) {
      fetchTransactions();
    } else {
      setLoading(false);
      setTransactions([]);
    }
  }, [accountNumber]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
        <CircularProgress />
        <Typography variant="subtitle1" style={{ marginLeft: '16px' }}>
          Cargando historial de transacciones...
        </Typography>
      </div>
    );
  }

  if (error) {
    return (
      <Alert severity="error">
        {error}
      </Alert>
    );
  }

  if (!accountNumber) {
    return <Typography>Por favor, ingresa un número de cuenta para ver su historial.</Typography>;
  }

  if (transactions.length === 0) {
    return <Typography>No hay transacciones para la cuenta: {accountNumber}</Typography>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="transaction history table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Remitente</TableCell>
            <TableCell align="right">Destinatario</TableCell>
            <TableCell align="right">Monto</TableCell>
            <TableCell align="right">Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {transactions.map((transaction) => (
              <TableRow
                key={transaction.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {transaction.id}
                </TableCell>
                <TableCell align="right">{transaction.senderAccountNumber}</TableCell>
                <TableCell align="right">{transaction.receiverAccountNumber}</TableCell>
                <TableCell align="right">{transaction.amount}</TableCell>
                <TableCell align="right">
                  {transaction.timestamp
                    ? new Date(transaction.timestamp).toLocaleString()
                    : 'Fecha no disponible'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionList;