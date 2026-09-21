import { v4 as uuid } from "uuid";
import useCustomForm from "../../../../hooks/useCustomForm";
import { customerSchema } from "../../../../utils/validators";

const INITIAL_FORM_DATA = {
	name: "",
	phonePrimary: "",
	phoneSecondary: "",
	job: "",
	email: "",
	address: "",
	notes: "",
	products: [],
	calls: [],
};

// add key to products and calls for mapping, editing, deleting
function normalizeValues(values) {
	const normalizedProducts = values.products.map((product) => ({ key: product._id, ...product, product: product.product._id }));
	const normalizedCalls = values.calls.map((call) => ({ key: call._id, ...call }));
  const normalizedJob = values.job._id

	return {
		...values,
		products: normalizedProducts,
		calls: normalizedCalls,
    job: normalizedJob
	};
}

function useCustomerForm(initialValues, onSubmit) {
	const customerForm = useCustomForm(
		initialValues ? normalizeValues(initialValues) : INITIAL_FORM_DATA,
		customerSchema,
		onSubmit
	);
	const { setFieldValue, values } = customerForm;
	const { products, calls } = values;

	const addProduct = (productData) => {
		const product = { ...productData, key: uuid() };
		setFieldValue("products", [product, ...products]);
	};

	const editProduct = (productKey, productData) => {
    console.log({products, productKey});
		const updatedProducts = products.map((product) =>
			product.key === productKey ? productData : product
		);
		setFieldValue("products", updatedProducts);
	};

	const deleteProduct = (productKey) => {
		const updatedProducts = products.filter((product) => product.key !== productKey);
		setFieldValue("products", updatedProducts);
	};

	const addCall = (callData) => {
		const call = { ...callData, key: uuid() };
		setFieldValue("calls", [call, ...calls]);
	};

	const editCall = (callKey, callData) => {
		const updatedCalls = calls.map((call) => (call.key === callKey ? callData : call));
		setFieldValue("calls", updatedCalls);
	};

	const deleteCall = (callKey) => {
		const updatedCalls = calls.filter((call) => call.key !== callKey);
		setFieldValue("calls", updatedCalls);
	};

	return {
		...customerForm,

		addProduct,
		editProduct,
		deleteProduct,

		addCall,
		editCall,
		deleteCall,
	};
}

export default useCustomerForm;
