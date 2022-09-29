import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const initialValues = { name: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [userName, setUserName] = useState([]);
  const [userPassword, setUserPassword] = useState([]);
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:6002/api/get")
      .then((res) => {
        let [user] = res.data.filter(
          (user) =>
            user.name == formValues.name && user.password == formValues.password
        );

        if (user) {
          navigate("details");
        } else {
          alert("User not Matched");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <h1 align="center">LOGIN FORM</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          id="name"
          value={formValues.name}
          placeholder="Enter name"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          required
          id="password"
          value={formValues.password}
          placeholder="Enter password"
          onChange={handleChange}
        />
        <br />
        <button>Login</button>
      </form>
      <h2 id="error">{error}</h2>
    </div>
  );
}

export default Login;
