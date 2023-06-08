import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllProduct, deleteProduct } from "../../API/ProductAPI";
import { Button } from "@mui/material";
import { Grid } from "@material-ui/core";

const Home = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    getAllProduct().then(function (result) {
      console.log("result", result);
      setProductList(result);
    });
    // .then((res) => {
    //   setProductList(res.data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };

  const deleteProd = (id) => {
    console.log("id", id);
    deleteProduct(id);
    // deleteProduct(id);
    // .then((res) => {
    //   setMsg("Delete Sucessfully");
    //   init();
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };

  const addProduct = () => {
    navigate("/admin/addProduct");
  };
  const editProduct = (id) => {
    navigate(`/admin/editProduct/${id}`);
  };
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">
                <Grid container>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={10}>
                    All Product List
                  </Grid>
                  <Grid item xs={1}>
                    <Button
                      sx={{ backgroundColor: "blue", color: "white" }}
                      onClick={() => {
                        addProduct();
                      }}
                    >
                      +
                    </Button>
                  </Grid>
                </Grid>
              </div>

              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl No</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Category</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                      <tr key={num + 1}>
                        <td>{num + 1}</td>
                        <td>{p.productName}</td>
                        <td>{p.description}</td>
                        <td>{p.category}</td>
                        <td>{p.price}</td>
                        <td>{p.quantity}</td>
                        <td>
                          {/* <Link
                            to={`editProduct/${p.id}`}
                            className="btn btn-sm btn-primary"
                          >
                            Edit
                          </Link> */}
                          <Button
                            onClick={() => {
                              editProduct(p.id);
                            }}
                          >
                            Edit
                          </Button>
                          <Button onClick={() => deleteProd(p.id)}>
                            Delete
                          </Button>
                          {/* <button
                            
                            className="btn btn-sm btn-danger ms-1"
                          >
                            Delete
                          </button> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
