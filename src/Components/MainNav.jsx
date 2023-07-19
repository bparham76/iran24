import {
	Typography,
	Box,
	IconButton,
	AppBar,
	Toolbar,
	useMediaQuery,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import { useInvalidateSession } from '../AuthProvider';

const MainNav = ({ openMenu }) => {
	const logout = useInvalidateSession();
	const mobileScreen = useMediaQuery('(max-width: 470px)');

	return (
		<AppBar
			sx={{
				backgroundColor: 'navyblue',
				boxShadow: 'none',
				color: 'white',
				top: 0,
			}}
			position='fixed'>
			<Toolbar>
				{mobileScreen && (
					<IconButton
						onClick={openMenu}
						sx={{
							color: 'white',
						}}>
						<Menu />
					</IconButton>
				)}
				<Box sx={{ flexGrow: 1 }}>
					<Typography
						variant='h6'
						padding='0 20px 0 0'>
						ایران 24
					</Typography>
				</Box>
				<IconButton
					sx={{ borderRadius: 1, color: 'white' }}
					onClick={logout}>
					<PowerSettingsNewIcon />
					<Typography ml={1}>خروج</Typography>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default MainNav;
