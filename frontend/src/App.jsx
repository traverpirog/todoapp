import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth from "./pages/Auth.jsx";
import Register from "./pages/Register.jsx";

const App = () => {
	const [isAuth, setIsAuth] = useState(false);
	return (
		<BrowserRouter>
			<Routes>
				{isAuth ? (
					<Route path={"/"} element={<Auth />} />
				) : (
					<>
						<Route path={"/"} element={<Auth />} />
						<Route path={"/register"} element={<Register />} />
					</>
				)}
            </Routes>
		</BrowserRouter>
	);
};

export default App;
