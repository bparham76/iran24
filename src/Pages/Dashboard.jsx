import { Container, Box, useMediaQuery } from '@mui/material';
import { useState } from 'react';

import MainNav from '../Components/MainNav';
import MainMenu from '../Components/MainMenu';

import { Outlet } from 'react-router-dom';

const Dashboard = () => {
	const mobileScreen = useMediaQuery('(max-width: 470px)');
	const [sideMenuOpen, setSideMenuOpen] = useState(false);

	return (
		<>
			<MainNav openMenu={(e) => setSideMenuOpen(true)} />
			<Container
				sx={{
					pt: 10,
					pb: 10,
					display: 'flex',
					gap: 2,
				}}>
				<Box display={mobileScreen && 'none'}>
					<MainMenu
						open={sideMenuOpen}
						setOpen={setSideMenuOpen}
					/>
				</Box>
				<Outlet />
			</Container>
		</>
	);
};

export default Dashboard;
