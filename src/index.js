import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { add, subtract, multiply, divide } from './math';
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>
);
