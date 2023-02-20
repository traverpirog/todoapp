import React from "react";
import { NavLink } from "react-router-dom";

import classes from "../assets/css/Auth.module.css";
import Title from "../components/ui/Title.jsx";

const Register = () => {
	return (
		<div className={classes.authWrapper}>
			<div className="bg-white p-7">
				<Title>Registration</Title>
				<form className="mb-3" onSubmit={e => e.preventDefault()}>
					<label className={classes.label}>
						<span className={classes.caption}>Email:</span>
						<input
							className={classes.input}
							type="text"
							placeholder="Ivan@mail.ru"
						/>
					</label>
					<label className={classes.label}>
						<span className={classes.caption}>Login:</span>
						<input
							className={classes.input}
							type="text"
							placeholder="Ivan"
						/>
					</label>
					<label className={classes.label}>
						<span className={classes.caption}>Password:</span>
						<input
							className={classes.input}
							type="password"
							placeholder="********"
						/>
					</label>
					<input
						className={classes.submit}
						type="submit"
						value="Sign Up"
					/>
				</form>
				<div className="text-center gap-3 flex items-center font-medium before:w-full before:bg-blue-600 before:h-0.5 after:w-full after:bg-blue-600 after:h-0.5">
					<div className="flex gap-1 flex-1 w-full flex-shrink-0">
						or{" "}
						<NavLink className="text-blue-600 underline" to={"/"}>
							login
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
