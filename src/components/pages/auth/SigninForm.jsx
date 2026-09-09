import Button from "../../ui/button/Button";
import FormField from "../../ui/form-field/FormField";
import Input from "../../ui/input/Input";
import styles from "./SigninForm.module.css";
import EnterIcon from "../../../assets/icons/enter.svg?react";
import EyeIcon from "../../../assets/icons/eye.svg?react";
import EyeOffIcon from "../../../assets/icons/eye-off.svg?react";
import useToggle from "../../../hooks/useToggle";
import IconBtn from "../../ui/icon-btn/IconBtn";
import { signinSchema } from "../../../utils/validators";
import { useSignin } from "../../../api/auth/mutations";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import useCustomForm from "../../../hooks/useCustomForm";

const INITIAL_FORM_DATA = {
	email: "",
	password: "",
};

function SigninForm() {
	const navigate = useNavigate();
	const [showPassword, toggleShowPassword] = useToggle(false);
	const { mutateAsync: signin, isPending } = useSignin();
	const { register, onSubmit, errors, touchedFields } = useCustomForm(
		INITIAL_FORM_DATA,
		signinSchema
	);
  

	const navigateUser = (role) => {
		const path = role === "admin" ? "/admin" : "/";
		navigate(path);
	};

	const handleSubmit = async (formData) => {
		const response = await signin(formData);
		if (!response.success) {
			toast.warning(response.message);
			return;
		}

		toast.success(response.message);
		navigateUser(response.user.role);
	};

	return (
		<form className={styles.form} onSubmit={onSubmit(handleSubmit)}>
			<FormField
				required
				id="email"
				label="ایمیل"
				error={touchedFields.email && errors.email?.message}
			>
				<Input
					dir="ltr"
					id="email"
					type="email"
					placeholder="example@gmail.com"
					error={touchedFields.email && errors.email}
					{...register("email")}
				/>
			</FormField>

			<FormField
				required
				id="password"
				label="رمز عبور"
				error={touchedFields.password && errors.password?.message}
			>
				<Input
					dir="ltr"
					id="password"
					placeholder="••••••••"
					type={showPassword ? "text" : "password"}
					error={touchedFields.password && errors.password}
					{...register("password")}
					startAdornment={
						<IconBtn type="button" onClick={toggleShowPassword}>
							{showPassword ? <EyeOffIcon /> : <EyeIcon />}
						</IconBtn>
					}
				/>
			</FormField>

			<Button IconStart={EnterIcon} fullWidth type="submit" loading={isPending}>
				ورود
			</Button>
		</form>
	);
}

export default SigninForm;
