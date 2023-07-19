import { useState, useEffect } from 'react';
import { Paper, Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useValidateSession } from '../AuthProvider';

const Login = () => {
	const login = useValidateSession();

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
		else if (credentials.password.trim().length != 4)
			setFormError({ ...formError, password: true });
		else setValidate(true);
	};

	useEffect(() => {
		setFormError({ username: false, password: false });
	}, [credentials]);

	const fetchData = async () => {
		try {
			const response = await axios.post('login', {
				phone: credentials.username,
				password: credentials.password,
			});

			if (response.status == 200) {
				login({
					user_info: response.data.user,
					token: response.data.token,
				});
			}
		} catch (e) {
			Swal.fire('خطا');
		}
	};

	useEffect(() => {
		if (validate) {
			setValidate(false);
			//fetch data from server
			fetchData();
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
					onChange={(e) =>
						e.target.value.length < 12 &&
						/^(\s*|\d+)$/.test(e.target.value) &&
						setUsername(e.target.value.trim())
					}
					value={credentials.username}
					error={formError.username}
					required
					variant='outlined'
					title='تلفن همراه'
					label='تلفن همراه'
				/>
				<TextField
					onChange={(e) =>
						e.target.value.length < 5 &&
						/^(\s*|\d+)$/.test(e.target.value) &&
						setPassword(e.target.value.trim())
					}
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
