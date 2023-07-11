import { Typography, Box, IconButton, AppBar, Toolbar, useMediaQuery } from "@mui/material"
import { Menu, AccountCircle } from "@mui/icons-material";

import { useUserInfo } from "../AuthProvider";

const MainNav = ({openMenu}) => {
    const mobileScreen = useMediaQuery('(max-width: 470px)');

    const userInfo = useUserInfo();

    return (
        <AppBar sx={{
            backgroundColor: 'navyblue',
            boxShadow: 'none',
            color: 'white',
            top: 0
        }}
        position="fixed"
        >
            <Toolbar>
                {mobileScreen && 
                <IconButton onClick={openMenu} sx={{
                    color: 'white',
                }}>
                    <Menu />
                </IconButton>}
                <Box sx={{flexGrow:1}}>
                    <Typography variant='h6' padding='0 20px 0 0'>
                        ایران 24
                    </Typography>
                </Box>
                <Box sx={{display:'flex'}}>
                    <IconButton sx={{borderRadius: 1, color: 'white'}}>
                        <Typography ml={1}>خوش آمدی {userInfo.name} جان</Typography>
                        <AccountCircle/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default MainNav