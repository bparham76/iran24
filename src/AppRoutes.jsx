import { Home as AdminHome } from './Pages/Admin/Home';
import { Statistics as AdminStats } from './Pages/Admin/Statistics';

export const useAdminRoutes = () => [
	{
		path: '/',
		title: 'صفحه اصلی',
		element: <AdminHome />,
	},
	{
		path: 'stats',
		title: 'آمار',
		element: <AdminStats />,
	},
];

export const useColleagueRoutes = () => [
	{
		path: '/',
		title: '',
		element: <h1>Colleague Home</h1>,
	},
];
