import { Link } from "react-router";
import Button from "./Button";

function LinkButton({ children, ...props }) {
	return (
		<Button Component={Link} {...props}>
			{children}
		</Button>
	);
}

export default LinkButton;
