import BackLink from "../../../common/back-link/BackLink";
import Actions from "./actions/Actions";
import Avatar from "./Avatar";
import styles from "./CustomerProfile.module.css";

function CustomerProfile() {

	return (
		<>
			<BackLink to="/customers">بازگشت به مشتریان</BackLink>
      <Avatar />
      <Actions />
		</>
	);
}

export default CustomerProfile;
