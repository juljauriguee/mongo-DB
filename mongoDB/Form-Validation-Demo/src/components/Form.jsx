import { useState } from "react";

export default function Form() {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (formData.email && !emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (formData.password && formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        return newErrors;
        };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
        setSuccess("Form submitted successfully!");

        setFormData({
            name: "",
            email: "",
            password: ""
        });

        setErrors({});
        } else {
        setSuccess("");
        }
    };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
        {success &&<p style={{ color: "green" }}>{success}</p>}
      <label>Name</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

      <label>Email</label>
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <label>Password</label>
      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter password"
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        

      <button type="submit">Submit</button>
    </form>
  );
}