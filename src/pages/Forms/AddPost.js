import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const initialValues={
  title:"",
  desc:"",
  email:""
}
const onSubmit=formData=>{
  console.log("avlues",formData)
}

const validate=formData=>{
  let error={}
  if(!formData.title){
    error.title="Required"
  }
  if(!formData.desc){
    error.desc="Required"
  }
  if(!formData.email){
    error.email="Required"
  }
  // else if(){
  //   error.email="Innvalid email"
  // }
}
function AddPost() {

  const formik=useFormik({
    initialValues,
    onSubmit,
    validate
  })
  


  return (
    <div className="">
      <form onSubmit={formik.submitForm}>
      <h1>ADD POST HERE</h1>
        <label>TITLE</label><br />
        <input type={"text"} className="inputField" name="title" value={formik.values.title} onChange={formik.handleChange} />
        <br />
        <label>DESCRIPTION</label><br />
        <input type={"text"} className="inputField" name="desc" value={formik.values.desc} onChange={formik.handleChange} />
        <br />
        <label>EMAIL</label><br />
        <input type={"text"} className="inputField" name="email" value={formik.values.email} onChange={formik.handleChange} />
        <br />
        <button style={{ marginTop: '2rem' }} >SUBMIT</button>
      </form>
    </div>
  );
}

export default AddPost