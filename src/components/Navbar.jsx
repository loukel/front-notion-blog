import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar d-flex container navbar-dark text-center justify-content-center">
			<Link to="/" className="brand-link">
        Louis Kelly
			</Link>
		</nav>
	)
}

export default Navbar
