// RouteController.jsx
import { useRoutes } from 'react-router-dom';
import Home from './home/Home';
import DinamicPage from '../routes/dinamicPage/DinamicPage'; // RentPage komponentini import qilish

const RouteController = () => {
  return useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'dashboard',
      element: <div>Dashboard</div>
    },
    {
      path: 'rent/:carId', // Dinamik sahifa uchun yo'nalish
      element: <DinamicPage /> // Dinamik sahifa uchun komponent
    }
  ]);
};

export default RouteController;
