import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ApplicationPage from "./pages/ApplicationPage";
import CreateTripPage from "./pages/CreateTripPage";
import TripDetailPage from "./pages/TripDetailPage";
import TripsListPage from "./pages/TripsListPage";
import styled from "styled-components";
import { CssBaseline } from "@material-ui/core";

const AppContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px;
`


const  App = () => {
  return (
    
    <BrowserRouter>
    <CssBaseline />
    <AppContainer>
      <Routes>

        <Route index element={<HomePage />} />

        <Route path='login' element={<LoginPage />} />

        <Route path='viagens/detalhe/:tripId' element={<TripDetailPage/>} />

        <Route path='viagens/criar' element={<CreateTripPage />} />

        <Route path='viagens' element={<TripsListPage />} />

        <Route path='inscricao' element={<ApplicationPage />} />

      </Routes>
      </AppContainer>
    </BrowserRouter>
    
  )
}

export default App;
