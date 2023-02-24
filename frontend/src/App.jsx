import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

const App = () => {
	const [isAuth, setIsAuth] = useState(false);
	return (
		<BrowserRouter>
			<Routes>
				{isAuth ? (
					<Route path={"/"} element={<Login />} />
				) : (
					<>
						<Route path={"/"} element={<Login />} />
						<Route path={"/register"} element={<Register />} />
					</>
				)}
            </Routes>
		</BrowserRouter>
	);
};

export default App;
