//Admin Pages

import { Home as AdminHome } from './Pages/Admin/Home';
// import { Statistics as AdminStats } from './Pages/Admin/Statistics';
import { Colleagues } from './Pages/Admin/Colleagues';
import { EndUsers } from './Pages/Admin/EndUsers';
import { Settings } from './Pages/Admin/Settings';
// import { Messages } from './Pages/Admin/Messages';
import { TlgBot } from './Pages/Admin/TlgBot';
import ColleagueDetails from './Pages/Admin/ColleagueDetails';
import EndUserDetails from './Pages/Admin/EndUserDetails';
import ColleagueFinancialReport from './Pages/Admin/ColleagueFinancialReport';
import ColleagueUsersReport from './Pages/Admin/ColleagueUsersReport';
import UserFinancialReport from './Pages/Admin/UserFinancialReport';
import UserConsumeReport from './Pages/Admin/UserConsumeReport';

//Colleague pages
import { Home as ColleagueHome } from './Pages/Home';

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
		title: '',
		element: <ColleagueDetails />,
	},
	{
		path: 'colleagues/detail/:id/financial',
		title: '',
		element: <ColleagueFinancialReport />,
	},
	{
		path: 'colleagues/detail/:id/users',
		title: '',
		element: <ColleagueUsersReport />,
	},
	{
		path: 'endusers',
		title: 'کاربران',
		element: <EndUsers />,
	},
	{
		path: 'endusers/detail/:id',
		title: '',
		element: <EndUserDetails />,
	},
	{
		path: 'endusers/detail/:id/financial',
		title: '',
		element: <UserFinancialReport />,
	},
	{
		path: 'endusers/detail/:id/consume',
		title: '',
		element: <UserConsumeReport />,
	},
	// {
	// 	path: 'messages',
	// 	title: 'پیام ها',
	// 	element: <Messages />,
	// },
	// {
	// 	path: 'bot',
	// 	title: 'ربات تلگرام',
	// 	element: <TlgBot />,
	// },
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
	{
		path: '/',
		title: 'صفحه اصلی',
		element: <ColleagueHome />,
	},
	{
		path: '/',
		title: '',
		element: <h1>Colleague Home</h1>,
	},
];
