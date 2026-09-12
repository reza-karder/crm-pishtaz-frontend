import styles from "./EmptyState.module.css" 

function EmptyState({title, subtitle, className}) {
  return (
   <div className={className}>
     <p className={styles.title}>{title}</p>
     <p className={styles.subtitle}>{subtitle}</p>
   </div>
  )
}

export default EmptyState