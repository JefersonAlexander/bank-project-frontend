import React, { useState } from 'react';
import {
  TextField,Typography,Button,
} from '@mui/material';
import TransactionList from './TransationList';

const TransactionAccountSearch = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [showTransactions, setShowTransactions] = useState(false);

  const handleSearch = () => {
    if (accountNumber.trim()) {
      setShowTransactions(true); // Actualiza el estado para mostrar las transacciones
    }
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Historial de Transacciones por Cuenta
      </Typography>
      <TextField
        label="Número de Cuenta"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        style={{ marginTop: '25px' }}
      >
        Buscar
      </Button>

      {showTransactions && accountNumber.trim() && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="subtitle1">
            Historial de Transacciones para la cuenta: {accountNumber}
          </Typography>
          <TransactionList accountNumber={accountNumber} />
        </div>
      )}
    </div>
  );
};

export default TransactionAccountSearch;