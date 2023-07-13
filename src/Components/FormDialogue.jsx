import {
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	Box,
	Button,
} from '@mui/material';

const FormDialogue = ({ title, open, onClose, handleSubmit, children }) => {
	return (
		<Dialog
			PaperProps={{
				sx: { borderRadius: '20px' },
			}}
			open={open}
			onClose={(e, r) => {
				if (r != 'backdropClick') onClose();
			}}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent dividers>
				<Box
					sx={{
						px: 2,
						display: 'flex',
						flexDirection: 'column',
						gap: 1,
					}}>
					{children}
				</Box>
			</DialogContent>
			<DialogActions>
				<Button
					sx={{ px: 2 }}
					onClick={onClose}>
					انصراف
				</Button>
				<Button
					sx={{ px: 2 }}
					onClick={handleSubmit}>
					تایید
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default FormDialogue;
