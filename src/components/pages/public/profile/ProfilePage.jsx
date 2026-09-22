import clsx from "clsx"
import PageHeader from "../../../module/page-header/PageHeader"
import styles from "./ProfilePage.module.css" 
import InfoForm from "./InfoForm"
import PasswordForm from "./PasswordForm"
import useDocumentTitle from "../../../../hooks/useDocumentTitle"

function ProfilePage() {
  useDocumentTitle("پروفایل من")

  return (
   <>
     <PageHeader title="پروفایل من" subTitle="اطلاعات شخصی و عملکرد شما" />

     <div className={styles.wrapper}>
      <section className={clsx("paper", styles.section)}>
        <p className="paper__title">اطلاعات شخصی</p>
        <InfoForm />
      </section>
      <section className={clsx("paper", styles.section)}>
        <p className="paper__title">تغییر رمز عبور</p>
        <PasswordForm />
      </section>
     </div>
   </>
  )
}

export default ProfilePage