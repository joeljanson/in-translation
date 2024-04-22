import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	HashRouter,
	useMatch,
	Routes,
	Route,
	Link,
	LinkProps,
	To,
} from "react-router-dom";

// Import your page components
import Violin1 from "./pages/Violin1";
import Violin2 from "./pages/Violin2";
import Viola from "./pages/Viola";
import Cello from "./pages/Cello";
import DoubleBass from "./pages/DoubleBass";
import About from "./pages/About";

/* import Violin2 from './pages/Violin2';
import Viola from './pages/Viola';
import Cello from './pages/Cello';
import DoubleBass from './pages/DoubleBass'; */

interface NavLinkProps extends LinkProps {
	to: To; // 'To' is the type used by React Router for the 'to' prop in Link components
	children: React.ReactNode;
}

// Custom NavLink component
const NavLink: React.FC<NavLinkProps> = ({ to, children, ...props }) => {
	const match = useMatch(typeof to === "string" ? to : to.pathname!);

	const activeStyle = {
		textDecoration: "underline",
		color: "black",
	};

	return (
		<Link to={to} style={match ? activeStyle : {}} {...props}>
			{children}
		</Link>
	);
};

function App() {
	return (
		<HashRouter>
			<div className="container">
				{/* Navigation Links */}
				<nav className="navbar navbar-expand-lg d-flex flex-column flex-lg-row justify-content-center">
					{/* Apply 'mx-2' or 'mx-lg-3' to adjust spacing on all screen sizes or larger screens only */}
					<NavLink className="nav-link mx-2 mx-lg-3" to="/">
						About
					</NavLink>
					<NavLink className="nav-link mx-2 mx-lg-3" to="/violin1">
						Violin 1
					</NavLink>
					<NavLink className="nav-link mx-2 mx-lg-3" to="/violin2">
						Violin 2
					</NavLink>
					<NavLink className="nav-link mx-2 mx-lg-3" to="/viola">
						Viola
					</NavLink>
					<NavLink className="nav-link mx-2 mx-lg-3" to="/cello">
						Cello
					</NavLink>
					<NavLink className="nav-link mx-2 mx-lg-3" to="/doublebass">
						Kontrabas
					</NavLink>
				</nav>

				{/* Route Configuration */}
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/violin1" element={<Violin1 />} />
					<Route path="/violin2" element={<Violin2 />} />
					<Route path="/viola" element={<Viola />} />
					<Route path="/cello" element={<Cello />} />
					<Route path="/doublebass" element={<DoubleBass />} />
				</Routes>
			</div>
		</HashRouter>
	);
}

export default App;
