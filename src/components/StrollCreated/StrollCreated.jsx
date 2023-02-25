import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  RiUserHeartLine,
  RiTimerLine,
  RiWalkFill,
  RiStarSFill,
  RiDeleteBin7Line,
} from "react-icons/ri";
import { AuthContext } from "../../context/auth.context";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

const StrollCreated = () => {
  const [strolls, setStrolls] = useState([]);
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchStrolls = async () => {
      console.log("Fetching strolls...");
      if (!user) {
        console.log("No user found");
        return;
      }
      console.log("User found", user._id);
      try {
        const response = await axios.get(`${API_URL}/strolls/user/${user._id}`);
        setStrolls(response.data.strolls);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStrolls();
  }, [user]);

  console.log("Strolls:", strolls);

  // const handleDeleteStroll = async (strollId) => {
  //   try {
  //     const response = await axios.delete(`${API_URL}/strolls/${strollId}`);
  //     if (response.status === 200) {
  //       setStrolls(strolls.filter(stroll => stroll._id !== strollId));
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  //testing if we can remove the strollId from the property stroll of the User model too
  const handleDeleteStroll = async (strollId) => {
    try {
      const response = await axios.delete(`${API_URL}/strolls/${strollId}`);
      if (response.status === 200) {
        // Remove the deleted stroll from the strolls state
        setStrolls(strolls.filter((stroll) => stroll._id !== strollId));

        // Remove the deleted stroll from the user's stroll property in the database
        const updatedUser = await axios.put(`${API_URL}/users/${user._id}`, {
          stroll: user.stroll.filter((id) => id !== strollId),
        });
        setUser(updatedUser.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {strolls.map((stroll) => {
        return (
          <div
            key={stroll._id}
            className="bg-white shadow-1 p-5  hover:shadow-2 transition"
          >
            <Link to={`/strolls/${stroll._id}`}>
              <img className="mb-8" src={stroll.img1} alt="img" />
            </Link>
            <div className="mb-4">
              <div
                className="text-sm mb-8 flex"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="bg-customPrimary rounded-full text-white px-3">
                  {stroll.city.charAt(0).toUpperCase() + stroll.city.slice(1)}
                </span>
                <div className="flex gap-x-2" style={{ alignItems: "center" }}>
                  <div>
                    <RiStarSFill />
                  </div>
                </div>
              </div>
              <div className="flex gap-x-6">
                <div className="flex items-center">
                  <RiTimerLine className="dropdown-icon-customYellow" />
                  <span className="bg-customSecondary rounded-full text-black px-3">
                    {stroll.duration}
                  </span>
                </div>
                <div className="flex items-center">
                  <RiWalkFill className="dropdown-icon-customPurple" />
                  <span className="bg-customPurple rounded-full text-white px-3">
                    {stroll.distance}
                  </span>
                </div>
                <div className="flex items-center">
                  <RiUserHeartLine className="dropdown-icon-customFour" />
                  <span className="bg-green-500 rounded-full text-white px-3">
                    {stroll.guide}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-lg font-semibold mb-2">
              <Link to={`/strolls/${stroll._id}`}>
                {stroll.title.charAt(0).toUpperCase() + stroll.title.slice(1)}
              </Link>
            </div>
            <div className="flex" style={{ justifyContent: "space-between" }}>
              <div>{stroll.budget}€ avg.</div>
              <span
                className="cursor-pointer"
                onClick={() => handleDeleteStroll(stroll._id)}
              >
                <RiDeleteBin7Line />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StrollCreated;
