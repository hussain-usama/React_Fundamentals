import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
const INITTIAL_STATE = {
  title: '',
  desc: '',
}
function AddPost() {

  const [formData, setFormData] = useState({ ...INITTIAL_STATE })
  const formik=useFormik({})
  
  const handleChange = (e) => {
    try {

    } catch (error) {

    }
  }

  return (
    <div className="">
      <h1>ADD POST HERE</h1>
      <form>
        <label>TITLE</label><br />
        <input type={"text"} className="inputField" value={formData.title} onChange={handleChange} />
        <br />
        <label>DESCRIPTION</label><br />
        <input type={"text"} className="inputField" value={formData.desc} onChange={handleChange} />
        <br />
        <button style={{ marginTop: '2rem' }}>SUBMIT</button>
      </form>
    </div>
  );
}

export default AddPost