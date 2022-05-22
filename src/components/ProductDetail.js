import { Button, TextField } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import "./ProductDetail.css";

const ProductDetail = () => {
  // 1. Create a form object which should match with model fields
  const userForm = {
    productname : "",
    quality : "",
    price : "",
    manufacturing: "",
  };

  // 2. Create a function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata);
    // alert(formdata);
  // to send request on backend
  // 1. url
  // 2. request method
  // 3.data
  // 4.data format
    
  // fetch work to connect both frontend and backend
   fetch('http://localhost:5000/user/add',{
     method:'POST',
     body:JSON.stringify(formdata),//convert javascript to json
     headers:{
       "Content-Type":"application/json",
     },
   }).then( (res) =>{
       if(res.status === 200){
         console.log("data saved!");
         Swal.fire({
           icon: "success",
           title: "success",
           text: "Submit Successful!!"
         })
       }
    });
};

 
  //   3. use Formik component

  return (    

    <div className="container">
      <h1>Fill the Form</h1>
      <hr className="mb-5" />
      
      <Formik initialValues={userForm} onSubmit={userSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="ProductName"
              variant="outlined"
              className="w-100 mb-4"
              id="productname"
              onChange={handleChange}
              value={values.product}
            />

            <TextField
              label="Manufacturing"
              variant="outlined"
              className="w-100 mb-4"
              id="manufacturing"
              onChange={handleChange}
              value={values.manufacturing}
            />

            <TextField
              label="Quality"
              variant="outlined"
              className="w-100 mb-4"
              id="quality"
              onChange={handleChange}
              value={values.quality}
            />
            
            <TextField
              label="Price"
              variant="outlined"
              className="w-100 mb-4"
              id="price"
              onChange={handleChange}
              value={values.price}
            />

            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        )}
      </Formik>
      </div>  
  );
};



export default ProductDetail;

// react component hmesa capital letter me hona chahiye
// react me tags small letter me hona chahiye