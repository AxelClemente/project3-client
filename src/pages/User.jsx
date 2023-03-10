import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context';
import { useState, useContext } from 'react';
import placeholderProfileImage from '../images/profile.png'
import axios from 'axios';
import '../pages/style.css';
const API_URL= process.env.REACT_APP_API_URL || 'http://localhost:5005';





const User = () => {
  const [imageUrl, setImageUrl] = useState("");
  const { isLoggedIn, user, setUser } = useContext(AuthContext);
  const handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
 
    const uploadData = new FormData();
 
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);
 
    // service
    //   .uploadImage(uploadData)
      axios.post(`${API_URL}/api/upload`, uploadData)
      .then(response => {
        // console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.data.fileUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");
    axios.put(`${API_URL}/api/users`, 
                                {profilePicture: imageUrl},
                                {headers: { Authorization: `Bearer ${storedToken}` }} )
          .then(response => {
            console.log(' put response data', response.data)
            setUser(response.data)
            setImageUrl('')
          })
          .catch(err => console.log(err))
  }
  return (
   
  <div className='dashboard__card'>
      {user && (
        <>
          
          {isLoggedIn && (
            <>
            
              <h2 className='primaryText dash' >Welcome <span className='text-customPrimary'>{user.username}!</span></h2>
              <br />
              <img
                  src={
                    user.profilePicture
                      ? user.profilePicture
                      : placeholderProfileImage
                  }
                  alt={"User's Profile"}
                  className="profilePicture"
                  
                  style={{ width: "100px", height: "100px" }}
                />
              <br />
              <div className='dashboard__update__form'>
                <h2>Update image form</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="file"
                    name="profilePicture"
                    onChange={(e) => handleFileUpload(e)}
                  />
                  <br />
                  <br />
                  <button type="submit">Update User Image</button>
                </form>
              </div>
              
            </>
          )}
        </>
      )}
      { !isLoggedIn && <>
        <Link to={"/signup"}><button>Signup</button></Link>
        <Link to={"/login"}><button>Login</button></Link>
      </>}
      
    </div>
  )
}
export default User


