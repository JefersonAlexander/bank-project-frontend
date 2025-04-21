import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Alert, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import {CreateAcountCustomerService} from '../services/customerServices/createAcountCustomerService'


const CreateAcountCustomer = () => {
  // State para almacenar los datos del formulario y el mensaje de error o éxito
  const [userData, setUserData] = useState({
    accountNumber: '',
    firstName: '',
    lastName: '',
    balance: '',
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
    const response = await CreateAcountCustomerService(userData);

    if (response) {
      setSuccessMessage('Cliente creado ');
      setUserData({ 
        accountNumber: '',
        firstName: '',
        lastName: '',
        balance: '',
      });
    } else {
      setErrorMessage('Error al crear cliente');
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

      <Typography variant="h4" gutterBottom align="center">Registro de Usuario</Typography>

      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}> {/* Margen superior y margen inferior */}
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      </Grid>
      
        <Grid container spacing={2}>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Número de cuenta"
              name="accountNumber"
              value={userData.accountNumber}
              onChange={handleChange}
              required
            />
          </Grid>

          

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nombre"
              name="firstName"
              value={userData.first_name}
              onChange={handleChange}
              required
            />
          </Grid>


          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Apellido"
              name="lastName"
              value={userData.last_name}
              onChange={handleChange}
              required
            />
          </Grid>


          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Saldo"
              name="balance"
              value={userData.balance}
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
              Crear cliente
            </Button>
           
          </Grid>
          
        </Grid>
      </Box>
    </Container>
  );
};

export default CreateAcountCustomer;