import React from 'react';
import { createRoot, ReactDOM } from 'react-dom/client';
import Frame from './components/Frame';
import registerForm from './Form/registerForm';

export default function App() {
  return (
    <div>
      <Frame />
      <registerForm />
    </div>
  );
}
