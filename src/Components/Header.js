import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Route, Routes, Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const navigation = [
  { name: "Home", href: "/admin" },
  { name: "Reports", href: "/admin/reports" },
];

function Header() {
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
                  xs={6}
                  sm={6}
                  md={6}
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

export default Header;
