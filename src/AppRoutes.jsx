import { Home as AdminHome } from './Pages/Admin/Home';

export const useAdminRoutes = () => [
	{
		path: '/',
		element: <AdminHome />,
	},
	{
		path: 'hello',
		element: <h1>Hello</h1>,
	},
];

export const useColleagueRoutes = () => [
	{
		path: '/',
		element: <h1>Colleague Home</h1>,
	},
];
