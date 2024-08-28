
import { useRoutes } from 'react-router-dom';
import Home from './home/Home';
import AuthLayout from '../routes/auth/AuthLayout';
import DinamicPage from '../routes/dinamicPage/DinamicPage';
import Dashboard from '../routes/dashboard/Dashboard';
import Create from '../routes/dashboard/create/Create';
import SignIn from './auth/sign-in/SignIn';
import SignUp from './auth/sign-up/SignUp';
import LikedCarsPage from '../routes/likedPage/LikedPage';
import Otp from '../routes/auth/otp/Otp';

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
          path: 'signup',
          element: <SignUp />,
        },
        {
          path: 'otp',
          element: <Otp />,
        },
        {
          path: 'signin',
          element: <SignIn />,
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
    {
      path: 'likedPage',
      element: <LikedCarsPage />, 
    },
  ]);

  return routes;
};

export default RouteController;
