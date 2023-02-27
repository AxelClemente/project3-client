import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL= process.env.REACT_APP_API_URL || 'http://localhost:5005';


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
      .post(`${API_URL}/auth/signup`, user)
      .then(() => navigate("/login"))
      .catch((err) => {
        console.error(err);
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    // <div>
    //   <h1>Welcome Stroller to the Sign Up Page!</h1>
    //   <br />

    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="email">Email:</label>
    //     <br />
    //     <input
    //       type="text"
    //       name="email"
    //       value={user.email}
    //       onChange={handleChange}
    //     />
    //     <br />

    //     <label htmlFor="username">Username:</label>
    //     <br />
    //     <input
    //       type="text"
    //       name="username"
    //       value={user.username}
    //       onChange={handleChange}
    //     />
    //     <br />

    //     <label htmlFor="password">Password:</label>
    //     <br />
    //     <input
    //       type="password"
    //       name="password"
    //       value={user.password}
    //       onChange={handleChange}
    //     />
    //     <br />

    //     <label htmlFor="country">Country:</label>
    //     <br />
    //     <input
    //       type="text"
    //       name="country"
    //       value={user.country}
    //       onChange={handleChange}
    //     />
    //     <br />

    //     <label htmlFor="city">City:</label>
    //     <br />

    //     <input
    //       type="text"
    //       name="city"
    //       value={user.city}
    //       onChange={handleChange}
    //     />
    //     <br />
    //     <br />

    //     <button type="submit">Create my account</button>
    //   </form>
    //   {errorMessage && <p>{errorMessage}</p>}
    // </div>
    <div>

    <section class="contact section">
            <div>
              <div class="contact-form">
                  <h2 className='primaryText'><span className='text-customPrimary'>Signup</span> Account!</h2>
                  <span className='secondaryText'>  Ready to discover new horizons?</span>
              </div>
              
              <div class="create-first-img">
                      <img                   
                      src="/images/loginImage.png" alt="" width="540" />
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
                            <label for="" class="contact__label">Username</label>
                            <input type="text" name="username" value={user.username} onChange={handleChange} class="contact__input" placeholder="e.g. LindaStroller" ></input>
                        </div>
                    </div>
                    <div class="contact__inputs grid">
                        <div class="contact__content">
                            <label for="" class="contact__label">Password</label>
                            <input type="text" name="password" value={user.password} onChange={handleChange} class="contact__input" placeholder="e.g. 8$uhFT$42" ></input>
                        </div>
                    </div>
                    <div class="contact__inputs grid">
                        <div class="contact__content">
                            <label for="" class="contact__label">Country</label>
                            <input type="text" name="country" value={user.country} onChange={handleChange} class="contact__input" placeholder="e.g. Spain" ></input>
                        </div>
                    </div>
                    <div class="contact__inputs grid">
                        <div class="contact__content">
                            <label for="" class="contact__label">City</label>
                            <input type="text" name="city" value={user.city} onChange={handleChange} class="contact__input" placeholder="e.g. Madrid" ></input>
                        </div>
                    </div>
                    
                    <div>
                        <button type="submit" class="logInButton">Signup</button>
                    </div>

                </form>
            </div>

    </section>
  </div>
  );
};

export default SignUpPage;