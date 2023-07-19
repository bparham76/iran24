import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useUserInfo } from './AuthProvider';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';

import { useAdminRoutes, useColleagueRoutes } from './AppRoutes';

const AppRouter = () => {
	const userInfo = useUserInfo();

	const AdminRoutes = useAdminRoutes();
	const ColleagueRoutes = useColleagueRoutes();

	let routeList = [];

	if (userInfo.type == '0') {
		routeList = AdminRoutes.map((route) => {
			return { path: route.path, element: route.element };
		});
	} else {
		routeList = ColleagueRoutes.map((route) => {
			return { path: route.path, element: route.element };
		});
	}

	const Routes = createBrowserRouter([
		{
			path: '/',
			element: <Dashboard />,
			children: routeList,
			errorElement: <NotFound />,
		},
	]);

	return <RouterProvider router={Routes} />;
};

export default AppRouter;
