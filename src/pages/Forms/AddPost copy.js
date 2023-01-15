import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';

const initialValues = {
  title: "",
  desc: "",
  email: ""
}
const onSubmit = formData => {
  console.log("values", formData)
}

const validateform = Yup.object({
  title: Yup.string().required("Title is Required"),
  desc: Yup.string().required("Description is Required"),
  email: Yup.string().email("Invalid Email format").required("Email is Required"),
})

function AddPost() {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: validateform,
    validateOnChange:false,
    enableReinitialize: true,
  })


  return (
    <div className="">
      <form onSubmit={e => { e.preventDefault(); formik.submitForm(e) }}>
        <h1>ADD POST HERE</h1>
        <label>TITLE</label><br />

        <input type={"text"} className="inputField" name="title"
          // onBlur={formik.handleBlur}
          // value={formik.values.title}
          // onChange={formik.handleChange} /* USE A SINGLE LINE FOR THESE THREE PROPERTIES JUST PASS IN NAME PROPERTY */
          {...formik.getFieldProps("title")}
        />
        <br />
        {(formik.errors.title && formik.touched.title) ? <p style={{ color: "red", margin: 0 }}>{formik.errors.title}</p> : null}

        <label>DESCRIPTION</label><br />
        <input type={"text"} className="inputField" name="desc"
           {...formik.getFieldProps("desc")}
          />
        <br />
        {(formik.errors.desc && formik.touched.desc) ? <p style={{ color: "red", margin: 0 }}>{formik.errors.desc}</p> : null}

        <label>EMAIL</label><br />
        <input type={"text"} className="inputField" name="email"
           {...formik.getFieldProps("email")}
          />
        <br />
        {(formik.errors.email && formik.touched.email) ? <p style={{ color: "red", margin: 0 }}>{formik.errors.email}</p> : null}
        <button style={{ marginTop: '2rem' }} >SUBMIT</button>
      </form>
    </div>
  );
}

export default AddPost