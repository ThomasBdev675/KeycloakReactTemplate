import withKeycloak from "../../hoc/withKeycloak"
import KeycloakService from "../../services/KeycloakService"

const Dashboard = () => {

	const username = KeycloakService.getUsername()

	return (
		<main>
			<h1>Welcome to the Dashboard, { username }</h1>
			<p>This is where all the good stuff will happen!</p>
		</main>
	)
}
export default withKeycloak(Dashboard)