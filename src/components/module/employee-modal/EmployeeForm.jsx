import { USER_ROLE_OPTIONS, USER_STATUS_OPTIONS } from "../../../constants/userLabels";
import FormField from "../../ui/form-field/FormField";
import Input from "../../ui/input/Input";
import Select from "../../ui/select/Select";
import styles from "./EmployeeForm.module.css";

const generateFormInputs = (isEditing) => ([
	{
		id: "name",
		name: "name",
		label: "نام و نام خانوادگی",
		required: true,
		placeholder: "نام کامل کارمند",
		type: "text",
		dir: "rtl",
	},
	{
		id: "phone",
		name: "phone",
		label: "شماره تماس",
		required: false,
		placeholder: "0912*******",
		type: "phone",
		dir: "rtl",
	},
	{
		id: "email",
		name: "email",
		label: "ایمیل",
		required: true,
		placeholder: "example@gmail.com",
		type: "email",
		dir: "ltr",
	},
	{
		id: "password",
		name: "password",
		label: "رمز عبور",
		required: !isEditing,
		placeholder: "••••••••",
		type: "password",
		dir: "ltr",
	},
]);

const FORM_SELECTS = [
	{
		id: "role",
		name: "role",
		label: "سمت",
		required: true,
		options: USER_ROLE_OPTIONS,
	},
	{
		id: "status",
		name: "status",
		label: "وضعیت",
		required: true,
		options: USER_STATUS_OPTIONS,
	},
];

function EmployeeForm({ employeeForm, isEditing }) {
	const { getFieldProps, getErrorMessage, onSubmit } = employeeForm;

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			{generateFormInputs(isEditing).map((field) => (
				<FormField
					key={field.id}
					id={field.id}
					required={field.required}
					label={field.label}
					error={getErrorMessage(field.name)}
				>
					<Input
						placeholder={field.placeholder}
						type={field.type}
						error={getErrorMessage(field.name)}
						{...getFieldProps(field.name)}
					/>
				</FormField>
			))}
      
			{FORM_SELECTS.map((field) => (
				<FormField
					key={field.id}
					id={field.id}
					required={field.required}
					label={field.label}
					error={getErrorMessage(field.name)}
				>
					<Select
						options={field.options}
						error={getErrorMessage(field.name)}
						{...getFieldProps(field.name)}
					/>
				</FormField>
			))}
		</form>
	);
}

export default EmployeeForm;
