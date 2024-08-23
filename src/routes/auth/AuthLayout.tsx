import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-sm w-full bg-white rounded-lg shadow-md p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
