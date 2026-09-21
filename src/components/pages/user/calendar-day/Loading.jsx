import Skeleton from "../../../common/skeleton/Skeleton"
import styles from "./Loading.module.css" 

function Loading() {
  return (
   <div className={styles.wrapper}>
     <Skeleton height={74} className={styles.call} />
     <Skeleton height={124} className={styles.call} />
     <Skeleton height={240} className={styles.call}  />
     <Skeleton height={64} className={styles.call} />
   </div>
  )
}

export default Loading