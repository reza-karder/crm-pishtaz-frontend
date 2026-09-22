import Skeleton from "../../../common/skeleton/Skeleton";
import PageHeader from "../../../module/page-header/PageHeader";
import styles from "./Loading.module.css";

function Loading() {
	return (
		<>
			<PageHeader title="پروفایل من" subTitle="اطلاعات شخصی و عملکرد شما" />
			<div className={styles.wrapper}>
				<Skeleton height={360} />
				<Skeleton height={360} />
			</div>
		</>
	);
}

export default Loading;
