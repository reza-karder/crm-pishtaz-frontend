import DashboardIcon from "../assets/icons/dashboard-outline-rounded.svg?react"
import PeopleIcon from "../assets/icons/people.svg?react"
import PersonIcon from "../assets/icons/person.svg?react"
import BellIcon from "../assets/icons/bell.svg?react"
import CalendarIcon from "../assets/icons/calendar.svg?react"
import SuitcaseIcon from "../assets/icons/suitcase.svg?react"
import BoxIcon from "../assets/icons/box.svg?react"
import BarChartIcon from "../assets/icons/bar-chart.svg?react"
import EmployeeIcon from "../assets/icons/employee.svg?react"

const USER_LAYOUT_LINKS = [
  { label: "داشبورد", path: "/", Icon: DashboardIcon },
  { label: "مشتریان", path: "/customers", Icon: PeopleIcon },
  { label: "تقویم", path: "/calendar", Icon: CalendarIcon },
  { label: "اعلان ها", path: "/notifications", Icon: BellIcon },
  { label: "پروفایل", path: "/profile", Icon: PersonIcon },
]

const ADMIN_LAYOUT_LINKS = [
  { label: "داشبورد", path: "/admin", Icon: BarChartIcon },
  { label: "محصولات", path: "/admin/products", Icon: BoxIcon },
  { label: "مشاغل", path: "/admin/jobs", Icon: SuitcaseIcon },
  { label: "پروفایل", path: "/admin/profile", Icon: PersonIcon },
  { label: "کارمندان", path: "/admin/employees", Icon: EmployeeIcon },
]

export { USER_LAYOUT_LINKS, ADMIN_LAYOUT_LINKS }