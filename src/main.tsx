import { createRoot } from 'react-dom/client'
import 'node_modules/modern-normalize/modern-normalize.css';
import './index.css'
import App from './components/App/App.tsx'

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <App />,
);

