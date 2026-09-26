import * as yup from "yup";
import { CALL_STATUS } from "../constants/callStatus";
import { USER_ROLES, USER_STATUS } from "../constants/userLabels";

const PHONE_REGEX = /^09\d{9}$/;
const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

const signinSchema = yup.object({
	email: yup.string().required("ایمیل اجباری است").email("ایمیل معتبر نمی باشد"),
	password: yup.string().required("رمز عبور اجباری است"),
});

const customerSchema = yup.object({
	name: yup.string().required("نام اجباری است"),
	phonePrimary: yup
		.string()
		.required("شماره تماس اصلی اجباری است")
		.matches(PHONE_REGEX, "شماره معتبر نمی باشد"),
	phoneSecondary: yup.string().optional().matches(PHONE_REGEX, "شماره معتبر نمی باشد"),
	email: yup.string().optional().email("ایمیل معتبر نمی باشد"),
	address: yup.string().optional(),
	notes: yup.string().optional(),
	products: yup.array(),
	job: yup.string().required("شغل اجباری است"),
});

const customerProductSchema = yup.object({
	product: yup.string().required("محصول اجباری است"),
	type: yup.string().oneOf(["purchased", "potential"]),
	price: yup
		.number()
		.typeError("مبلغ معتبر نیست")
		.positive("قیمت باید عدد مثبت باشد")
		.integer("قیمت باید عدد صحیح باشد"),
	intetionScore: yup.number().oneOf([1, 2, 3, 4, 5]),
	quantity: yup
		.number()
		.required("تعداد الزامی است")
		.min(1, "تعداد نمی تواند کمتر از ۱ باشد")
		.integer("تعداد باید عدد صحیح باشد"),
});

const customerCallValidator = yup.object({
	date: yup.date().required("تاریخ اجباری می باشد"),
	status: yup.string().required("وضعیت اجباری می باشد").oneOf(CALL_STATUS),
	notes: yup.string(),
});

const transferCustomerValidator = yup.object({
	userId: yup.string().required("کارمند مقصد اجباری است"),
});

const profileInfoFormSchema = yup.object({
	email: yup.string().email("ایمیل معتبر نیست").required("ایمیل اجباری است"),
	phone: yup.string().matches(PHONE_REGEX, "شماره تماس معتبر نیست").optional(),
	name: yup.string().required("نام و نام خانوادگی اجباری است"),
});

const profilePasswordFormSchema = yup.object({
	currentPassword: yup.string().required("رمز عبور فعلی اجباری است"),
	newPassword: yup.string().required("رمز عبور جدید اجباری است").matches(PASSWORD_REGEX),
	confirmNewPassword: yup
		.string()
		.required("تکرار رمز عبور اجباری است")
		.oneOf([yup.ref("newPassword")], "تکرار با رمز عبور جدید یکسان نمی باشد"),
});

const productFormSchema = yup.object({
	title: yup.string().required("عنوان اجباری است"),
});

const jobFormSchema = yup.object({
	title: yup.string().required("عنوان اجباری است"),
});

const employeeFormSchema = yup.object({
	name: yup.string().required("نام اجباری است"),
  email: yup.string().required("ایمیل اجباری است").email("ایمیل معتبر نمی باشد"),
  role: yup.string().required("سمت اجباری می باشد").oneOf(USER_ROLES),
  status: yup.string().required("وضعیت اجباری می باشد").oneOf(USER_STATUS),
	phone: yup
		.string()
		.matches(PHONE_REGEX, "شماره تماس معتبر نیست"),
	password: yup
		.string()
		.required("رمز عبور اجباری است")
		.matches(
			PASSWORD_REGEX,
			"رمز عبور باید انگلیسی و دارای حداقل ۸ حرف، یک حرف بزرگ، یک حرف خاص، یک عدد باشد"
		),
});

const deleteEmployeeSchema = yup.object({
  substituteEmployeeId: yup.string().required("کارمند مقصد اجباری است")
})

export {
	signinSchema,
	customerSchema,
	customerProductSchema,
	customerCallValidator,
	transferCustomerValidator,
	profileInfoFormSchema,
	profilePasswordFormSchema,
	productFormSchema,
	jobFormSchema,
  employeeFormSchema,
  deleteEmployeeSchema
};
