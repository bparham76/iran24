import CssBaseline from "@mui/material/CssBaseline";
import { Container, useMediaQuery } from "@mui/material";
import { Fragment, useState } from "react";

import MainNav from "../Components/MainNav";
import MainMenu from "../Components/MainMenu";
import DashboardRouter from "./DashboardRouter";

const Dashboard = () => {

  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const mobileScreen = useMediaQuery('(max-width: 470px)');
  
  return (
      <Fragment>
          <CssBaseline />
            <MainNav openMenu={e=>setSideMenuOpen(true)}/>
            <MainMenu open={sideMenuOpen} setOpen={setSideMenuOpen} />
            <Container sx={{pt:mobileScreen ? 2 : 10}}>
                <DashboardRouter />
            </Container>
      </Fragment>
  );
}

export default Dashboard;