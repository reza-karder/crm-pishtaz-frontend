import PageHeader from "../../../module/page-header/PageHeader"
import PlusIcon from "../../../../assets/icons/plus.svg?react"
import Button from "../../../ui/button/Button"

function ProductsPages() {
  return (
   <>
     <PageHeader title="محصولات" subTitle="این فهرست در فرم افزودن مشتری استفاده می‌شود">
      <Button IconStart={PlusIcon}>محصول جدید</Button>
     </PageHeader>

   </>
  )
}

export default ProductsPages