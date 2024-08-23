
import { useRoutes } from 'react-router-dom';
import Home from './home/Home';
import AuthLayout from '../routes/auth/AuthLayout';
import DinamicPage from '../routes/dinamicPage/DinamicPage';
import Dashboard from '../routes/dashboard/Dashboard';
import Create from '../routes/dashboard/create/Create';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';

const RouteController = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'auth',
      element: <AuthLayout />,
      children: [
        {
          path: 'signin',
          element: <SignIn />,
        },
        {
          path: 'signup',
          element: <SignUp />,
        },
      ],
    },
    {
      path: 'dashboard',
      element: <Dashboard />,
      children: [
        {
          path: 'create',
          element: <Create />,
        },
      ],
    },
    {
      path: 'rent/:carId',
      element: <DinamicPage />,
    },
  ]);

  return routes;
};

export default RouteController;
