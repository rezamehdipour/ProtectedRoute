import { Link, useLocation } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

// Hooks
import useAuthenticated from "../../hooks/useAuthenticated";

// CSS
import "./Header.scss";

const Header = (props) => {
	const location = useLocation();
	const currentPath = location.pathname;
	const authenticated = useAuthenticated();

	return (
		<header className="HeaderComponent">
			<div className="container mx-auto">
				<nav>
					<ul>
						<li>
							<Link to="/" className={currentPath === "/" ? "active" : ""}>
								Home
							</Link>
						</li>
						<li>
							<Link to="/about" className={currentPath === "/about" ? "active" : ""}>
								About
							</Link>
						</li>
						<li>
							<Link to="/articles" className={currentPath === "/articles" ? "active" : ""}>
								Articles&nbsp;
								{authenticated ? "✅" : "🔒"}
							</Link>
						</li>
						<li>
							<Link to="/profile" className={currentPath === "/profile" ? "active" : ""}>
								Profile&nbsp;
								{authenticated ? "✅" : "🔒"}
							</Link>
						</li>
						<li>
							{authenticated ? (
								<Link to="/logout" className="logout">
									Logout
								</Link>
							) : (
								<Link to="/login" className="login">
									Login
								</Link>
							)}
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
