import AuthProvider from "./AuthProvider";

import AppRouter from "./AppRouter";
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

    const theme = createTheme(themeConfig);

    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <RTL>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </RTL>
    </ThemeProvider>;
}

export default App;