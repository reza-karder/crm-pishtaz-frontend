import styles from "./ProductItem.module.css" 
import PenIcon from "../../../../assets/icons/pen.svg?react"
import TrashIcon from "../../../../assets/icons/trash.svg?react"
import IconBtn from "../../../ui/icon-btn/IconBtn"

function ProductItem({ product }) {
  const { title, _id } = product

  return (
   <li className={styles.product}>
     <p className={styles.product__title}>{title}</p>
     <div className={styles.product__actions}>
      <IconBtn><PenIcon /></IconBtn>
      <IconBtn color="danger"><TrashIcon /></IconBtn>
     </div>
   </li>
  )
}

export default ProductItem