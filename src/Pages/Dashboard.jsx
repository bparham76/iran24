import { Container, Box } from "@mui/material";
import { useState } from "react";

import MainNav from "../Components/MainNav";
import MainMenu from "../Components/MainMenu";

import { Outlet } from "react-router-dom";

const Dashboard = () => {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
	
    return (
		<>
			<MainNav openMenu={e=>setSideMenuOpen(true)}/>
			<Container sx={{pt: 10, pb: 10, display:'flex', gap:2}}>
				<Box>
					<MainMenu open={sideMenuOpen} setOpen={setSideMenuOpen} />
				</Box>
				<Outlet />
			</Container>
		</>
    );
}

export default Dashboard;