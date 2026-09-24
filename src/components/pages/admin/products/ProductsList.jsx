import styles from "./ProductsList.module.css";
import { useAdminGetProducts } from "../../../../api/products/queries";
import ProductItem from "./product-item/ProductItem";
import clsx from "clsx";
import EmptyState from "../../../common/empty-state/EmptyState";
import CounterPagination from "../../../module/counter-pagination/CounterPagination";
import { stringifyParams } from "../../../../utils/utils";

function ProductsList({ productsParams }) {
	const { params, updateParams } = productsParams;
  
	const { data } = useAdminGetProducts(stringifyParams(params));
	const { products, totalPages, limit, totalProducts } = data || {};
  

	if (!products.length) {
		return (
			<section className={clsx("paper", styles.section)}>
				<EmptyState title="محصولی وجود ندارد" subtitle="هنوز محصولی در سامانه ثبت نشده است" />
			</section>
		);
	}

	return (
		<section className={clsx("paper", styles.section)}>
			<ul className={styles.products_list}>
				{products?.map((product) => (
					<ProductItem key={product._id} product={product} params={params} />
				))}
			</ul>
			<CounterPagination
				limit={limit}
				label="محصول"
				totalPages={totalPages}
				currentPage={params.page}
				totalCount={totalProducts}
				onChange={(page) => updateParams({ page })}
			/>
		</section>
	);
}

export default ProductsList;
