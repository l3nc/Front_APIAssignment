import React from 'react';
import { createRoot, ReactDOM } from 'react-dom/client';
import { Route, Router } from 'react-router-dom';
import Frame from './components/frame';
import RegistrationForm from './../src/data/register';

export default function App() {
  return (
    <div>
      <Frame />
      <Router>
        <Route path='/register' element={<RegistrationForm />} />
      </Router>
    </div>
  );
}
