import BackLink from "../../../common/back-link/BackLink";
import Actions from "./actions/Actions";
import Avatar from "./Avatar";
import CustomerInfos from "./CustomerInfos";
import styles from "./CustomerProfile.module.css";

function CustomerProfile() {

	return (
		<>
			<BackLink to="/customers">بازگشت به مشتریان</BackLink>
      <Avatar />
      <Actions />
      <div className={styles.wrapper}>
        <CustomerInfos />
      </div>
		</>
	);
}

export default CustomerProfile;
