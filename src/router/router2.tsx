import { createBrowserRouter, createHashRouter, Navigate, useRoutes } from 'react-router-dom';

import App from '../App';
import React from '@/pages/react';
import Test from '../pages/test';
import Vite from '../pages/vite';
import NotFound from '../pages/notFound';
import FirstVite from '../pages/vite/vitesChild/firstVite';

const routes = [
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
    element: <Vite />,
    children: [
      {
        path: 'first-vite',
        element: <FirstVite />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '/404',
    element: <NotFound />
  }
];

export default function Root() {
  return useRoutes(routes);
}

// export default createHashRouter(routes, { basename: '/app' });
