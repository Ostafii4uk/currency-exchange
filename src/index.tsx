import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import App from './App';
import { Tab } from './components/Tab/Tab';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path=":tabId" element={<Tab />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
