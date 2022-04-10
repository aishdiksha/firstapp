import { Button, TextField } from "@mui/material";
import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="mylogin">
      <div className="col-md-4 col-sm-6 mx-auto my-auto">
        <div className="card">
          <div className="card-body">
            <h3 className="mt-5 mb-5">Login Here</h3>

            <div className="form-floating mt-3">
              <input className="form-control" placeholder="Email" />
              <label>Email</label>
            </div>

            <div className="form-floating mt-3">
              <input className="form-control" placeholder="Password" />
              <label>Password</label>
            </div>

            {/* <TextField
              variant="outlined"
              className="w-100 mt-3"
              label="Password"
              type="password"
              helperText="enter a strong password"
            /> */}

            <button className="btn btn-danger w-100 mt-5">Submit</button>
            <Button className="w-100 mt-3" variant="contained" color="warning">
              Material Button
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
