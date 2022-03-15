import { Redirect } from "react-router-dom"
import KeycloakService from "../../services/KeycloakService"

const Login = () => {

	if (KeycloakService.isLoggedIn()) {
		return <Redirect to="/dashboard" />
	}

	const handleLoginClick = () => {
		KeycloakService.doLogin()
	}

	return (
		<main>
			<h1>Welcome to the Keycloak Demo</h1>
			<button onClick={ handleLoginClick }>Login with Keycloak</button>
		</main>
	)
}
export default Login