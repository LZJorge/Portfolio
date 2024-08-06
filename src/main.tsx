import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import App from './App.tsx'
import './config/i18n.ts';

import './styles/global.scss'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
