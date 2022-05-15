import React from 'react';
import { createRoot } from 'react-dom/client';
import Heading from './Heading';
import Body from './Body';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <div>
    <Heading />
    <Body />
  </div>
);
