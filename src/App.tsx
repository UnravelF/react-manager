import 'normalize.css';
import { BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
