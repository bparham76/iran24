import {
	Box,
	Paper,
	Drawer,
	Button,
	Stack,
	useMediaQuery,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAdminRoutes, useColleagueRoutes } from '../AppRoutes';
import { useUserInfo } from '../AuthProvider';

const MainMenu = ({ open, setOpen }) => {
	const mobileScreen = useMediaQuery('(max-width: 470px)');

	const navigate = useNavigate();

	const userInfo = useUserInfo();

	const AdminRoutes = useAdminRoutes();
	const ColleagueRoutes = useColleagueRoutes();

	let menuList = [];

	if (userInfo.type == 'admin') {
		menuList = AdminRoutes.map((route) => {
			return { to: route.path, title: route.title };
		});
	} else {
		menuList = ColleagueRoutes.map((route) => {
			return { to: route.path, title: route.title };
		});
	}

	const MenuItem = ({ to, title }) => (
		<Button
			sx={{ p: 2 }}
			onClick={(e) => {
				setOpen(false);
				navigate(to);
			}}>
			{title}
		</Button>
	);

	return mobileScreen ? (
		<Drawer
			anchor='left'
			SlideProps={{ direction: 'left' }}
			open={open}
			onClose={(e) => setOpen(false)}
			sx={{ right: 0 }}>
			<Box
				sx={{
					width: '60vw',
					height: '100vh',
					padding: '10px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Stack sx={{ width: '100%' }}>
					{menuList.map((item, index) => (
						<MenuItem
							key={index}
							to={item.to}
							title={item.title}
						/>
					))}
				</Stack>
			</Box>
		</Drawer>
	) : (
		<Paper
			sx={{
				height: 'auto',
				position: 'sticky',
				top: '15%',
			}}>
			<Stack sx={{ width: '200px' }}>
				{menuList.map((item, index) => (
					<MenuItem
						key={index}
						to={item.to}
						title={item.title}
					/>
				))}
			</Stack>
		</Paper>
	);
};

export default MainMenu;
