import BackLink from "../../../common/back-link/BackLink";
import Avatar from "./Avatar";
import styles from "./CustomerProfile.module.css";

function CustomerProfile() {

	return (
		<>
			<BackLink to="/customers">بازگشت به مشتریان</BackLink>
      <Avatar />
		</>
	);
}

export default CustomerProfile;
