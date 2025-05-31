import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitForm } from "../store/actions";

const FormPage = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm(form));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default React.memo(FormPage);