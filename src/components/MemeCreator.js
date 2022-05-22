import { TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";

const memeCreator = () => {
  const memeForm = {
    title: "",
    author: "",
    file: "",
  };

  const memeSubmit = (formdata) => {
    console.log(formdata);
    // 1. url
    // 2. request method
    // 3. data to send
    // 4 . data format
  };

  return (
    <div>
      <h1>memeCreator</h1>

      <Formik initialValues={memeForm} onSubmit={memeSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Meme Title"
              id="title"
              value={values.title}
              onChange={handleChange}
            />

            <TextField
              label="Meme Author"
              id="author"
              value={values.author}
              onChange={handleChange}
            />

            <button type="submit" variant="contained">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default memeCreator;
