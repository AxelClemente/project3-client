import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .post("http://localhost:5005/auth/login", user)
      .then((response) => {
        console.log("token", response.data.authToken);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/stroll");
      })
      .catch((err) => {
        console.error(err);
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
      <div>
        <h1>Welcome to the LoginPage</h1>

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

          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <br />
          <br />

          <button type="submit">Login!</button>
        </form>

        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </>
  );
};

export default LoginPage;