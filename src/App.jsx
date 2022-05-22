import React from 'react';
import { createRoot, ReactDOM, Route } from 'react-dom/client';
import Frame from './components/frame';
import RegistrationForm from './form/registrationform';

export default function App() {
  return (
    <div>
      <Frame />
      <Route path='/register' element={<RegistrationForm />} />
    </div>
  );
}
