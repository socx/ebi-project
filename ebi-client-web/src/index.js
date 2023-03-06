import React from 'react';
import { createRoot } from 'react-dom/client';

import 'antd/dist/antd.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import AppMe from './App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<AppMe />);