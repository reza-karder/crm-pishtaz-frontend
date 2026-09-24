import clsx from "clsx"
import Skeleton from "../../../common/skeleton/Skeleton"
import styles from "./Loading.module.css" 

function Loading() {
  return (
   <div className={clsx("paper", styles.section)}>
     <div className={styles.jobs_list}>
      <Skeleton height={60} />
      <Skeleton height={60} />
      <Skeleton height={60} />
      <Skeleton height={60} />
      <Skeleton height={60} />
     </div>
   </div>
  )
}

export default Loading