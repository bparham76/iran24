import { TextField } from '@mui/material';
import FormDialogue from './UI/FormDialogue';

const CreateUser = ({ open, onClose, isColleague }) => {
	const handleSubmit = () => {};

	return (
		<FormDialogue
			open={open}
			title={`ایجاد حساب ${isColleague ? 'همکار' : 'کاربر'} جدید`}
			onClose={onClose}
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
	);
};

export default CreateUser;
