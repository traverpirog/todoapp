import { NavLink } from "react-router-dom";

import classes from "../assets/css/Auth.module.css";
import Title from "../components/ui/Title.jsx";
import Input from '../components/ui/Input.jsx'

const Login = () => {
	return (
		<div className={classes.authWrapper}>
			<div className="bg-white p-7">
				<Title>Enter your details</Title>
				<form className="mb-3" onSubmit={e => e.preventDefault()}>
					<Input caption="Login" type="text" placeholder="Ivan" />
					<Input caption="Password" type="password" placeholder="********" />
					<input
						className={classes.submit}
						type="submit"
						value="Sign In"
					/>
				</form>
				<div className="text-center gap-3 flex items-center font-medium before:w-full before:bg-blue-600 before:h-0.5 after:w-full after:bg-blue-600 after:h-0.5">
					<div className="flex gap-1 flex-1 w-full flex-shrink-0">
						or{" "}
						<NavLink
							className="text-blue-600 underline"
							to={"/register"}
						>
							register
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
