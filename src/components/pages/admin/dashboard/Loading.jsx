import Skeleton from "../../../common/skeleton/Skeleton"
import PageHeader from "../../../module/page-header/PageHeader"
import styles from "./Loading.module.css" 

function Loading() {
  return (
   <>
     <PageHeader title="داشبورد ادمین" subTitle="نمای کلی عملکرد مجموعه" />
     <div className={styles.stats_sec}>
      <Skeleton height={87} />
      <Skeleton height={87} />
      <Skeleton height={87} />
     </div>
     <Skeleton height={306} className={styles.chart_sec} />
     <Skeleton height={182} />
   </>
  )
}

export default Loading