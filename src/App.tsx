import 'normalize.css';
import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import './App.css';
import Root from './router/router';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677FF'
        }
      }}
    >
      <HashRouter>
        <Root />
      </HashRouter>
    </ConfigProvider>
  );
}

export default App;
