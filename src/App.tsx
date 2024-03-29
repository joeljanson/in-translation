import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

// Import your page components
import Violin1 from "./pages/Violin1";
/* import Violin2 from './pages/Violin2';
import Viola from './pages/Viola';
import Cello from './pages/Cello';
import DoubleBass from './pages/DoubleBass'; */

function App() {
	return (
		<HashRouter>
			<div>
				{/* Navigation Links */}
				<nav>
					<Link to="/violin1">Violin 1</Link> |
					<Link to="/violin2">Violin 2</Link> |<Link to="/viola">Viola</Link> |
					<Link to="/cello">Cello</Link> |
					<Link to="/doublebass">Double Bass</Link>
				</nav>

				{/* Route Configuration */}
				<Routes>
					<Route path="/violin1" element={<Violin1 />} />
					{/* <Route path="/violin2" element={<Violin2 />} />
          <Route path="/viola" element={<Viola />} />
          <Route path="/cello" element={<Cello />} />
          <Route path="/doublebass" element={<DoubleBass />} /> */}
				</Routes>
			</div>
		</HashRouter>
	);
}

export default App;
