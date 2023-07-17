import { useState } from 'react';
import {
	FormControl,
	FormControlLabel,
	Select,
	MenuItem,
	ListSubheader,
	InputLabel,
	Checkbox,
	Button,
	useMediaQuery,
} from '@mui/material';
import FormDialogue from './UI/FormDialogue';

const CreateTestConnection = () => {
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
				ساخت کانکشن تست
			</Button>
			<FormDialogue
				open={show}
				title='ساخت کانکشن تست'
				onClose={(e) => setShow(false)}
				handleSubmit={handleSubmit}>
				<FormControl>
					<InputLabel id='duration'>مدت زمان</InputLabel>
					<Select
						labelId='duration'
						label='مدت زمان'>
						<ListSubheader>تک کاربره</ListSubheader>
						<MenuItem>یک روز</MenuItem>
						<MenuItem>سه روز</MenuItem>
						<MenuItem>یک هفته</MenuItem>
						<ListSubheader>دو کاربره</ListSubheader>
						<MenuItem>یک روز</MenuItem>
						<MenuItem>سه روز</MenuItem>
						<MenuItem>یک هفته</MenuItem>
						<ListSubheader>سه کاربره</ListSubheader>
						<MenuItem>یک روز</MenuItem>
						<MenuItem>سه روز</MenuItem>
						<MenuItem>یک هفته</MenuItem>
					</Select>
					<FormControlLabel
						label='ip ثابت'
						control={<Checkbox />}
					/>
				</FormControl>
			</FormDialogue>
		</>
	);
};

export default CreateTestConnection;
