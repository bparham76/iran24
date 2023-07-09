import { Typography, Box, IconButton, AppBar, Toolbar, useScrollTrigger, useMediaQuery } from "@mui/material"
import { Menu, AccountCircle } from "@mui/icons-material";

import { useUserInfo } from "../AuthProvider";

const MainNav = ({openMenu}) => {
    const scroll = useScrollTrigger();
    const mobileScreen = useMediaQuery('(max-width: 470px)');
    const TXT_COLOR = 'blue';

    const userInfo = useUserInfo();

    return (
        <AppBar sx={{
            backgroundColor: mobileScreen ? 'navyblue' : !scroll ? 'white' : 'navyblue',
            boxShadow: !scroll && 'none',
            color: mobileScreen ? 'white' : scroll ? 'white' : TXT_COLOR,
            top: mobileScreen ? 'auto' : 0,
            bottom: !mobileScreen ? 'auto' : 0,
        }}
        position="fixed"
        >
            <Toolbar>
                <IconButton onClick={openMenu} sx={{
                    color: mobileScreen ? 'white' : scroll ? 'white' : TXT_COLOR
                }}>
                    <Menu />
                </IconButton>
                <Box sx={{flexGrow:1}}>
                    <Typography variant='h6' padding='0 20px 0 0'>
                        ایران 24
                    </Typography>
                </Box>
                <Box sx={{display:'flex'}}>
                    <IconButton sx={{borderRadius: 1, color: mobileScreen ? 'white' : scroll ? 'white' : TXT_COLOR}}>
                        <Typography ml={1}>خوش آمدی {userInfo.name} جان</Typography>
                        <AccountCircle/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default MainNav