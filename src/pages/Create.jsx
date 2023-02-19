import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Create = () => {
    const [stroll, setStroll] = useState({
        title: "",
        city: "",
        description: "",
        duration: "",
      city: "",
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
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:5005/strolls", stroll)
        .then(() => navigate("/profile"))
        .catch((err) => {
          console.error(err);
          const errorDescription = err.response.data.message;
          setErrorMessage(errorDescription);
        });
    };
  
    return (
      <div>
        <h1>Welcome Create your Stroll!</h1>
        <br />
  
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            name="title"
            value={stroll.title}
            onChange={handleChange}
          />
          <br />
  
          <label htmlFor="city">City:</label>
          <br />
          <input
            type="text"
            name="city"
            value={stroll.city}
            onChange={handleChange}
          />
          <br />
  
          <label htmlFor="description">Description:</label>
          <br />
          <input
            type="text"
            name="description"
            value={stroll.description}
            onChange={handleChange}
          />
          <br />
  
          <label htmlFor="duration">Duration:</label>
          <br />
  
          <input
            type="number"
            name="duration"
            value={stroll.duration}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="stops1">stops1:</label>
          <br />
          <input
            type="text"
            name="stops1"
            value={stroll.stops1}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="stops2">stops2:</label>
          <br />
          <input
            type="text"
            name="stops2"
            value={stroll.stops2}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="stops3">stops3:</label>
          <br />
          <input
            type="text"
            name="stops3"
            value={stroll.stops3}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="stops4">stops4:</label>
          <br />
          <input
            type="text"
            name="stops4"
            value={stroll.stops4}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="stops5">stops5:</label>
          <br />
          <input
            type="text"
            name="stops5"
            value={stroll.stops5}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="stops6">stops6:</label>
          <br />
          <input
            type="text"
            name="stops6"
            value={stroll.stops6}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="img1">img1:</label>
          <br />
          <input
            type="file"
            name="img1"
            value={stroll.img1}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="img2">img2:</label>
          <br />
          <input
            type="file"
            name="img2"
            value={stroll.img2}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="img3">img3:</label>
          <br />
          <input
            type="file"
            name="img3"
            value={stroll.img3}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="img4">img4:</label>
          <br />
          <input
            type="file"
            name="img4"
            value={stroll.img4}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="img5">img5:</label>
          <br />
          <input
            type="file"
            name="img5"
            value={stroll.img5}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="img6">img6:</label>
          <br />
          <input
            type="file"
            name="img6"
            value={stroll.img6}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="budget">budget:</label>
          <br />
          <input
            type="number"
            name="budget"
            value={stroll.budget}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="distance">distance:</label>
          <br />
          <input
            type="number"
            name="distance"
            value={stroll.distance}
            onChange={handleChange}
          />
          <br />

          <label htmlFor="guide">guide:</label>
          <br />
          <input
            type="text"
            name="guide"
            value={stroll.guide}
            onChange={handleChange}
          />
          <br />
          <br />
  
          <button type="submit">Create Stroll</button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  };
  
  export default Create;