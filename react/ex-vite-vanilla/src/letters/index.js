import '../style.css'

import React, {Component, StrictMode} from 'react'
import { createRoot } from 'react-dom/client'

import App from './app'

// shared:
// crash
// service-worker
// vendor

const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<StrictMode>
  <App />
</StrictMode>);