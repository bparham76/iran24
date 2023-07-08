import { Typography, Box, IconButton, AppBar, Toolbar, useScrollTrigger, useMediaQuery } from "@mui/material"
import { Menu, AccountCircle } from "@mui/icons-material";

const MainNav = ({openMenu}) => {
    const scroll = useScrollTrigger();
    const mobileScreen = useMediaQuery('(max-width: 470px)');
    const TXT_COLOR = 'blue';

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
                <Box sx={{flexGrow:1}}></Box>
                <Box sx={{display:'flex'}}>
                    <IconButton sx={{borderRadius: 1, color: mobileScreen ? 'white' : scroll ? 'white' : TXT_COLOR}}>
                        <Typography ml={1}>خوش آمدی چیز جان</Typography>
                        <AccountCircle/>
                    </IconButton>
                </Box>
            </Toolbar>
            {/* <Box display='flex' p={1}>
                <IconButton onClick={openMenu} sx={{
                    color: mobileScreen ? 'white' : scroll ? 'white' : TXT_COLOR
                }}>
                    <Menu />
                </IconButton>
            </Box> */}
        </AppBar>
    )
}

export default MainNav