import axios from "axios";

// const API_URL = "http://localhost:8080";

export const saveProduct = async (data) => {
  try {
    const response = await axios.post("/admin/saveProduct", data, {
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await axios.get("/admin/getAllProducts", {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get("/admin/getProductById/" + id, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete("/admin/deleteProduct/" + id, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
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
    const response = await axios.put("/admin/editProduct/" + id, data, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
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
