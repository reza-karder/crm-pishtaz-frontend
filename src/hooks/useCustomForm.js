import { useFormik } from "formik";

function useCustomForm(initialFormData, validatorSchema, onSubmit) {
	const form = useFormik({
		initialValues: initialFormData,
		validationSchema: validatorSchema,
		validateOnChange: true,
		validateOnBlur: true,
    onSubmit
	});

	const getErrorMessage = (fieldName) => form.touched[fieldName] && form.errors[fieldName];

	return {
		...form,
    onSubmit: form.handleSubmit,
		getErrorMessage,
	};
}
export default useCustomForm;
