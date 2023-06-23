import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import EmploymentVerification from './components/EmploymentVerification';
import ThanksPage from './components/thanksPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/verification" element={<EmploymentVerification />} />
          <Route exact path="/verification/thanks" element={<ThanksPage />} />
        </Routes>
      </BrowserRouter></>
  );
}

export default App;