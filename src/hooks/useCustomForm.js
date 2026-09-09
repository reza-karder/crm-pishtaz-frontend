import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function useCustomForm(intialFormData, validatorSchema) {
	const { handleSubmit, formState, ...props } = useForm({
		defaultValues: intialFormData,
		mode: "onChange",
		reValidateMode: "onSubmit",
		resolver: yupResolver(validatorSchema),
	});

	return {
		onSubmit: handleSubmit,
		errors: formState.errors,
		touchedFields: formState.touchedFields,
		...props,
	};
}

export default useCustomForm;
