import axios from "axios";
import React, { useState } from "react";

function FullDetail() {
  const url = "http://localhost:5002/api/get";

  const originalValues = { name: "", email: "", mobile: "", project: "" };
  const [formValues, setFormValues] = useState(originalValues);

  const [result, setResult] = useState();

  const [add, setAdd] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Project: "",
  });

  const change = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };
  const submit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        Name: formValues.name,
        Email: formValues.email,
        Mobile: formValues.mobile,
        Project: formValues.project,
      })
      .then((res) => {
        console.log(res);
        if (formValues.mobile === res.data.Mobile) {
          alert(`${res.data.Mobile} number is already registered`);
        } else {
          alert("Successfully Registered");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="fulldetail">
      <form onSubmit={submit}>
        <input
          type="text"
          required
          id="name"
          value={formValues.name}
          placeholder="Enter Your Name"
          onChange={change}
        />
        <input
          type="email"
          required
          id="email"
          value={formValues.email}
          placeholder="Enter Your email"
          onChange={change}
        />
        <input
          type="number"
          required
          id="mobile"
          value={formValues.mobile}
          placeholder="Enter Your Phone number"
          onChange={change}
        />
        <select id="project" required onChange={change}>
          <option onChange={change} value={formValues.project}>
            ---Select---
          </option>
          <option onChange={change} value={formValues.project}>
            Project 1
          </option>
          <option onChange={change} value={formValues.project}>
            Project 2
          </option>
          <option onChange={change} value={formValues.project}>
            Project 3
          </option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FullDetail;
