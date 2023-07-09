import { Box, Drawer, Button, Stack, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MainMenu = ({open, setOpen}) => {

    const mobileScreen = useMediaQuery('(max-width: 470px)'); 
    const MenuSpan = mobileScreen ? '80vh' : '300px';

    const navigate = useNavigate();

    const MenuItem = ({to, title})=><Button sx={{p:2}} onClick={e=>{setOpen(false); navigate(to)}}>{title}</Button>

    const menuList = [
        {to:'/', title:'صفحه اصلی'},
        {to:'/hello', title:'خلاصه آمار'},
        {to:'/test', title:'کاربران'},
        {to:'/profiles', title:'پروفایل'},
        {to:'/exit', title:'خروج'},
    ];

    return (
        <Drawer anchor={mobileScreen ? 'bottom' : 'right'} open={open} onClose={e=>setOpen(false)}>
            <Box sx={{
                width: mobileScreen ? '100vw' : MenuSpan,
                height: !mobileScreen ? '100vh' : 'auto',
                padding: '10px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Stack sx={{width:'100%'}}>
                    {menuList.map(item=><MenuItem to={item.to} title={item.title}/>)}
                </Stack>
            </Box>
        </Drawer>
    )
}

export default MainMenu