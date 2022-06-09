import { Route, HashRouter, Routes } from 'react-router-dom';
import { Tab } from '../components/Tab';
import App from '../App';

const createRoutes = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path=":tabId" element={<Tab />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default createRoutes;