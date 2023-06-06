import React, { useEffect, useState } from "react";
import { saveProduct } from "../../API/ProductAPI";
import ImageUploading from "react-images-uploading";
import { Button } from "@mui/material";

const AddProduct = () => {
  // upload image
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  console.log("image", images);

  const handleFileChange = (event) => {
    // const file = event.target.files?.[0] || null;
    // setFormValues((prevValues) => ({
    //   ...prevValues,
    //   productImage: file,
    // }));
  };

  ////////////////////////////

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    category: "",
    price: "",
    quantity: 1,
  });

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

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setProduct({ ...product, [e.target.name]: value });
  };
  const ProductRegister = (e) => {
    e.preventDefault();
    console.log("save", product);
    saveProduct(product);
    //   .then((res) => {
    //     console.log("Product Added Successfully");
    //     setMsg("Product Added Successfully");
    //     setProduct({
    //       productName: "",
    //       description: "",
    //       price: "",
    //       status: "",
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">Add Product</div>

              <div className="card-body">
                <form onSubmit={(e) => ProductRegister(e)}>
                  <div className="mb-3">
                    <label> Enter Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.productName}
                    />
                  </div>

                  <div className="mb-3">
                    <label> Enter Description</label>
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
                      <option value="volvo">Shoe</option>
                      <option value="saab">Bag</option>
                      <option value="fiat">Appliances</option>
                      <option value="audi">Gadgets</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label> Enter Price</label>
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
                        value={quantity}
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
                  <button className="btn btn-primary col-md-12">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* upload image */}
      {/* <div className="App">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div> */}
      {/* <div className="w-full md:w-1/2 p-0">
        <label for="grid-zip">Upload Image</label>
        <input
          type="file"
          id="productImage"
          name="productImage"
          onChange={handleFileChange}
          accept="image/*"
          placeholder=".mp4"
        />
      </div> */}
    </>
  );
};

export default AddProduct;
