import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import { Route, Routes, Routes } from "react-router-dom";

function App() {
	const prefersColorQuery = window.matchMedia("(prefers-color-scheme: dark)"),
		changeTheme = (e) => {
			document.body.classList[e.matches ? "add" : "remove"]("dark");
		};

	changeTheme(prefersColorQuery);
	prefersColorQuery.addEventListener("change", changeTheme);

	return (
		<>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Portfolio" element={<Portfolio />} />
				<Route path="/Blog" element={<Blog />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
		</>
	);
}

export default App;
