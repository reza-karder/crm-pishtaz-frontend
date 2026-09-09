import * as yup from "yup"

const signinSchema = yup.object({
  email: yup.string().required("ایمیل اجباری است").email("ایمیل معتبر نمی باشد"),
  password: yup.string().required("رمز عبور اجباری است")
})

export {
  signinSchema
}