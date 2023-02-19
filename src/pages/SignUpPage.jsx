import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    country: "",
    city: "",
    profilePicture: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5005/auth/signup", user)
      .then(() => navigate("/login"))
      .catch((err) => {
        console.error(err);
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <h1>Welcome Stroller to the Sign Up Page!</h1>
      <br />

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="country">Country:</label>
        <br />
        <input
          type="text"
          name="country"
          value={user.country}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="city">City:</label>
        <br />

        <input
          type="text"
          name="city"
          value={user.city}
          onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit">Create my account</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default SignUpPage;