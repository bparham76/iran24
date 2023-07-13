import { Home as AdminHome } from './Pages/Admin/Home';

// export const useAdminRoutes = () => {
// 	return {
// 		AdminMenu: [
// 			{
// 				path: '',
// 				title: '',
// 			},
// 		],
// 		AdminRoutes: [
// 			{
// 				path: '/',
// 				element: <AdminHome />,
// 			},
// 			{
// 				path: 'hello',
// 				element: <h1>Hello</h1>,
// 			},
// 		],
// 	};
// };

// export const useColleagueRoutes = () => {
// 	return {
// 		ColleagueMenu: [],
// 		ColleagueRoutes: [],
// 	};
// };

export const useAdminRoutes = () => [
	{
		path: '/',
		title: 'صفحه اصلی',
		element: <AdminHome />,
	},
	{
		path: 'hello',
		title: 'سلام',
		element: <h1>Hello</h1>,
	},
];

export const useColleagueRoutes = () => [
	{
		path: '/',
		title: '',
		element: <h1>Colleague Home</h1>,
	},
];
