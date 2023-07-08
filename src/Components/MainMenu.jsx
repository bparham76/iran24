import { Box, Drawer, Button, Stack, useMediaQuery } from "@mui/material";

const MainMenu = ({open, setOpen}) => {

    const mobileScreen = useMediaQuery('(max-width: 470px)'); 
    const MenuSpan = mobileScreen ? '80vh' : '300px';

    const MenuItem = ()=><Button sx={{p:2}} onClick={e=>setOpen(false)}>Salam</Button>

    return (
        <Drawer anchor={mobileScreen ? 'bottom' : 'right'} open={open} onClose={e=>setOpen(false)}>
            <Box sx={{
                width: mobileScreen ? '100vw' : MenuSpan,
                height: !mobileScreen ? '100vh' : MenuSpan,
            }}>
                <Stack>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                </Stack>
            </Box>
        </Drawer>
    )
}

export default MainMenu