import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form , Field, ErrorMessage} from "formik";
import * as Yup from 'yup';

const initialValues = {
  title: "",
  desc: "",
  email: "",
  comments: "",
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

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={ onSubmit}
      validationSchema={validateform}
    >
      <Form>
        <h1>ADD POST HERE</h1>
        <label>TITLE</label><br />

        <Field className="inputField" name="title"/>
        <ErrorMessage className="errorField" component={"div"} name="title"/>
        <br />
        <label>DESCRIPTION</label><br />
        <Field className="inputField" name="desc"/>
        <ErrorMessage className="errorField" component={"div"} name="desc"/>
        <br />

        <label>EMAIL</label><br />
        <Field className="inputField" name="email"/>
        <ErrorMessage className="errorField" component={"div"} name="email"/>
        <br />

        <label>COMMENTS</label><br />
        <Field as="textarea" className="inputField" name="comments"/>
        <ErrorMessage name="comments"/>
        <br />

        <button type="submit" style={{ marginTop: '2rem' }} >SUBMIT</button>
      </Form>
    </Formik>
  );
}

export default AddPost