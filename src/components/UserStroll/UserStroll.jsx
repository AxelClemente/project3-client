import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import axios from 'axios';
import {
  RiUserHeartLine,
  RiTimerLine,
  RiWalkFill,
  RiStarSFill,
  RiDeleteBinLine,
  RiDeleteBin7Line
} from "react-icons/ri";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5005';

const UserStroll = () => {
  const [strolls, setStrolls] = useState([]);
  const { isLoggedIn, user, setUser } = useContext(AuthContext);


  const removeStrollFavorites = (strollId) => {
    const storedToken = localStorage.getItem('authToken');
    axios.delete(`${API_URL}/api/users/${user._id}/${strollId}`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then(response => {
      setStrolls(response.data.list);
    })
    .catch(err => console.log(err));
  }

  //Fetch the favorites strolls of the loggedIn user - return the list property of the User model.
  useEffect(() => {
    if (isLoggedIn) {
      const storedToken = localStorage.getItem('authToken');
      axios.get(`${API_URL}/api/users/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(response => {
        setStrolls(response.data.list);
      })
      .catch(err => console.log(err));
    }
  }, [isLoggedIn, user, setUser]);

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
              <span className='cursor-pointer' onClick={() => removeStrollFavorites(stroll._id)}><RiDeleteBin7Line/></span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserStroll;

