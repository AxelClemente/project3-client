import { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import placeholderProfilePicture from "../images/avatar.png";

const ProfilePage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const { isLoggedIn, user, setUser } = useContext(AuthContext);

  const handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();

    // imageUrl=> this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    // service
    //   .uploadImage(uploadData)
    axios
      .post("http://localhost:5005/api/upload", uploadData)
      .then((response) => {
        // console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.data.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");
    axios
      .put(
        "http://localhost:5005/api/users",
        { profilePicture: imageUrl },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        console.log(" put response data", response.data);
        setUser(response.data);
        setImageUrl("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {user && (
        <>
          <h1>Hi {user.username} this is your profile page! </h1>

          {isLoggedIn && (
            <>
              <p>Welcome back {user.username}!</p>
              <br />
              <img
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : placeholderProfilePicture
                }
                alt={"User's Profile"}
                className="profilePicture"
              />
              <br />

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
            </>
          )}
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to={"/signup"}>
            {" "}
            <button>Sign Up</button>{" "}
          </Link>
          <Link to={"/login"}>
            {" "}
            <button>Login</button>{" "}
          </Link>
        </>
      )}
    </div>
  );
};

export default ProfilePage;