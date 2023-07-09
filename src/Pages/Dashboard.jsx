import { Container, useMediaQuery } from "@mui/material";
import { useState } from "react";

import MainNav from "../Components/MainNav";
import MainMenu from "../Components/MainMenu";

import { Outlet } from "react-router-dom";

const Dashboard = () => {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const mobileScreen = useMediaQuery('(max-width: 470px)');
	
    return (
		<>
			<MainNav openMenu={e=>setSideMenuOpen(true)}/>
			<MainMenu open={sideMenuOpen} setOpen={setSideMenuOpen} />
			<Container sx={{pt:mobileScreen ? 2 : 10}}>
				<Outlet />
			</Container>
		</>
    );
}

export default Dashboard;