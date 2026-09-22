import { toast } from "sonner";
import { useEditUser } from "../../../../api/user/mutation";
import { useSuspenseGetUser } from "../../../../api/user/queries";
import useCustomForm from "../../../../hooks/useCustomForm";
import { profileInfoFormSchema } from "../../../../utils/validators";
import Button from "../../../ui/button/Button";
import FormField from "../../../ui/form-field/FormField";
import Input from "../../../ui/input/Input";
import styles from "./Form.module.css";
import { useQueryClient } from "@tanstack/react-query";
import USER_KEYS from "../../../../api/user/keys";

const FORM_FIELDS = [
	{
		label: "نام و نام خانوادگی",
		id: "name",
		name: "name",
		required: true,
		dir: "rtl",
		placeholder: "نام کامل خود را وارد کنید",
		type: "text",
	},
	{
		label: "ایمیل",
		id: "email",
		name: "email",
		required: true,
		dir: "ltr",
		placeholder: "example@gmail.com",
		type: "email",
	},
	{
		label: "شماره تماس",
		id: "phone",
		name: "phone",
		required: false,
		dir: "rtl",
		placeholder: "0912*******",
		type: "phone",
	},
];

function InfoForm() {
	const { data } = useSuspenseGetUser();
	const { name, email, phone } = data?.user || {};

  const queryClient = useQueryClient()
  const { mutateAsync: mutateEditUser, isPending } = useEditUser()

  const handleSubmit = async (userData) => {
    const response = await mutateEditUser(userData)

    if(!response.success) {
      toast.warning(response.message)
    }

    queryClient.invalidateQueries({ queryKey: USER_KEYS.GET_USER })
    toast.success(response.message)
  }

	const { getErrorMessage, getFieldProps, onSubmit } = useCustomForm(
		{ name, email, phone },
		profileInfoFormSchema,
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
			<Button type="submit" loading={isPending}>ذخیره اطلاعات</Button>
		</form>
	);
}

export default InfoForm;
