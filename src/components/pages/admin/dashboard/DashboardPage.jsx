import { useGetAdminStats } from "../../../../api/stats/query"
import PageHeader from "../../../module/page-header/PageHeader"
import StatCard from "../../../module/stat-card/StatCard"
import styles from "./DashboardPage.module.css" 
import PhoneIcon from "../../../../assets/icons/phone.svg?react"
import PersonIcon from "../../../../assets/icons/person.svg?react"
import PeopleIcon from "../../../../assets/icons/people.svg?react"

function DashboardPage() {
  const { data } = useGetAdminStats()
  const { callsCount, customersCount, activeEmployeesCount } = data || {}

  return (
   <>
     <PageHeader title="داشبورد ادمین" subTitle="نمای کلی عملکرد مجموعه" />
     <section className={styles.stats_sec}>
      <StatCard title="کل تماس‌ها های موفق" value={callsCount} Icon={PhoneIcon} />
      <StatCard title="کارمندان فعال" value={activeEmployeesCount} Icon={PersonIcon} color="success" />
      <StatCard title="تعداد مشتریان" value={customersCount} Icon={PeopleIcon} color="warning" />
     </section>
   </>
  )
}

export default DashboardPage