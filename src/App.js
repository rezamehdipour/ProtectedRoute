import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

// Redux
import { useSelector } from "react-redux";

// Hooks
import useUpdateEffect from "./hooks/useUpdateEffect";

// Components
import Header from "./components/Header/Header";

// Pages
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Articles from './pages/Articles/Articles';
import Profile from "./pages/Profile/Profile";
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';

// CSS
const mainStyle = {
	paddingTop: '4rem'
}

const App = (props) => {

	return (
		<>
			<Header />
			<main style={mainStyle}>
				<div className="container mx-auto">
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/about" element={<About />} />

						<Route path="/articles" element={<ProtectedRoute component={<Articles />} />} />
						<Route path="/profile" element={<ProtectedRoute component={<Profile />} />} />

						<Route path="/login" element={<Login />} />
						<Route path="/logout" element={<Logout />} />
					</Routes>
				</div>
			</main>
		</>
	);
}

export default App;