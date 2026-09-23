import axiosClient from "../../lib/axiosClient";

const PRODUCTS_SERVICES = {
	getAllProducts: () => axiosClient.get("/products/all"),
	getAdminProducts: (params) => axiosClient.get(`/products/?${params}`),
  editProduct: (product) => axiosClient.patch(`/products/${product._id}`, product),
  createProduct: (product) => axiosClient.post("/products", product)
};

export default PRODUCTS_SERVICES;
