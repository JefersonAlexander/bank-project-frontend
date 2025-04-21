import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import {getAllCustomers} from '../services/customerServices/getAllCustomers'

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      setError(null);
      const data = await getAllCustomers();
      if (data) {
        setCustomers(data);
      } else {
        setError('Error al cargar la lista de clientes.');
      }
      setLoading(false);
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
        <CircularProgress />
        <Typography variant="subtitle1" style={{ marginLeft: '16px' }}>
          Cargando clientes...
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

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Número de Cuenta</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Apellido</TableCell>
            <TableCell align="right">Saldo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <TableRow
              key={customer.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {customer.id}
              </TableCell>
              <TableCell align="right">{customer.accountNumber}</TableCell>
              <TableCell align="right">{customer.firstName}</TableCell>
              <TableCell align="right">{customer.lastName}</TableCell>
              <TableCell align="right">{customer.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerList;