import clsx from "clsx";
import FormField from "../../../ui/form-field/FormField";
import Select from "../../../ui/select/Select";
import styles from "./ProductForm.module.css";
import Input from "../../../ui/input/Input";
import Rating from "../../../ui/rating/Rating";

const TAB_ITEMS = [
	{ title: "خریداری شده", id: "purchased" },
	{ title: "تمایل به خریداری", id: "potential" },
];

function ProductForm({ productForm, setActiveTabId, activeTabId, products }) {
	const { getFieldProps, getErrorMessage, setFieldValue, values } = productForm;
	const productOptions = products.map((product) => ({
		value: product._id,
		label: product.title,
	}));

	return (
		<form>
			<div className={styles.inputs_wrapper}>
				<FormField id="product" required label="محصول" error={getErrorMessage("product")}>
					<Select
						options={productOptions}
						error={getErrorMessage("product")}
						{...getFieldProps("product")}
					/>
				</FormField>

				<FormField
					id="quantity"
					label="تعداد"
          required
					error={getErrorMessage("quantity")}
					className={styles.quantity_field}
				>
					<Input
						placeholder="۲۰"
						type="number"
						error={getErrorMessage("quantity")}
						{...getFieldProps("quantity")}
					/>
				</FormField>
			</div>

			<div className={styles.tabs_wrapper}>
				<div className={styles.tabs}>
					{TAB_ITEMS.map((tabItem) => (
						<button
							key={tabItem.id}
							type="button"
							onClick={() => setActiveTabId(tabItem.id)}
							className={clsx(styles.tab_item, activeTabId === tabItem.id && styles.active)}
						>
							{tabItem.title}
						</button>
					))}
				</div>

				{activeTabId === "purchased" && (
					<FormField id="price" label="مبلغ (ریال)" error={getErrorMessage("price")}>
						<Input
							placeholder="۹٬۴۰۰٬۰۰۰"
							type="number"
							error={getErrorMessage("price")}
							{...getFieldProps("price")}
						/>
					</FormField>
				)}

				{activeTabId === "potential" && (
					<div className={styles.score_tab}>
						<p className={styles.score_title}>میزان تمایل به خرید</p>
						<Rating
							value={values.intentionScore}
							onChange={(value) => setFieldValue("intentionScore", value)}
						/>
					</div>
				)}
			</div>
		</form>
	);
}

export default ProductForm;
