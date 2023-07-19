import { Table, TableBody, TableRow, TableCell } from '@mui/material';
import { Link } from 'react-router-dom';

const PersonalInfo = ({ data, user = false }) => {
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
					{user && (
						<TableRow>
							<TableCell style={{ fontWeight: 'bold' }}>
								ساخته شده توسط
							</TableCell>
							<TableCell>
								<Link
									to={
										'/colleagues/detail/' +
										data.created_by.id
									}>
									{data.created_by.first_name +
										' ' +
										data.created_by.last_name}
								</Link>
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</>
	);
};

export default PersonalInfo;
