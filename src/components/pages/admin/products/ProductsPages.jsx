import PageHeader from "../../../module/page-header/PageHeader"
import PlusIcon from "../../../../assets/icons/plus.svg?react"
import Button from "../../../ui/button/Button"
import ProductsList from "./ProductsList"
import useCustomParams from "../../../../hooks/useCustomParams"

const DEFAULT_PARAMS = {
  search: "",
  page: 1
}

function ProductsPages() {
  const productsParams = useCustomParams(DEFAULT_PARAMS)

  return (
   <>
     <PageHeader title="محصولات" subTitle="این فهرست در فرم افزودن مشتری استفاده می‌شود">
      <Button IconStart={PlusIcon}>محصول جدید</Button>
     </PageHeader>
    
    <ProductsList productsParams={productsParams} />
   </>
  )
}

export default ProductsPages