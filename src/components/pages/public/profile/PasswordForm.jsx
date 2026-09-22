import { toast } from "sonner";
import { useChangeUserPassword } from "../../../../api/user/mutation";
import useCustomForm from "../../../../hooks/useCustomForm";
import { profilePasswordFormSchema } from "../../../../utils/validators";
import Button from "../../../ui/button/Button";
import FormField from "../../../ui/form-field/FormField";
import Input from "../../../ui/input/Input";
import styles from "./Form.module.css";

const FORM_FIELDS = [
	{
		label: "رمز عبور فعلی",
		id: "current-password",
		name: "currentPassword",
		required: true,
		dir: "ltr",
		placeholder: "••••••••",
		type: "password",
	},
	{
		label: "رمز عبور جدید",
		id: "new-password",
		name: "newPassword",
		required: true,
		dir: "ltr",
		placeholder: "••••••••",
		type: "password",
	},
	{
		label: "تکرار رمز عبور جدید",
		id: "confirm-new-password",
		name: "confirmNewPassword",
		required: true,
		dir: "ltr",
		placeholder: "••••••••",
		type: "password",
	},
];

const INITIAL_FORM_DATA = {
	currentPassword: "",
	newPassword: "",
	confirmNewPassword: "",
};

function PasswordForm() {
	const { mutateAsync: mutateChangePassword, isPending } = useChangeUserPassword();

	const handleSubmit = async (formData, form) => {
		const passwords = {
		  currentPassword: formData.currentPassword,
		  newPassword: formData.newPassword,
		}
		const response = await mutateChangePassword(passwords)

		if(!response.success) {
		  toast.warning(response.message)
      return
		}

		toast.success(response.message)
    form.resetForm()
	};

	const { getFieldProps, getErrorMessage, onSubmit, dirty } = useCustomForm(
		INITIAL_FORM_DATA,
		profilePasswordFormSchema,
		handleSubmit
	);

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			{FORM_FIELDS.map((field) => (
				<FormField
					key={field.id}
					label={field.label}
					required={field.required}
					id={field.id}
					error={getErrorMessage(field.name)}
				>
					<Input
						placeholder={field.placeholder}
						dir={field.dir}
						type={field.type}
						error={getErrorMessage(field.name)}
						{...getFieldProps(field.name)}
					/>
				</FormField>
			))}
			<Button type="submit" loading={isPending} disabled={!dirty}>
				تغییر رمز عبور
			</Button>
		</form>
	);
}

export default PasswordForm;
