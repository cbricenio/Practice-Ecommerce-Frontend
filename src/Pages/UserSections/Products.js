import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import sampleImg from "../../Images/sample image.jpg";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [style, setStyle] = useState({ display: "none" });
  const viewProduct = () => {
    navigate("/user/viewProduct/");
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={4} sx={{ padding: 10 }}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <img
              src={sampleImg}
              width={280}
              height={400}
              style={{ borderRadius: 10 }}
              onMouseEnter={(e) => {
                setStyle({
                  display: "block",
                });
              }}
              onMouseLeave={(e) => {
                setStyle({ display: "none" });
              }}
            />
            <div style={{ display: "flex", marginTop: -40 }}>
              <button
                style={style}
                onClick={viewProduct}
                onMouseEnter={(e) => {
                  setStyle({
                    display: "block",
                  });
                }}
              >
                View Product
              </button>

              <button
                style={style}
                onMouseEnter={(e) => {
                  setStyle({
                    display: "block",
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Typography>Sample Product</Typography>

            <Typography>$20</Typography>
          </Grid>
          <Grid container sx={{ marginTop: 2, textAlign: "center" }}></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
