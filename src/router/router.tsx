import { Navigate, useRoutes } from 'react-router-dom';

import Layout from '@/layout'
import Welcome from '@/pages/welcome';
import Login from '@/pages/login';
import NotFound from '@/pages/notFound';
import Dashboard from '@/pages/dashboard';
import UserList from '@/pages/system/user';

const routes = [
  {
    path: '/',
    element: <Navigate to='/welcome' />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/welcome',
        element: <Welcome />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },

      {
        path: '/userList',
        element: <UserList />
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
