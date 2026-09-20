import * as yup from "yup";
import { callStatuses } from "../constants/callStatus";

const PHONE_REGEX = /^09\d{9}$/;

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
	status: yup.string().required("وضعیت اجباری می باشد").oneOf(callStatuses),
	notes: yup.string(),
});

const transferCustomerValidator = yup.object({
	userId: yup.string().required("کارمند مقصد اجباری است"),
});

export {
	signinSchema,
	customerSchema,
	customerProductSchema,
	customerCallValidator,
	transferCustomerValidator,
};
