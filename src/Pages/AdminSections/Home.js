import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts, deleteProduct } from "../../API/ProductAPI";
import {
  Button,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Grid } from "@material-ui/core";
import { Container, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [sortProduct, setSortProduct] = useState("");
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    getAllProducts().then(function (result) {
      console.log("result", result);
      setProductList(result);
    });
  };

  const deleteProd = (id) => {
    console.log("id", id);
    deleteProduct(id);
  };

  // add product button navigation
  const addProduct = () => {
    navigate("/admin/addProduct");
  };

  //edit product button navigation
  const editProduct = (id) => {
    navigate(`/admin/editProduct/${id}`);
  };

  // category filter
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  function getFilteredListByCategory() {
    if (!category) {
      return productList;
    }
    return productList.filter((item) => item.category === category);
  }

  var filteredList = useMemo(getFilteredListByCategory, [
    category,
    productList,
  ]);

  console.log("category", category);

  // sort
  const handleChangeSort = (event) => {
    const options = {
      "a-z": [...productList].sort((a, b) =>
        a.productName > b.productName ? 1 : -1
      ),
      "z-a": [...productList].sort((a, b) =>
        b.productName > a.productName ? 1 : -1
      ),
      low: [...productList].sort((a, b) => a.price - b.price),
      high: [...productList].sort((a, b) => b.price - a.price),
    };
    setProductList(options[event.target.value]);
    setSortProduct(event.target.value);
  };

  // search
  useEffect(() => {
    const filtered = filteredList.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProduct(filtered);
  }, [filteredList, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">
                All Product List
              </div>
              <div className="card-header fs-3 text-center">
                <Grid container>
                  <Grid item xs={1.5}>
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-filled-label">
                        Sort
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={sortProduct}
                        onChange={handleChangeSort}
                      >
                        <MenuItem value={"a-z"}>A-Z</MenuItem>
                        <MenuItem value={"z-a"}>Z-A</MenuItem>
                        <MenuItem value={"low"}>Lowest Price</MenuItem>
                        <MenuItem value={"high"}>Highest Price</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={1.5}>
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-filled-label">
                        Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={category}
                        onChange={handleChangeCategory}
                      >
                        <MenuItem value="">
                          <em>All</em>
                        </MenuItem>
                        <MenuItem value={"Shoe"}>Shoe</MenuItem>
                        <MenuItem value={"Bag"}>Bag</MenuItem>
                        <MenuItem value={"Appliances"}>Appliances</MenuItem>
                        <MenuItem value={"Gadgets"}>Gadgets</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <Container maxWidth="md" sx={{}}>
                      <TextField
                        type="search"
                        id="search"
                        label="Search"
                        sx={{ width: 600 }}
                        value={searchQuery}
                        onChange={handleSearchChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="end">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Container>
                  </Grid>
                  <Grid item xs={3}>
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
                      <th scope="col">Image</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProduct.map((p, num) => (
                      <tr key={num + 1}>
                        <td>{p.id}</td>
                        <td>{p.productName}</td>
                        <td>{p.description}</td>
                        <td>{p.category}</td>
                        <td>{p.price}</td>
                        <td>{p.quantity}</td>
                        <td>
                          {/* <img
                            src={`/images/${p.image}`}
                            style={{ width: "100px" }}
                          /> */}
                        </td>

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
