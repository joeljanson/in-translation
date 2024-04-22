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
				<nav>
					<NavLink className="navi-link" to="/">
						About
					</NavLink>
					<NavLink className="navi-link" to="/violin1">
						Violin 1
					</NavLink>
					<NavLink className="navi-link" to="/violin2">
						Violin 2
					</NavLink>{" "}
					<NavLink className="navi-link" to="/viola">
						Viola
					</NavLink>
					<NavLink className="navi-link" to="/cello">
						Cello
					</NavLink>
					<NavLink className="navi-link" to="/doublebass">
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
