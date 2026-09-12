import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function useCustomForm(initialFormData, validatorSchema) {
	const form = useForm({
		defaultValues: initialFormData,
		mode: "onChange",
		reValidateMode: "onSubmit",
		resolver: yupResolver(validatorSchema),
	});

	const getErrorMessage = (fieldName) =>
		form.formState.touchedFields[fieldName] && form.formState.errors[fieldName]?.message;

	return {
		...form,
		onSubmit: form.handleSubmit,
		getErrorMessage,
	};
}
export default useCustomForm;
