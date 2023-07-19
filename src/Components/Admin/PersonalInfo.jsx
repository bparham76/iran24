import { Table, TableBody, TableRow, TableCell } from '@mui/material';

const PersonalInfo = ({ data }) => {
	return (
		<>
			<Table>
				<TableBody>
					<TableRow>
						<TableCell style={{ fontWeight: 'bold' }}>
							نام
						</TableCell>
						<TableCell>{data.first_name}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell style={{ fontWeight: 'bold' }}>
							نام خانوادگی
						</TableCell>
						<TableCell>{data.last_name}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell style={{ fontWeight: 'bold' }}>
							تلفن
						</TableCell>
						<TableCell>{data.phone}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</>
	);
};

export default PersonalInfo;
