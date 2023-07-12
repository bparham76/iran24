import { useContext, createContext, useState } from 'react';

import Login from './Pages/Login';

const AuthContext = createContext();

const AUTH_STATE = true;

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
