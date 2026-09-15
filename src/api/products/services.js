import axiosClient from "../../lib/axiosClient";

const PRODUCTS_SERVICES = {
	getProducts: () => axiosClient.get("/products"),
};

export default PRODUCTS_SERVICES;
