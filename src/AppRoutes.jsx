//Admin Pages

import { Home as AdminHome } from './Pages/Admin/Home';
// import { Statistics as AdminStats } from './Pages/Admin/Statistics';
import { Colleagues } from './Pages/Admin/Colleagues';
import { EndUsers } from './Pages/Admin/EndUsers';
import { Settings } from './Pages/Admin/Settings';
// import { Messages } from './Pages/Admin/Messages';
import { TlgBot } from './Pages/Admin/TlgBot';
import ColleagueDetails from './Pages/Admin/ColleagueDetails';

//Colleague pages

export const useAdminRoutes = () => [
	{
		path: '/',
		title: 'صفحه اصلی',
		element: <AdminHome />,
	},
	// {
	// 	path: 'stats',
	// 	title: 'آمار',
	// 	element: <AdminStats />,
	// },
	{
		path: 'colleagues',
		title: 'همکاران',
		element: <Colleagues />,
	},
	{
		path: 'colleagues/detail/:id',
		title: 'همکاران',
		element: <ColleagueDetails />,
	},
	{
		path: 'endusers',
		title: 'کاربران',
		element: <EndUsers />,
	},
	// {
	// 	path: 'messages',
	// 	title: 'پیام ها',
	// 	element: <Messages />,
	// },
	{
		path: 'bot',
		title: 'ربات تلگرام',
		element: <TlgBot />,
	},
	{
		path: 'settings',
		title: 'تنظیمات',
		element: <Settings />,
	},
];

export const useColleagueRoutes = () => [
	{
		path: '/',
		title: '',
		element: <h1>Colleague Home</h1>,
	},
];
