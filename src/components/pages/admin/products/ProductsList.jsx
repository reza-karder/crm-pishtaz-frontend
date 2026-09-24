import styles from "./ProductsList.module.css";
import Pagination from "../../../ui/pagination/Pagination";
import { useAdminGetProducts } from "../../../../api/products/queries";
import ProductItem from "./product-item/ProductItem";
import clsx from "clsx";
import EmptyState from "../../../common/empty-state/EmptyState";

function ProductsList({ productsParams }) {
	const { params, updateParams } = productsParams;
	const { data } = useAdminGetProducts(new URLSearchParams(params).toString());
	const { products, totalPages, limit, totalProducts } = data || {};

	const productsDisplayStartRange = (params.page - 1) * limit + Math.min(1, totalProducts);
	const productsDisplayEndRange = Math.min(productsDisplayStartRange + limit - 1, totalProducts);

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
			<div className={styles.pagination}>
				<p className={styles.pagination__count}>
					نمایش {productsDisplayStartRange} تا {productsDisplayEndRange} از {totalProducts} محصول
				</p>
				<Pagination
					currentPage={Number(params.page)}
					totalPages={totalPages}
					onChange={(value) => updateParams({ page: value })}
				/>
			</div>
		</section>
	);
}

export default ProductsList;
