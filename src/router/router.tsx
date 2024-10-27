import { Navigate, useRoutes } from 'react-router-dom';

import Welcome from '@/pages/welcome';
import Login from '@/pages/login';
import NotFound from '@/pages/notFound';

const routes = [
  {
    path: '/',
    element:<Navigate to='/welcome' />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/welcome',
    element: <Welcome />
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
