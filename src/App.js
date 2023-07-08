import Dashboard from "./Pages/Dashboard";
import AuthProvider from "./AuthProvider";

const App = () => {
    return (<AuthProvider>
      <Dashboard/>
    </AuthProvider>);
}

export default App;