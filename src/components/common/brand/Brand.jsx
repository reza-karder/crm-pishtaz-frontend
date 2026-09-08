import styles from "./Brand.module.css" 
import logo from  "../../../assets/images/logo.png"

function Brand() {
  return (
   <div className={styles.brand}>
     <img src={logo} alt="لوگوی شرکت" className={styles.logo} />
     <div>
      <p className={styles.brand__title}>پیشتاز صنعت</p>
      <p className={styles.brand__subtitle}>سامانه مدیریت مشتریان</p>
     </div>
   </div>
  )
}

export default Brand