// import { useState, useContext } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from '../context/auth.context';

// const API_URL= process.env.REACT_APP_API_URL || 'http://localhost:5005';


// const Create = () => {
//   const { user, setUser } = useContext(AuthContext);

//     const [stroll, setStroll] = useState({
      
//         title: "",
//         city: "",
//         description: "",
//         duration: "",
//         stops1: "",
//         stops2: "",
//         stops3: "",
//         stops4: "",
//         stops5: "",
//         stops6: "",
//         img1: "",
//         img2: "",
//         img3: "",
//         img4: "",
//         img5: "",
//         img6: "",
//         budget: "",
//         distance: "",
//         guide: "",
//     });
  
//     const [errorMessage, setErrorMessage] = useState(null);
  
//     const navigate = useNavigate();
  
//     const handleChange = (e) => {
//       const name = e.target.name;
//       const value = e.target.value;
  
//       setStroll({ ...stroll, [name]: value });
//     };
  
//     // const handleSubmit = (e) => {
//     //   e.preventDefault();
//     //   const userId = user._id;
//     //   // console.log(userId); // add this line to check the value of userId
      
//     //   axios.post(`${API_URL}/strolls`, { ...stroll, userId: user._id })
//     //     .then((response) => {
//     //       console.log("cual es esta respuesta????",response)
//     //       // Update the user context with the new `strollId`
//     //       setUser({
//     //         ...user,
//     //         stroll: [...user.stroll, response.data._id]
//     //       });
//     //       // Navigate to the user profile page
//     //       navigate("/profile");
//     //     })
//     //     .catch((err) => {
//     //       console.error(err);
//     //       const errorDescription = err.response.data.message;
//     //       setErrorMessage(errorDescription);
//     //     });
//     // };


// //Test to add both propertys at the same time
// const handleSubmit = (e) => {
//   e.preventDefault();
//   const userId = user._id;
  
//   // Add userId to the stroll object
//   const updatedStroll = { ...stroll, userId: user._id };

//   axios.post(`${API_URL}/strolls`, updatedStroll)
//     .then((response) => {
//       // Update the user context with the new `strollId`
//       setUser({
//         ...user,
//         stroll: [...user.stroll, response.data._id]
//       });
//       // Navigate to the user profile page
//       navigate("/profile");
//     })
//     .catch((err) => {
//       console.error(err);
//       const errorDescription = err.response.data.message;
//       setErrorMessage(errorDescription);
//     });
// };
    
  
//     return (
//         <div className="form-container">
//               <div>
//               <h1>Welcome Create your Stroll!</h1>
//               <br />
        
//               <form onSubmit={handleSubmit}>
//                 <label htmlFor="title">Title:</label>
//                 <br />
//                 <input
//                   type="text"
//                   name="title"
//                   value={stroll.title}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label htmlFor="title">Country:</label>
//                 <br />
//                 <input
//                   type="text"
//                   name="country"
//                   value={stroll.country}
//                   onChange={handleChange}
//                 />
//                 <br />
        
//                 <label htmlFor="city">City:</label>
//                 <br />
//                 <input
//                   type="text"
//                   name="city"
//                   value={stroll.city}
//                   onChange={handleChange}
//                 />
//                 <br />
        
//                 <label htmlFor="description">Description:</label>
//                 <br />
//                 <input
//                   type="text"
//                   name="description"
//                   value={stroll.description}
//                   onChange={handleChange}
//                 />
//                 <br />
        
//                 <label htmlFor="duration">Duration:</label>
//                 <br />
        
//                 <input
//                   type="number"
//                   name="duration"
//                   value={stroll.duration}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label htmlFor="stops1">stops1:</label>
//                 <br />
//                 <input
//                   type="text"
//                   name="stops1"
//                   value={stroll.stops1}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label htmlFor="stops2">stops2:</label>
//                 <br />
//                 <input
//                   type="text"
//                   name="stops2"
//                   value={stroll.stops2}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label htmlFor="stops3">stops3:</label>
//                 <br />
//                 <input
//                   type="text"
//                   name="stops3"
//                   value={stroll.stops3}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label htmlFor="stops4">stops4:</label>
//                 <br />
//                 <input
//                   type="text"
//                   name="stops4"
//                   value={stroll.stops4}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label htmlFor="stops5">stops5:</label>
//                 <br />
//                 <input
//                   type="text"
//                   name="stops5"
//                   value={stroll.stops5}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label htmlFor="stops6">stops6:</label>
//                 <br />
//                 <input
//                   type="text"
//                   name="stops6"
//                   value={stroll.stops6}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label htmlFor="img1">img1:</label>
//                 <br />
//                 <input
//                   type="file"
//                   name="img1"
//                   value={stroll.img1}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label htmlFor="img2">img2:</label>
//                 <br />
//                 <input
//                   type="file"
//                   name="img2"
//                   value={stroll.img2}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label htmlFor="img3">img3:</label>
//                 <br />
//                 <input
//                   type="file"
//                   name="img3"
//                   value={stroll.img3}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label htmlFor="img4">img4:</label>
//                 <br />
//                 <input
//                   type="file"
//                   name="img4"
//                   value={stroll.img4}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label htmlFor="img5">img5:</label>
//                 <br />
//                 <input
//                   type="file"
//                   name="img5"
//                   value={stroll.img5}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label htmlFor="img6">img6:</label>
//                 <br />
//                 <input
//                   type="file"
//                   name="img6"
//                   value={stroll.img6}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label htmlFor="budget">budget:</label>
//                 <br />
//                 <input
//                   type="number"
//                   name="budget"
//                   value={stroll.budget}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label htmlFor="distance">distance:</label>
//                 <br />
//                 <input
//                   type="number"
//                   name="distance"
//                   value={stroll.distance}
//                   onChange={handleChange}
//                 />
//                 <br />

