import withKeycloak from "../../hoc/withKeycloak"
import KeycloakService from "../../services/KeycloakService"

const Profile = () => {
	
	const username = KeycloakService.getUsername()

	return (
		<main>
			<h1>Welcome to your profile, { username }</h1>
			<p>👋 Nice to see you here!</p>
		</main>
	)
}
export default withKeycloak(Profile)