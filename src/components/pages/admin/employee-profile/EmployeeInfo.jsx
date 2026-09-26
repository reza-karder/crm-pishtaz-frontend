import clsx from "clsx"
import styles from "./EmployeeInfo.module.css" 
import { useParams } from "react-router";
import { useGetEmployee } from "../../../../api/user/queries";
import { USER_ROLE_LABELS, USER_STATUS_LABELS } from "../../../../constants/userLabels";

function EmployeeInfo() {
  const params = useParams();
	const { data } = useGetEmployee(params.employeeId);
  const { name, phone, role, status } = data?.user || {}

  return (
   <section className={clsx("paper",styles.wrapper)}>
     <p className="paper__title">
      اطلاعات کارمند
     </p>
     <ul className={styles.info_list}>
      <li className={styles.info__item}>
        <p className={styles.item__title}>نام کاربری</p>
        <p className={styles.item__value}>{name}</p>
      </li>
      <li className={styles.info__item}>
        <p className={styles.item__title}>شماره تماس</p>
        <p className={styles.item__value}>{phone || "----------------"}</p>
      </li>
      <li className={styles.info__item}>
        <p className={styles.item__title}>سمت</p>
        <p className={styles.item__value}>{USER_ROLE_LABELS[role]}</p>
      </li>
      <li className={styles.info__item}>
        <p className={styles.item__title}>وضعیت</p>
        <p className={styles.item__value}>{USER_STATUS_LABELS[status]}</p>
      </li>
     </ul>
   </section>
  )
}

export default EmployeeInfo