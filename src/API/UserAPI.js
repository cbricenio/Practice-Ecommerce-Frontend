import axios from "axios";

export const registerUser = async (data) => {
  try {
    const response = await axios.post("/register", data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const authenticateUser = async (email, password) => {
  try {
    const data = {
      email: email,
      password: password,
    };
    const response = await axios.post("/authenticate", data);
    console.log("from api", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const authenticateAdmin = async (email, password) => {
  try {
    const data = {
      email: email,
      password: password,
    };
    const response = await axios.post("/admin/authenticate", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
