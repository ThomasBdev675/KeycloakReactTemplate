import KeycloakService from "../../services/KeycloakService"
import NavbarUserMenu from "./NavbarUserMenu"
import './Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {

	const isLoggedIn = KeycloakService.isLoggedIn()

	return (
		<nav className="Navbar">
			<ul className="NavbarMenu">
				<li className="NavbarMenuItem NavbarBrand">
					<Link to="/dashboard">Keycloak Demo</Link>
				</li>
			</ul>
			{isLoggedIn && <NavbarUserMenu />}
		</nav>
	)
}
export default Navbar