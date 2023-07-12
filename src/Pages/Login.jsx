import { useState, useEffect } from 'react';
import { Paper, Box, Typography, TextField, Button } from '@mui/material';

const Login = () => {
	const [credentials, setCredentials] = useState({
		username: '',
		password: '',
	});

	const [formError, setFormError] = useState({
		username: false,
		password: false,
	});

	const [validate, setValidate] = useState(false);

	const setUsername = (value) =>
		setCredentials({ ...credentials, username: value });

	const setPassword = (value) =>
		setCredentials({ ...credentials, password: value });

	const handleClick = () => {
		if (credentials.username.trim().length == 0)
			setFormError({ ...formError, username: true });
		else if (credentials.password.trim().length == 0)
			setFormError({ ...formError, password: true });
		else setValidate(true);
	};

	useEffect(() => {
		setFormError({ username: false, password: false });
	}, [credentials]);

	useEffect(() => {
		if (validate) {
			setValidate(false);
			//fetch data from server
		}
	}, [validate]);

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100vw',
				height: '100vh',
			}}>
			<Paper
				sx={{
					borderRadius: 5,
					p: 5,
					gap: 1,
					display: 'flex',
					flexDirection: 'column',
				}}>
				<Typography
					sx={{ mb: 2 }}
					variant='h4'
					textAlign='center'>
					ورود به پنل
				</Typography>
				<TextField
					onChange={(e) => setUsername(e.target.value)}
					value={credentials.username}
					error={formError.username}
					required
					variant='outlined'
					title='نام کاربری'
					label='نام کاربری'
				/>
				<TextField
					onChange={(e) => setPassword(e.target.value)}
					value={credentials.password}
					error={formError.password}
					required
					type='password'
					variant='outlined'
					title='رمز عبور'
					label='رمز عبور'
				/>
				<Button
					onClick={handleClick}
					sx={{ py: 2 }}
					title='ورود'
					variant='contained'>
					ورود
				</Button>
			</Paper>
		</Box>
	);
};

export default Login;
