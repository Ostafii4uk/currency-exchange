import { Route, HashRouter, Routes } from 'react-router-dom';
import { Tab } from '../pages';
import App from '../App';

export const createRoutes = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path=":tabId" element={<Tab />} />
      </Route>
    </Routes>
  </HashRouter>
);
