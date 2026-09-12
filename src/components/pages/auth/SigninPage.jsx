import { useNavigate } from "react-router";
import { useCheckSession } from "../../../api/auth/queries";
import Brand from "../../common/brand/Brand";
import SigninForm from "./SigninForm";
import styles from "./SigninPage.module.css";
import { BeatLoader } from "react-spinners";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

function SigninPage() {
  useDocumentTitle("ورود")
	const { data, isPending } = useCheckSession();
	const navigate = useNavigate();

  // protect the route if user is already signed in
	if(data?.success) {
	  const path = data.user.role === "admin" ? "/admin" : "/"
	  navigate(path, { replace: true })
	}

	if (isPending) {
		return (
			<div className={styles.loader}>
				<BeatLoader color="var(--clr-primary)" />
			</div>
		);
	}

	return (
		<main className={styles.main}>
			<section className={styles.panel_sec}>
				<div className={styles.panel__inner}>
					<Brand />
					<h1 className={styles.panel__title}>ورود به سامانه</h1>
					<p className={styles.panel__desc}>برای ادامه، نام کاربری و رمز عبور خود را وارد کنید.</p>
					<SigninForm />
					<p className={styles.panel__help}>در صورت فراموشی رمز عبور با مدیر سیستم تماس بگیرید.</p>
				</div>
			</section>

			<section className={styles.intro_sec}>
				<div className={styles.intro__inner}>
					<h2 className={styles.intro__title}>مدیریت ساده‌تر مشتریان و تماس‌ها</h2>
					<p className={styles.intro__desc}>
						تماس‌های روزانه، مشتریان جدید، محصولات فروخته‌شده و برنامه کاری‌تان را در یک صفحه ببینید
						و سریع‌تر تصمیم بگیرید.
					</p>
					<ul className={styles.intro__features_list}>
						<li className={styles.features__item}>تقویم تماس‌های روزانه</li>
						<li className={styles.features__item}>پرونده کامل هر مشتری</li>
						<li className={styles.features__item}>گزارش عملکرد لحظه‌ای</li>
					</ul>
				</div>
			</section>
		</main>
	);
}

export default SigninPage;
