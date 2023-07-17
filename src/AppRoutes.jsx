//Admin Pages

import { Home as AdminHome } from './Pages/Admin/Home';
import { Colleagues } from './Pages/Admin/Colleagues/Colleagues';
import { EndUsers } from './Pages/Admin/Users/EndUsers';
import { Settings } from './Pages/Admin/Settings';
import ColleagueDetails from './Pages/Admin/Colleagues/ColleagueDetails';
import EndUserDetails from './Pages/Admin/Users/EndUserDetails';
import ColleagueFinancialReport from './Pages/Admin/Colleagues/ColleagueFinancialReport';
import ColleagueUsersReport from './Pages/Admin/Colleagues/ColleagueUsersReport';
import UserFinancialReport from './Pages/Admin/Users/UserFinancialReport';
import UserConsumeReport from './Pages/Admin/Users/UserConsumeReport';
// import { Statistics as AdminStats } from './Pages/Admin/Statistics';
// import { Messages } from './Pages/Admin/Messages';
// import { TlgBot } from './Pages/Admin/TlgBot';

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
