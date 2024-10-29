import 'normalize.css';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Root from './router/router';

function App() {
  return (
    <HashRouter>
      <Root />
    </HashRouter>
  );
}

export default App;
