import { NavLink } from "react-router-dom"
import KeycloakService from "../../services/KeycloakService"

const NavbarUserMenu = () => {

	const username = KeycloakService.getUsername()
	const handleLogoutClick = () => {
		if (window.confirm('Are you sure?')) {
			KeycloakService.doLogout()
		}
	}

	return (
		<ul className="NavbarMenu NavbarMenuRight">
			<li className="NavbarMenuItem">
				<NavLink activeClassName="NavbarActive" to="/dashboard">Dashboard</NavLink>
			</li>
			<li className="NavbarMenuItem">
				<NavLink activeClassName="NavbarActive" to="/profile">
					Welcome, {username}
				</NavLink>
			</li>
			<li className="NavbarMenuItem">
				<button onClick={handleLogoutClick}>Logout</button>
			</li>
		</ul>
	)
}
export default NavbarUserMenu