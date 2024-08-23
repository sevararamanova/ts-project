import { Outlet } from 'react-router-dom';
import logo from '../../images/Logo.png';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <aside className="w-72 bg-gray-900 text-white p-6 shadow-lg">
        <img className="text-4xl font-bold mb-8" src={logo}/>
        <nav>
          <ul className="space-y-4">
            <li>
              <a 
                href="/dashboard/create" 
                className="block py-3 px-5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-transform transform hover:scale-105"
              >
                Create
              </a>
            </li>
            <li>
              <a 
                href="/dashboard/users" 
                className="block py-3 px-5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-transform transform hover:scale-105"
              >
               Users
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <div >
          
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
