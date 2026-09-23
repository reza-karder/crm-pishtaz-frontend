import styles from "./ProductsList.module.css";
import Pagination from "../../../ui/pagination/Pagination";
import { useAdminGetProducts } from "../../../../api/products/queries";
import ProductItem from "./ProductItem";
import clsx from "clsx";

function ProductsList({ productsParams }) {
	const { params, updateParams } = productsParams;
	const { data } = useAdminGetProducts(new URLSearchParams(params).toString());
	const { products, totalPages, limit, totalProducts } = data || {};

	const productsDisplayStartRange = (params.page - 1) * limit + Math.min(1, totalProducts);
	const productsDisplayEndRange = Math.min(productsDisplayStartRange + limit - 1, totalProducts);

	return (
		<section className={clsx("paper", styles.section)}>
			<ul className={styles.products_list}>
				{products?.map((product) => (
					<ProductItem key={product._id} product={product} />
				))}
			</ul>
			<div className={styles.pagination}>
				<p className={styles.pagination__count}>
					نمایش {productsDisplayStartRange} تا {productsDisplayEndRange} از {totalProducts} محصول
				</p>
				<Pagination 
					currentPage={params.page}
					totalPages={totalPages}
					onChange={(value) => updateParams({ page: value })}
				/>
			</div>
		</section>
	);
}

export default ProductsList;
