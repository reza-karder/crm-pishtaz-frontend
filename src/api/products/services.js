import axiosClient from "../../lib/axiosClient";

const PRODUCTS_SERVICES = {
	getAllProducts: () => axiosClient.get("/products/all"),
	getAdminProducts: (params) => axiosClient.get(`/products/?${params}`),
};

export default PRODUCTS_SERVICES;
