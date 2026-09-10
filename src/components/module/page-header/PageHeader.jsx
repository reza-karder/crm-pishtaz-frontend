import styles from "./PageHeader.module.css" 

function PageHeader({ title, subTitle, children }) {
  return (
   <div className={styles.page_header}>
    <div>
      <h1 className={styles.header__title}>{title}</h1>
      <p className={styles.header__subtitle}>{subTitle}</p>
    </div>
    <div>
      {children}
    </div>
   </div>
  )
}

export default PageHeader