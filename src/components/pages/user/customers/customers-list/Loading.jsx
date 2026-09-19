import Skeleton from "../../../../common/skeleton/Skeleton"
import styles from "./Loading.module.css" 

function Loading() {
  return (
   <div className={styles.table}>
     <Skeleton height={45} className={styles.skeleton} />
     <Skeleton height={70} className={styles.skeleton} />
     <Skeleton height={70} className={styles.skeleton} />
     <Skeleton height={70} className={styles.skeleton} />
     <Skeleton height={70} className={styles.skeleton} />
     <Skeleton height={70} className={styles.skeleton} />
   </div>
  )
}

export default Loading