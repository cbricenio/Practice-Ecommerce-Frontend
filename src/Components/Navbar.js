import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Route, Routes, Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const navigation = [
  { name: "Dashboard", href: "/user" },
  { name: "Products", href: "/user/products" },
  { name: "Cart", href: "/user/cart" },
];

function Navbar() {
  return (
    <>
      <Box>
        <AppBar>
          <Toolbar>
            {/* <Box> */}
            <Grid container>
              {navigation.map((data) => (
                <Grid
                  key={data.name}
                  item
                  xs={4}
                  sm={4}
                  md={4}
                  sx={{ textAlign: "center" }}
                >
                  {/* <Button sx={{ color: "#fff" }}> */}
                  <Link
                    key={data.name}
                    to={data.href}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {data.name}
                  </Link>
                  {/* </Button> */}
                </Grid>
              ))}
            </Grid>
            {/* </Box> */}
          </Toolbar>
        </AppBar>

        <Toolbar />
      </Box>
    </>
  );
}

export default Navbar;
