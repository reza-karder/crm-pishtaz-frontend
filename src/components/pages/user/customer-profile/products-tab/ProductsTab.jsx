import { useParams } from "react-router";
import { useGetCustomerProfile } from "../../../../../api/customers/queries";
import styles from "./ProductsTab.module.css";
import ProductCard from "./ProductCard";
import EmptyState from "../../../../common/empty-state/EmptyState";

function ProductsTab() {
	const params = useParams();

	const { data } = useGetCustomerProfile(params.customerId, { refetchOnMount: true });
	const { products } = data?.customer || {};

	const purchasedProducts = products.filter((product) => product.type === "purchased");
	const potentialProducts = products.filter((product) => product.type === "potential");
	const hasProducts = potentialProducts.length || purchasedProducts.length;

	if (!hasProducts) {
		return (
			<EmptyState
				title="هیچ محصولی برای این مشتری ثبت نشده"
				subtitle="می توانید با استفاده از گزینه ویرایش به محصولات مشتری اضافه کنید"
        className={styles.empty_state}
			/>
		);
	}

	return (
		<div className={styles.wrapper}>
			<ProductsBlock title="محصولات خریداری‌شده" products={purchasedProducts} />
			<ProductsBlock title="محصولات مورد علاقه" products={potentialProducts} />
		</div>
	);
}

function ProductsBlock({ products, title }) {
	if (!products.length) return null;

	return (
		<div className={styles.products_block}>
			<div className={styles.title_wrapper}>
				<p className={styles.title}>{title}</p>
				<p className={styles.count}>( {products.length} مورد )</p>
			</div>
			<ul className={styles.products_list}>
				{products.map((product) => (
					<ProductCard key={product._id} product={product} />
				))}
			</ul>
		</div>
	);
}

export default ProductsTab;
