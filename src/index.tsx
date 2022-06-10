import ReactDOM from 'react-dom/client';
import './index.scss';
import { createRoutes } from './routers';

const routes = createRoutes()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  routes
);
