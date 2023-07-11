import { Box, Paper, Drawer, Button, Stack, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MainMenu = ({open, setOpen}) => {

    const mobileScreen = useMediaQuery('(max-width: 470px)'); 

    const navigate = useNavigate();

    const MenuItem = ({to, title})=><Button sx={{p:2}} onClick={e=>{setOpen(false); navigate(to)}}>{title}</Button>

    const menuList = [
        {to:'/', title:'صفحه اصلی'},
        {to:'/hello', title:'خلاصه آمار'},
        {to:'/test', title:'کاربران'},
        {to:'/profiles', title:'پروفایل'},
        {to:'/exit', title:'خروج'},
    ];

    return mobileScreen ?
        <Drawer anchor="right" open={open} onClose={e=>setOpen(false)}>
            <Box sx={{
                width: '60vw',
                height: '100vh',
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
        :
        <Paper sx={{
            height: 'auto',
            position:'sticky',
            top: '15%'
        }}>
            <Stack sx={{width:'200px'}}>
                    {menuList.map(item=><MenuItem to={item.to} title={item.title}/>)}
            </Stack>
        </Paper>
}

export default MainMenu