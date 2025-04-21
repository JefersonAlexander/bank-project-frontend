import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DrawerAppBar from './DrawerAppBar';
import CreateAcountCustomer from './createAcountCustomer';
import CustomerList from './listCustomers';
import CreateTransaction from './createTransaction'
import GetTransactionAcount from './getTransactionAcount';

function AppRoutes() {
  return (
      <Router>
      <DrawerAppBar />
      
      <Routes>
        
      <Route path="/" element={<CreateAcountCustomer />} />
      <Route path="/CrearCuenta" element={<CreateAcountCustomer/>}/>
      <Route path="/ConsultarUsuarios" element={<CustomerList/>}/>
      <Route path='/HacerTransferencia' element={<CreateTransaction/>}/> 
      <Route path='/TransaccionesPorCuenta' element={<GetTransactionAcount/>}/>

      
      </Routes>

      </Router>
  );
}

export default AppRoutes;