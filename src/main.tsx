import { createRoot } from 'react-dom/client';
import App from './App';
import './mock/index';

createRoot(document.getElementById('root')! as HTMLElement).render(<App />);
