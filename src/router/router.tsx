import { Navigate, useRoutes } from 'react-router-dom';
import React from 'react';

const Layout = React.lazy(() => import('@/layout'));
const Welcome = React.lazy(() => import('@/pages/welcome'));
const Login = React.lazy(() => import('@/pages/login'));
const NotFound = React.lazy(() => import('@/pages/notFound'));
const Dashboard = React.lazy(() => import('@/pages/dashboard'));
const UserList = React.lazy(() => import('@/pages/system/user'));

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
