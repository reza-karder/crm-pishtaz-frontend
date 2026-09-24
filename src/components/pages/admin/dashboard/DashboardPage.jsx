import { useGetAdminStats } from "../../../../api/stats/query"
import PageHeader from "../../../module/page-header/PageHeader"
import StatCard from "../../../module/stat-card/StatCard"
import styles from "./DashboardPage.module.css" 
import PhoneIcon from "../../../../assets/icons/phone.svg?react"
import PersonIcon from "../../../../assets/icons/person.svg?react"
import PeopleIcon from "../../../../assets/icons/people.svg?react"
import Chart from "./Chart"

function DashboardPage() {
  const { data } = useGetAdminStats()
  const { callsCount, customersCount, activeEmployeesCount, calls } = data || {}
  
  return (
   <>
     <PageHeader title="داشبورد ادمین" subTitle="نمای کلی عملکرد مجموعه" />
     
     <section className={styles.stats_sec}>
      <StatCard title="کل تماس‌ها های موفق" value={callsCount} Icon={PhoneIcon} />
      <StatCard title="کارمندان فعال" value={activeEmployeesCount} Icon={PersonIcon} color="success" />
      <StatCard title="تعداد مشتریان" value={customersCount} Icon={PeopleIcon} color="warning" />
     </section>

     <section className="paper">
      <p className="paper__title">تماس های موفق ماهانه</p>
      <Chart calls={calls} />
     </section>
   </>
  )
}

export default DashboardPage