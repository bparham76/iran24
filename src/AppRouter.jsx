import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useUserInfo } from './AuthProvider';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';

import { useAdminRoutes, useColleagueRoutes } from './AppRoutes';

const AppRouter = () => {
	const userInfo = useUserInfo();

	const AdminRoutes = useAdminRoutes();
	const ColleagueRoutes = useColleagueRoutes();

	const Routes = createBrowserRouter([
		{
			path: '/',
			element: <Dashboard />,
			children: userInfo.type == 'admin' ? AdminRoutes : ColleagueRoutes,
		},
		{
			path: 'login',
			element: <Login />,
		},
	]);

	return <RouterProvider router={Routes} />;
};

export default AppRouter;
