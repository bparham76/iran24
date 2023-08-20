import { useState, useEffect } from 'react';
import { TextField, Button, useMediaQuery } from '@mui/material';
import FormDialogue from '../UI/FormDialogue';
import FullscreenLoader from '../UI/FullscreenLoader';
import axios from 'axios';
import Swal from 'sweetalert2';

const CreateColleague = () => {
	const DEFAULT_INFO = {
		first_name: '',
		last_name: '',
		phone: '',
		password: '',
		type: 1,
	};

	const DEFAULT_ERROR = {
		phone: false,
		password: true,
	};

	const mobileScreen = useMediaQuery('(max-width: 470px)');
	const [show, setShow] = useState(false);
	const [loading, isLoading] = useState(false);
	const [info, setInfo] = useState(DEFAULT_INFO);
	const [error, setError] = useState(DEFAULT_ERROR);

	useEffect(() => {
		if (show) return;
		setInfo(DEFAULT_INFO);
		setError(DEFAULT_ERROR);
	}, [show]);

	useEffect(() => {
		setError({ password: false, phone: false });
	}, [info]);

	const handleSubmit = () => {
		if (!/^\d{11}$/.test(info.phone)) setError({ ...error, phone: true });
		else if (!/^\d{4}$/.test(info.password))
			setError({ ...error, password: true });
		else {
			createNewUser();
		}
	};

	const createNewUser = async () => {
		try {
			isLoading(true);
			const response = await axios.post('/user', info);
			if (response.status == 201) {
				isLoading(false);
				Swal.fire({
					title: 'همکار جدید با موفقیت ثبت شد.',
					icon: 'success',
				});
			}
		} catch (e) {
			isLoading(false);
			Swal.fire({
				title: 'خطایی در هنگام ثبت همکار جدید رخ داد.',
				icon: 'error',
			});
		} finally {
			setShow(false);
		}
	};

	return (
		<>
			<Button
				onClick={(e) => setShow(true)}
				fullWidth={mobileScreen}
				variant='contained'
				sx={{ mb: 1, mr: 1 }}>
				افزودن همکار جدید
			</Button>
			<FormDialogue
				open={show}
				title='افزودن همکار جدید'
				onClose={(e) => setShow(false)}
				handleSubmit={handleSubmit}>
				{loading && <FullscreenLoader />}
				<TextField
					variant='outlined'
					label='نام'
					value={info.first_name}
					onChange={(e) =>
						setInfo({ ...info, first_name: e.target.value })
					}
				/>
				<TextField
					variant='outlined'
					label='نام خانوادگی'
					value={info.last_name}
					onChange={(e) =>
						setInfo({ ...info, last_name: e.target.value })
					}
				/>
				<TextField
					variant='outlined'
					label='شماره تلفن'
					value={info.phone}
					error={error.phone}
					helperText={error.phone && 'تلفن همراه باید 11 رقم باشد'}
					onChange={(e) =>
						(/^\d+$/.test(e.target.value) ||
							e.target.value.length == 0) &&
						setInfo({ ...info, phone: e.target.value })
					}
				/>
				<TextField
					variant='outlined'
					label='رمز عبور'
					value={info.password}
					error={error.password}
					helperText={error.password && 'رمز عبور باید 4 رقم باشد'}
					onChange={(e) =>
						(/^\d+$/.test(e.target.value) ||
							e.target.value.length == 0) &&
						setInfo({ ...info, password: e.target.value })
					}
				/>
			</FormDialogue>
		</>
	);
};

export default CreateColleague;
