import React, { useState } from 'react';
import {
  TextField,
  Typography,
} from '@mui/material';
import TransactionList from './TransationList'

const TransactionAccountSearch = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [showTransactions] = useState(false);

  

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