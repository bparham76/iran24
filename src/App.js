import AuthProvider from "./AuthProvider";

import axios from "axios";

import Routes from "./Pages/DashboardRouter";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import themeConfig from './ThemeConfig.json';

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

// Create rtl cache
const cacheRtl = createCache({
	key: 'muirtl',
	stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props) {
	return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

const App = () => {

	axios.defaults.withCredentials = true;

    const theme = createTheme(themeConfig);

    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <RTL>
            <AuthProvider>
                <RouterProvider router={Routes} />
            </AuthProvider>
        </RTL>
    </ThemeProvider>;
}

export default App;