import App from '../App';
import React from '../pages/react';
import Test from '../pages/test';
import Vite from '../pages/vite';
import NotFound from '../pages/notFound';
import { useRoutes } from 'react-router-dom';

function BaseRouter() {
  const routes = useRoutes([
    {
      path: '/',
      element: <App />
    },
    {
      path: '/react',
      element: <React />
    },
    {
      path: '/test',
      element: <Test />
    },
    {
      path: '/vite',
      element: <Vite />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);
  return routes;
}

export default BaseRouter;
