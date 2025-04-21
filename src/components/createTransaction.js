import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Alert, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { CreateTransactionService } from '../services/transactionServices/createTransactionService';



const CreateTransaction = () => {
  // State para almacenar los datos del formulario y el mensaje de error o éxito
  const [userData, setUserData] = useState({
    senderAccountNumber: '',
    receiverAccountNumber: '',
    amount: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  // Manejar el cambio de valores en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await CreateTransactionService(userData);

    if (response) {
      setSuccessMessage('Transacción creada');
      setUserData({ // Restablecer el formulario
        senderAccountNumber: '',
        receiverAccountNumber: '',
        amount: '',
      });
    } else {
      setErrorMessage('Error al crear la transacción');
    }
};

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',  
      }}
    >
    <Box 
          component="form" 
          sx={{
            border: '1px solid #2196f3',  
            borderRadius: '8px',       
            padding: '20px',            
            boxShadow: 3,            
          }} 
          
          noValidate 
          autoComplete="off" 
          onSubmit={handleSubmit}
        >

      <Typography variant="h4" gutterBottom align="center">Ralizar Transaciones</Typography>

      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}> {/* Margen superior y margen inferior */}
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      </Grid>
      
        <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Número de cuenta quien envía"
              name="senderAccountNumber"
              value={userData.senderAccountNumber}
              onChange={handleChange}
              required
            />
          </Grid>

          

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Número de cuanta quien recive"
              name="receiverAccountNumber"
              value={userData.receiverAccountNumber}
              onChange={handleChange}
              required
            />
          </Grid>


          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Cantidad a enviar"
              name="amount"
              value={userData.amount}
              onChange={handleChange}
              required
              type="number"
            />
          </Grid>

          

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
             Realizar transación
            </Button>

           
          </Grid>

          

        </Grid>
      </Box>
    </Container>
  );
};

export default CreateTransaction;