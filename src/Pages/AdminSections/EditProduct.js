import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct, getProductById } from "../../API/ProductAPI";
import { Button } from "@mui/material";

const EditProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    description: "",
    category: "",
    price: "",
    quantity: 1,
  });

  const navigate = useNavigate();
  console.log("params", useParams());
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getProductById(id).then(function (result) {
      console.log("result", result);
      setProduct(result);
      setQuantity(result.quantity);
    });
    //   .getProductById(id)
    //   .then((res) => {
    //     setProduct(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);
  console.log("prodd", product);
  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductUpdate = (e) => {
    e.preventDefault();

    editProduct(id, product);
    navigate("/admin/");
    //   .then((res) => {
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
      setProduct({ ...product, ["quantity"]: quantity - 1 });
    }
  };
  const handleIncrement = () => {
    setQuantity((prevCount) => prevCount + 1);
    setProduct({ ...product, ["quantity"]: quantity + 1 });
  };
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">Edit Product</div>

              <div className="card-body">
                <form onSubmit={(e) => ProductUpdate(e)}>
                  <div className="mb-3">
                    <label>Enter Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.productName}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Description</label>
                    <input
                      type="text"
                      name="description"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.description}
                    />
                  </div>

                  <div className="mb-3">
                    <label> Choose Category</label>
                    <select
                      id="category"
                      name="category"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.category}
                    >
                      <option value="" disabled hidden>
                        Choose here
                      </option>
                      <option value="Shoe">Shoe</option>
                      <option value="Bag">Bag</option>
                      <option value="Appliances">Appliances</option>
                      <option value="Gadgets">Gadgets</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label>Enter Price</label>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.price}
                    />
                  </div>

                  <div className="mb-3">
                    <label> Add Quantity</label>
                    <div
                      style={{
                        marginTop: 10,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{ border: "1px solid gray", marginX: 2 }}
                        onClick={handleDecrement}
                      >
                        -
                      </Button>

                      <input
                        className="text-center "
                        type="text"
                        name="quantity"
                        onChange={(e) => handleChange(e)}
                        value={product.quantity}
                        disabled
                        style={{
                          width: "30%",
                          height: 38,
                          border: "1px solid #EBEBE4",
                        }}
                      />
                      <Button
                        sx={{ border: "1px solid gray", marginX: 2 }}
                        onClick={handleIncrement}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <button className="btn btn-primary col-md-12">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
