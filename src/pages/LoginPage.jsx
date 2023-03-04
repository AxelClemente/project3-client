import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import "../styles/loginPage.css"
const API_URL= process.env.REACT_APP_API_URL || 'http://localhost:5005';


const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);
  console.log(errorMessage);

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
      .post(`${API_URL}/auth/login`, user)
      .then((response) => {
        console.log("token", response.data.authToken);
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/strolls");
      })
      .catch((err) => {
        console.error(err);
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    
    // <div>
    //     <h1>Welcome to the LoginPage</h1>

    //     <form onSubmit={handleSubmit}>
    //       <label htmlFor="email">Email:</label>
    //       <br />
    //       <input
    //         type="text"
    //         name="email"
    //         value={user.email}
    //         onChange={handleChange}
    //       />
    //       <br />

    //       <label htmlFor="password">Password:</label>
    //       <br />
    //       <input
    //         type="password"
    //         name="password"
    //         value={user.password}
    //         onChange={handleChange}
    //       />
    //       <br />
    //       <br />

    //       <button type="submit">Login!</button>
    //     </form>

    //     {errorMessage && <p>{errorMessage}</p>}
    // </div>
        <div>

          <section class="contact section">
                  <div>
                    <div class="contact-form">
                        <h2 className='primaryText'><span className='text-customPrimary'>Login</span> stroller!</h2>
                        <span className='secondaryText'>  Welcome back! Sign in to continue your journey.</span>
                    </div>
                    
                    <div class="create-first-img">
                            <img                   
                            src="/images/login3.png" alt="" width="540" />
                    </div>
                  </div>

            
                  <div class="contact__container container grid">
                      <form onSubmit={handleSubmit} class="contact__form grid">
                            <div class="contact__inputs grid">
                              <div class="contact__content">
                                  <label for="" class="contact__label">Email</label>
                                  <input type="text" name="email" value={user.email} onChange={handleChange} class="contact__input" placeholder="e.g. Linda@strollapp.com" ></input>
                              </div>
                          </div>
                          <div class="contact__inputs grid">
                              <div class="contact__content">
                                  <label for="" class="contact__label">Password</label>
                                  <input type="password" name="password" value={user.password} onChange={handleChange} class="contact__input"placeholder="e.g. 8$uhFT$42"></input>
                              </div>
                          </div>
                          <div>
                              <button type="submit" class="logInButton">LogIn</button>
                          </div>   
                      </form>
                  </div>
                  {errorMessage && <p>{errorMessage}</p>}
          </section>
        </div>

    
  );
};

export default LoginPage;