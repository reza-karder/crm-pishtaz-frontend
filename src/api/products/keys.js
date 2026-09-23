const PRODUCTS_KEYS = {
  GET_ALL_PRODUCTS: ["products"],
  GET_ADMIN_PRODUCTS: (params) => ["products", params],
  EDIT_PRODUCT: ["product", "edit"],
  CREATE_PRODUCT: ["product", "create"]
}

export default PRODUCTS_KEYS