import { Card, CardContent, Container, Grid, TextField } from "@mui/material";
import React from "react";

const ProductList = () => {
  return (
    <div>
      <header className="bg-light">
        <Container sx={{padding:"5rem 0 "}}>
          <TextField
            // className="w-100"
            sx={{width:"100%"}}
            label="Explore"
            placeholder="search your product..."
          />
        </Container>
      </header>

      <section>
          {/* <div className="row">
               <div className="col-md"></div>
          </div> */}

          <Grid Container spacing={5}>
              <Grid item md={3} sm={3} lg={4} xs={12}>
                   <Card>
                       <CardContent>
                           <h1>Column 1</h1>
                       </CardContent>
                   </Card>
              </Grid>
              <Grid item md={3} sm={3} lg={4} xs={12}>
                   <Card>
                       <CardContent>
                           <h1>Column 2</h1>
                       </CardContent>
                   </Card>
              </Grid>
              <Grid item md={3} sm={3} lg={4} xs={12}>
                   <Card>
                       <CardContent>
                           <h1>Column 3</h1>
                       </CardContent>
                   </Card>
              </Grid>
              <Grid item md={3} sm={3} lg={4} xs={12}>
                   <Card>
                       <CardContent>
                           <h1>Column 4</h1>
                       </CardContent>
                   </Card>
              </Grid>
          </Grid>
      </section>
    </div>
  );
};

export default ProductList;
