import {
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	TextField,
	Box,
	Button,
} from '@mui/material';

const CreateUser = ({ open, onClose, isColleague }) => {
	const handleSubmit = () => {};

	return (
		<Dialog
			PaperProps={{
				sx: { borderRadius: '20px' },
			}}
			open={open}
			onClose={onClose}>
			<DialogTitle>
				ایجاد حساب {isColleague ? 'همکار' : 'کاربر'} جدید
			</DialogTitle>
			<DialogContent dividers>
				<Box
					sx={{
						px: 2,
						display: 'flex',
						flexDirection: 'column',
						gap: 1,
					}}>
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
				</Box>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>انصراف</Button>
				<Button onClick={handleSubmit}>تایید</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CreateUser;