//                 <label htmlFor="guide">guide:</label>
//                 <br />
//                 <input
//                   type="text"
//                   name="guide"
//                   value={stroll.guide}
//                   onChange={handleChange}
//                 />
//                 <br />
//                 <br />
        
//                 <button type="submit">Create Stroll</button>
//               </form>
//               {errorMessage && <p>{errorMessage}</p>}
//             </div>
//         </div>
//     );
//   };
  
//   export default Create;

// Testing!


import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/auth.context';
import "../styles/create.css";



const API_URL= process.env.REACT_APP_API_URL || 'http://localhost:5005';



const Create = () => {
  const { user, setUser } = useContext(AuthContext);
  

    const [stroll, setStroll] = useState({
      
        title: "",
        country: "",
        city: "",
        description: "",
        description1: "",
        description2: "",
        description3: "",
        description4: "",
        description5: "",
        description6: "",
        duration: "",
        stops1: "",
        stops2: "",
        stops3: "",
        stops4: "",
        stops5: "",
        stops6: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",
        img6: "",
        budget: "",
        distance: "",
        guide: "",
    });
  
    const [errorMessage, setErrorMessage] = useState(null);
  
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
  
      setStroll({ ...stroll, [name]: value });
    };
  

//Test to add both propertys at the same time
const handleSubmit = (e) => {
  e.preventDefault();
  const userId = user._id;
  
  // Add userId to the stroll object
  const updatedStroll = { ...stroll, userId: user._id };

  axios.post(`${API_URL}/strolls`, updatedStroll)
    .then((response) => {
      // Update the user context with the new `strollId`
      setUser({
        ...user,
        stroll: [...user.stroll, response.data._id]
      });
      // Navigate to the user profile page
      navigate("/strolls");
    })
    .catch((err) => {
      console.error(err);
      const errorDescription = err.response.data.message;
      setErrorMessage(errorDescription);
    });
};
    
  
    return (
        <div>

    <section class="contact section" id="contactme">

            <div class="contact-form">
                <h2 className='primaryText'>Words<span className='text-customSecondary'> paint</span> a picture</h2>
                <span className='secondaryText'>  make your <span className="test">new Stroll</span> come to life</span>
            </div>
       
        <div class="contact__container container grid">


            <form onSubmit={handleSubmit} class="contact__form grid">

                <div class="contact__inputs grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">Country</label>
                        <input type="text" name="country" value={stroll.country} onChange={handleChange} class="contact__input" placeholder="e.g. France" ></input>
                    </div>
                </div>
                <div class="contact__inputs grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">City</label>
                        <input type="text" name="city" value={stroll.city} onChange={handleChange} class="contact__input"placeholder="e.g. Paris"></input>
                    </div>
                </div>
                <div class="contact__inputs grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">Title</label>
                        <input type="text" name="title" value={stroll.title} onChange={handleChange} class="contact__input" placeholder='e.g. "Be creative"'></input>
                    </div>
                </div>
                <div class="contact__input grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">General description</label>
                        <textarea name="description" value={stroll.description} onChange={handleChange} cols="0" rows="7" class="contact__input" placeholder="e.g. Describe with passion, inspire with words..."></textarea>
                    </div>
                </div>
                <div class="contact__inputs grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">Duration (hr)</label>
                        <input type="text" name="duration" value={stroll.duration} onChange={handleChange} class="contact__input" placeholder='e.g. "6"'></input>
                    </div>
                </div>
                <div class="contact__inputs grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">Distance (km)</label>
                        <input type="text" name="distance" value={stroll.distance} onChange={handleChange} class="contact__input" placeholder='e.g. "8"'></input>
                    </div>
                </div>
                <div class="contact__inputs grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">Budget (€)</label>
                        <input type="text" name="budget" value={stroll.budget} onChange={handleChange} class="contact__input" placeholder='e.g. "120"'></input>
                    </div>
                </div>
                <div class="contact__inputs grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">Local Guide</label>
                        <input type="text" name="guide" value={stroll.guide} onChange={handleChange} class="contact__input" placeholder='e.g. "Available / No"'></input>
                    </div>
                </div>

              <div class="create-first-img">
                    <img                   
                    src="/images/1.png" alt="" width="810" />
              </div>
              <div class="contact-form">
                <h2 className='primaryText'>Now describe <span className='text-customPrimary'> 6</span> places</h2>
                <span className='secondaryText'>  Include at least  <span className="text-customGreen">2 restaurants</span> or food stops</span>
              </div>
              <div class="contact__inputs grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">Stop one</label>
                        <input type="text" name="stops1" value={stroll.stops1} onChange={handleChange} class="contact__input" placeholder='e.g. "Champs-Élysées"'></input>
                    </div>
              </div>
              <div class="contact__input grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">General description</label>
                        <textarea name="description1" value={stroll.description1} onChange={handleChange} cols="0" rows="7" class="contact__input" placeholder="e.g. Describe with passion, inspire with words..."></textarea>
                    </div>
              </div>
              <div class="contact__input grid">
                    <div class="contact__content">
                    <label for="image-upload"></label>
                    <input class="contact__input"
                    
                      type="file"
                      name="img1"
                      value={stroll.img1}
                      onChange={handleChange}
                      
                    />
                    </div>
              </div>
              <div class="contact__inputs grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">Stop two</label>
                        <input type="text" name="stops2" value={stroll.stops2} onChange={handleChange} class="contact__input" placeholder='e.g. "Champs-Élysées"'></input>
                    </div>
              </div>
              <div class="contact__input grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">General description</label>
                        <textarea name="description2" value={stroll.description2} onChange={handleChange} cols="0" rows="7" class="contact__input" placeholder="e.g. Describe with passion, inspire with words..."></textarea>
                    </div>
              </div>
              <div class="contact__input grid">
                    <div class="contact__content">
                    <label for="image-upload"></label>
                    <input class="contact__input"
                    
                      type="file"
                      name="img2"
                      value={stroll.img2}
                      onChange={handleChange}
                      
                    />
                    </div>
              </div>
              <div class="contact__inputs grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">Stop three</label>
                        <input type="text" name="stops3" value={stroll.stops3} onChange={handleChange}  class="contact__input" placeholder='e.g. "Champs-Élysées"'></input>
                    </div>
              </div>
              <div class="contact__input grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">General description</label>
                        <textarea name="description3" value={stroll.description3} onChange={handleChange} cols="0" rows="7" class="contact__input" placeholder="e.g. Describe with passion, inspire with words..."></textarea>
                    </div>
              </div>
              <div class="contact__input grid">
                    <div class="contact__content">
                    <label for="image-upload"></label>
                    <input class="contact__input"
                    
                      type="file"
                      name="img3"
                      value={stroll.img3}
                      onChange={handleChange}
                      
                    />
                    </div>
              </div>
              <div class="contact__inputs grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">Stop four</label>
                        <input type="text" name="stops4" value={stroll.stops4} onChange={handleChange} class="contact__input" placeholder='e.g. "Champs-Élysées"'></input>
                    </div>
              </div>
              <div class="contact__input grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">General description</label>
                        <textarea name="description4" value={stroll.description4} onChange={handleChange} cols="0" rows="7" class="contact__input" placeholder="e.g. Describe with passion, inspire with words..."></textarea>
                    </div>
              </div>
              <div class="contact__input grid">
                    <div class="contact__content">
                    <label for="image-upload"></label>
                    <input class="contact__input"
                    
                      type="file"
                      name="img4"
                      value={stroll.img4}
                      onChange={handleChange}
                      
                    />
                    </div>
              </div>
              <div class="contact__inputs grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">Stop five</label>
                        <input type="text" name="stops5" value={stroll.stops5} onChange={handleChange} class="contact__input" placeholder='e.g. "Champs-Élysées"'></input>
                    </div>
              </div>
              <div class="contact__input grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">General description</label>
                        <textarea name="description5" value={stroll.description5} onChange={handleChange} cols="0" rows="7" class="contact__input" placeholder="e.g. Describe with passion, inspire with words..."></textarea>
                    </div>
              </div>
              <div class="contact__input grid">
                    <div class="contact__content">
                    <label for="image-upload"></label>
                    <input class="contact__input"
                    
                      type="file"
                      name="img5"
                      value={stroll.img5}
                      onChange={handleChange}
                      
                    />
                    </div>
              </div>
              <div class="contact__inputs grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">Stop six</label>
                        <input type="text" name="stops6" value={stroll.stops6} onChange={handleChange} class="contact__input" placeholder='e.g. "Champs-Élysées"'></input>
                    </div>
              </div>
              <div class="contact__input grid">
                    <div class="contact__content">
                        <label for="" class="contact__label">General description</label>
                        <textarea name="description6" value={stroll.description6} onChange={handleChange} cols="0" rows="7" class="contact__input" placeholder="e.g. Describe with passion, inspire with words..."></textarea>
                    </div>
              </div>
              <div class="contact__input grid">
                    <div class="contact__content">
                    <label for="image-upload"></label>
                    <input class="contact__input"
                    
                      type="file"
                      name="img6"
                      value={stroll.img6}
                      onChange={handleChange}
                      
                    />
                    </div>
              </div>
               <div>
                    <button type="submit" class="button button--flex">Create Stroll</button>
               </div>       

            </form>
        </div>
    </section>
        </div>
    );
  };
  
  export default Create;