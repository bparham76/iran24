import { useState } from 'react';
import { TextField, Button, useMediaQuery } from '@mui/material';
import FormDialogue from './UI/FormDialogue';

const CreateUser = () => {
	const mobileScreen = useMediaQuery('(max-width: 470px)');
	const [show, setShow] = useState(false);
	const handleSubmit = () => {};

	return (
		<>
			<Button
				onClick={(e) => setShow(true)}
				fullWidth={mobileScreen}
				variant='contained'
				sx={{ mb: 1, mr: 1 }}>
				افزودن کاربر جدید
			</Button>
			<FormDialogue
				open={show}
				title='افزودن کاربر جدید'
				onClose={(e) => setShow(false)}
				handleSubmit={handleSubmit}>
				<TextField
					variant='outlined'
					label='نام'
				/>
				<TextField
					variant='outlined'
					label='نام خانوادگی'
				/>
				<TextField
					variant='outlined'
					label='شماره تلفن'
				/>
				<TextField
					variant='outlined'
					label='رمز عبور'
				/>
			</FormDialogue>
		</>
	);
};

export default CreateUser;
