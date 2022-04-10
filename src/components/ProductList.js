import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const Navigate = useNavigate();

  const prod1 =
    "https://m.media-amazon.com/images/M/MV5BODNmNzhlYzItYjJjMC00YTUyLWJhMTQtZWRmY2JhM2RiNTljXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_.jpg";
  const prod2 = "https://parade.com/wp-content/uploads/2018/06/JWFK.jpg";
  const prod3 =
    "http://historyanswers.wpengine.com/wp-content/uploads/2016/04/Wallpaper001-1024x768.jpg";
  const prod4 =
    "https://www.jansatta.com/wp-content/uploads/2017/12/Doll-Island-Mexico.jpg";

  return (
    //  <div>
    <Paper sx={{ height: "100vh" }}>
      <header className="bg-light">
        <Container sx={{ padding: "5rem 0 " }}>
          <TextField
            // className="w-100"
            sx={{ width: "100%" }}
            label="Explore"
            placeholder="search your product..."
          />
        </Container>
      </header>

      <section>
        {/* <div className="row">
               <div className="col-md"></div>
          </div> */}

        <Container>
          <Grid container spacing={4}>
            <Grid item md={3} sm={3} xs={12}>
              <Card>
                <CardMedia component="img" image={prod1} height={170} />
                <CardContent>
                  {/* <h1>Column 1</h1> */}
                  <Typography variant="h5">Island of evil</Typography>
                  <Typography variant="caption" className="text-muted">
                    Horror
                  </Typography>
                  <Typography variant="h3" className="mt-4">
                    $22.99/-
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={3} sm={3} xs={12}>
              <Card>
                <CardMedia component="img" image={prod2} height={170} />
                <CardContent>
                  {/* <h1>Column 2</h1> */}
                  <Typography variant="h5">Jurasic park</Typography>
                  <Typography variant="caption" className="text-muted">
                    Horror
                  </Typography>
                  <Typography variant="h3" className="mt-4">
                    $27.99/-
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={(e) => Navigate("/gallery")}
                  >
                    Go to Gallery
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={3} sm={3} xs={12}>
              <Card>
                <CardMedia component="img" image={prod3} height={170} />
                <CardContent>
                  {/* <h1>Column 3</h1> */}
                  <Typography variant="h5">Days of Glory</Typography>
                  <Typography variant="caption" className="text-muted">
                    Horror
                  </Typography>
                  <Typography variant="h3" className="mt-4">
                    $25.99/-
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={3} sm={3} xs={12}>
              <Card>
                <CardMedia component="img" image={prod4} height={170} />
                <CardContent>
                  {/* <h1>Column 4</h1> */}
                  <Typography variant="h5">Island of death doll</Typography>
                  <Typography variant="caption" className="text-muted">
                    Horror
                  </Typography>
                  <Typography variant="h3" className="mt-4">
                    $24.99/-
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Paper>
    // </div>
  );
};

export default ProductList;
