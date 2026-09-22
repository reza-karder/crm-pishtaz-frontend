import Skeleton from "../../../common/skeleton/Skeleton"
import PageHeader from "../../../module/page-header/PageHeader"
import styles from "./Loading.module.css" 

function Loading() {
  return (
   <>
    <PageHeader title="اعلان ها" subTitle="مشاهده تماس های روز و رسیدگی نشده" />
     <div className={styles.stats}>
      <Skeleton height={87} />
      <Skeleton height={87} />
     </div>
     
     <Skeleton height={200} />
     <Skeleton height={300} className={styles.calls_section} />
   </>
  )
}

export default Loading