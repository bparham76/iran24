import {Paper, Box, Typography, TextField, Button} from '@mui/material'

const Login = () => {
  return (
    <Box sx={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:'100vw',
      height: '100vh'
    }}>
      <Paper sx={{
        borderRadius: 5,
        p: 5,
        gap: 1,
        display:'flex',
        flexDirection:'column'
      }}>
        <Typography variant='h4' textAlign='center'>ورود به پنل</Typography>
        <TextField variant='outlined' title='نام کاربری' label='نام کاربری'/>
        <TextField variant='outlined' title='رمز عبور'/>
        <Button title='ورود' variant='contained'>ورود</Button>
      </Paper>
    </Box>
  )
}

export default Login