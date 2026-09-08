import Button from "../../ui/button/Button";
import FormField from "../../ui/form-field/FormField";
import Input from "../../ui/input/Input";
import styles from "./SigninForm.module.css";
import EnterIcon from "../../../assets/icons/enter.svg?react";
import EyeIcon from "../../../assets/icons/eye.svg?react";
import EyeOffIcon from "../../../assets/icons/eye-off.svg?react";
import useToggle from "../../../hooks/useToggle";
import IconBtn from "../../ui/icon-btn/IconBtn";

function SigninForm() {
	const [showPassword, toggleShowPassword] = useToggle(false);

	return (
		<form className={styles.form}>
			<FormField label="ایمیل" required id="email">
				<Input placeholder="example@gmail.com" name="email" id="email" />
			</FormField>
			<FormField label="رمز عبور" required id="password">
				<Input
					placeholder="••••••••"
					name="password"
					type={showPassword ? "text" : "password"}
					id="password"
					endAdornment={
						<IconBtn type="button" onClick={toggleShowPassword}>
							{showPassword ? <EyeOffIcon /> : <EyeIcon />}
						</IconBtn>
					}
				/>
			</FormField>
			<Button IconStart={EnterIcon} fullWidth>
				ورود
			</Button>
		</form>
	);
}

export default SigninForm;
