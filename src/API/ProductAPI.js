import axios from "axios";

// const API_URL = "http://localhost:8080";

export const saveProduct = async (data) => {
  try {
    const response = await axios.post("/saveProduct", data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllProduct = async () => {
  try {
    const response = await axios.get("/getAllProducts");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get("/" + id);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete("/deleteProduct/" + id);
    console.log("Successfully deleted");
    window.location.reload();
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const editProduct = async (id, data) => {
  try {
    const response = await axios.put("/editProduct/" + id, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// class ProductAPI {
//   saveProduct(product) {
//     return axios.post("/saveProduct", product);
//   }

//   getAllProduct() {
//     return axios.get("/");
//   }

//   getProductById(id) {
//     return axios.get("/" + id);
//   }

//   deleteProduct(id) {
//     return axios.get("/deleteProduct/" + id);
//   }

//   editProduct(product) {
//     return axios.post("/editProduct/" + product.id, product);
//   }
// }

// export default new ProductAPI();
