import { useGetJobOptions } from "../../../../api/jobs/queries";
import { useGetProductOptions } from "../../../../api/products/queries";
import Input from "../../../ui/input/Input";
import styles from "./CustomersToolbar.module.css";
import MagnifyIcon from "../../../../assets/icons/magnify.svg?react";
import FilterIcon from "../../../../assets/icons/filter.svg?react";
import Select from "../../../ui/select/Select";
import Button from "../../../ui/button/Button";
import clsx from "clsx";
import useToggle from "../../../../hooks/useToggle";
import FormField from "../../../ui/form-field/FormField";
import {
	ALL_OPTION,
	CUSTOMER_TOOLBAR_FIELDS,
	SORT_OPTIONS,
} from "../../../../constants/CustomersToolbar";

function CustomersToolbar() {
	const [isFilterOpen, toggleIsFilterOpen] = useToggle(false);

	const { data: jobOptions } = useGetJobOptions();
	const { data: productOptions } = useGetProductOptions();
  
	const dynamicOptions = {
		job: [ALL_OPTION, ...(jobOptions || [])],
		product: [ALL_OPTION, ...(productOptions || [])],
	};

	return (
		<section className={clsx("paper", styles.toolbar, isFilterOpen && styles.open)}>
			<div className={styles.toolbar__summary}>
				<Input placeholder="جستجوی نام، شماره تماس، ایمیل ..." StartIcon={MagnifyIcon} />
				<Select options={SORT_OPTIONS} value={SORT_OPTIONS[0].value} />
				<Button
					color="primary"
					variant="outlined"
					IconStart={FilterIcon}
					onClick={toggleIsFilterOpen}
				>
					فیلتر ها
				</Button>
			</div>

			<div className={styles.toolbar__filters}>
				<div className={styles.filters__inner}>
					<div className={styles.filters__padding}>
						{CUSTOMER_TOOLBAR_FIELDS.map((field) => (
							<FormField key={field.id} id={field.id} label={field.label}>
								<Select
									options={field.options || dynamicOptions[field.optionsKey]}
									value={ALL_OPTION.value}
								/>
							</FormField>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default CustomersToolbar;
