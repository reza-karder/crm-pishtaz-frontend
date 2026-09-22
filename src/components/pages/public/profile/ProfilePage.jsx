import clsx from "clsx"
import PageHeader from "../../../module/page-header/PageHeader"
import styles from "./ProfilePage.module.css" 

function ProfilePage() {
  return (
   <>
     <PageHeader title="پروفایل من" subTitle="اطلاعات شخصی و عملکرد شما" />

     <div className={styles.wrapper}>
      <section className={clsx("paper", styles.section)}>
        <p className="paper__title">اطلاعات شخصی</p>
      </section>
      <section className={clsx("paper", styles.section)}>
        <p className="paper__title">تغییر رمز عبور</p>
      </section>
     </div>
   </>
  )
}

export default ProfilePage