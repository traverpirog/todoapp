import classes from "../../assets/css/Title.module.css";

const Title = props => {
	const { children } = props;
	return <h1 className={classes.title}>{children}</h1>;
};

export default Title;
