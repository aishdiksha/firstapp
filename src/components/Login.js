import { Button, TextField } from "@mui/material";
import React from "react";
import "./Login.css";
import { Formik } from "formik";

const Login = () => {
  const userForm = {
    email: "",
    password: "",
  };

  // 2. Create a function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata);
    alert(formdata);
  };

  return (
    <div className="mylogin">
      <div className="col-md-4 col-sm-6 mx-auto my-auto">
        <div className="card">
          <div className="card-body">
            <h3 className="mt-5 mb-5">Login Here</h3>

            <Formik initialValues={userForm} onSubmit={userSubmit}>
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    className="w-100 mb-4"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                  />

                  <TextField
                    label="Password"
                    variant="outlined"
                    className="w-100 mb-4"
                    id="password"
                    onChange={handleChange}
                    value={values.password}
                  />

                  <button className="btn btn-danger w-100 mt-5">Submit</button>
                  <Button
                    type="submit"
                    className="w-100 mt-3"
                    variant="contained"
                    color="warning"
                  >
                    Submit
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
