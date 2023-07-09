import AuthProvider from "./AuthProvider";

import Routes from "./Pages/DashboardRouter";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import themeConfig from './ThemeConfig.json';

const App = () => {

    const theme = createTheme(themeConfig);

    return <ThemeProvider theme={theme}>
			<CssBaseline />
      <AuthProvider>
        <RouterProvider router={Routes} />
      </AuthProvider>
    </ThemeProvider>;
}

export default App;