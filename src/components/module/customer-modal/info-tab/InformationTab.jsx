import { useGetJobs } from "../../../../api/jobs/queries";
import FormField from "../../../ui/form-field/FormField";
import Input from "../../../ui/input/Input";
import Select from "../../../ui/select/Select";
import TextArea from "../../../ui/text-area/TextArea";
import styles from "./InformationTab.module.css";

const formFields = [
	{
		label: "نام و نام خانوادگی",
		name: "name",
		id: "name",
		required: true,
		placeholder: "نام کامل مشتری",
		type: "text",
		dir: "rtl",
	},
	{
		label: "شماره تماس اصلی",
		name: "phonePrimary",
		id: "phonePrimary",
		required: true,
		placeholder: "0912*******",
		type: "phone",
		dir: "ltr",
	},
	{
		label: "شماره تماس دوم",
		name: "phoneSecondary",
		id: "phoneSecondary",
		required: false,
		placeholder: "0911*******",
		type: "phone",
		dir: "ltr",
	},
	{
		label: "ایمیل",
		name: "email",
		id: "email",
		required: false,
		placeholder: "name@example.com",
		type: "email",
		dir: "ltr",
	},
	{
		label: "آدرس",
		name: "address",
		id: "address",
		required: false,
		placeholder: "شهر، خیابان، پلاک",
		type: "text",
		dir: "rtl",
	},
];

function InformationTab({ customerForm }) {
	const { getFieldProps, getErrorMessage } = customerForm;
	const { data } = useGetJobs();
  
	const jobOptions = data?.jobs.map((job) => ({
		label: job.title,
		value: job._id,
	}));

	return (
		<form className={styles.form}>
			{formFields.map((field) => (
				<FormField
					id={field.id}
					key={field.id}
					label={field.label}
					required={field.required}
					className={styles.input_filed}
					error={getErrorMessage(field.name)}
				>
					<Input
						dir={field.dir}
						type={field.type}
						placeholder={field.placeholder}
						error={getErrorMessage(field.name)}
						{...getFieldProps(field.name)}
					/>
				</FormField>
			))}

			<FormField className={styles.input_filed} label="شغل" id="job" error={getErrorMessage("job")}>
				<Select
					options={jobOptions || []}
					id="job"
					error={getErrorMessage("job")}
					{...getFieldProps("job")}
				/>
			</FormField>

			<FormField
				id="notes"
				label="توضیحات"
				error={getErrorMessage("notes")}
				className={styles.text_area_field}
			>
				<TextArea
					className={styles.text_area}
					error={getErrorMessage("notes")}
					placeholder="نکات مهم درمورد مشتری..."
					{...getFieldProps("notes")}
				/>
			</FormField>
		</form>
	);
}

export default InformationTab;
