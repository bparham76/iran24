import axios from 'axios';
import { useContext, createContext, useState } from 'react';

import Login from './Pages/Login';

const AuthContext = createContext();

const AUTH_STATE = true;

let AuthToken = '';

axios.defaults.baseURL = 'http://127.0.0.1:8000/i24p';
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + AuthToken;
axios.defaults.headers.common['Content-Type'] =
	'application/x-www-form-urlencoded';

/*
  user type: admin, colleague, enduser
*/

const AuthProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState({
		name: 'پرهام',
		username: 'bparham76',
		type: 'admin',
	});

	return (
		<AuthContext.Provider value={{ userInfo }}>
			{AUTH_STATE ? children : <Login />}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

export const validateSession = () => AUTH_STATE;

export const useUserInfo = () => useContext(AuthContext).userInfo;
