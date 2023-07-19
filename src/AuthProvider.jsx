import axios from 'axios';
import { useContext, createContext, useState, useEffect } from 'react';

import Login from './Pages/Login';
import Swal from 'sweetalert2';

const AuthContext = createContext();

/*
  user type: admin, colleague, enduser
*/

const AuthProvider = ({ children }) => {
	axios.defaults.baseURL = 'http://127.0.0.1:8000/i24p';
	axios.defaults.headers.common.Accept = 'application/json';
	axios.defaults.headers.common['Content-Type'] =
		'application/x-www-form-urlencoded';

	const [firstLoad, setFirstLoad] = useState(true);
	const [authState, setAuthState] = useState(false);
	const [userInfo, setUserInfo] = useState({});

	const logout = async () => {
		try {
			await axios.post('logout');
		} catch {}
		axios.defaults.headers.common['Authorization'] = '';
		setAuthState(false);
		setUserInfo({});
		sessionStorage.clear();
	};

	const login = ({ user_info, token }) => {
		sessionStorage.setItem('userInfo', JSON.stringify(user_info));
		sessionStorage.setItem('token', token);
		setUserInfo(user_info);
		axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
		setAuthState(true);
	};

	useEffect(() => {
		if (firstLoad) {
			let _token = sessionStorage.getItem('token');
			let _userInfo = sessionStorage.getItem('userInfo');

			if (_token !== null && _userInfo !== null) {
				setUserInfo(JSON.parse(_userInfo));
				setAuthState(true);
				axios.defaults.headers.common['Authorization'] =
					'Bearer ' + _token;
			}
			setFirstLoad(false);
		}
	}, [firstLoad]);

	return (
		<AuthContext.Provider value={{ userInfo, login, logout }}>
			{authState ? children : <Login />}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

export const useValidateSession = () => useContext(AuthContext).login;

export const useInvalidateSession = () => useContext(AuthContext).logout;

export const useUserInfo = () => useContext(AuthContext).userInfo;
