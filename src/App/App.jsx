import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../features/Dashboard/Dashboard";
import Login from "../features/Login/Login";
import Navbar from "../features/Navbar/Navbar";
import Profile from "../features/Profile/Profile";

const App = () => {

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Redirect to="/login" />
				</Route>
				<Route path="/login" component={Login} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/profile" component={Profile} />
			</Switch>
		</BrowserRouter>
	)
}

export default App;
