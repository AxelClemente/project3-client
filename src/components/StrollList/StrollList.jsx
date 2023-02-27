import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  RiUserHeartLine,
  RiTimerLine,
  RiWalkFill,
  RiStarSFill,
} from "react-icons/ri";
// import { useParams } from 'react-router-dom';
import { AuthContext } from "../../context/auth.context";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

const StrollList = () => {

  const [strolls, setStrolls] = useState([]);
  const { user } = useContext(AuthContext);
  const [isStrollAdded, setIsStrollAdded] = useState(false);
  const [averageRatings, setAverageRatings] = useState({});

  // console.log("the user is:",user)
  useEffect(() => {
    axios
      .get(`${API_URL}/strolls`)
      .then((response) => {
        // console.log('response.data', response.data)
        setStrolls(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleFavoritesClick = (strollId) => {
    axios
      .post(`${API_URL}/api/${user._id}`, {
        strollId: strollId,
      })
      .then((response) => {
        const updatedUser = response.data;
        setStrolls((prevStrolls) => {
          return prevStrolls.map((stroll) => {
            if (stroll._id === strollId) {
              return {
                ...stroll,
                list: updatedUser.list,
                isStrollAdded: true, // set isStrollAdded to true for updated stroll
              };
            } else {
              return stroll;
            }
          });
        });
        console.log(isStrollAdded);
        setIsStrollAdded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getAverageRating = (strollId) => {
    axios
      .get(`${API_URL}/rating/strolls/${strollId}/rating`)
      .then((response) => {
        const { averageRating } = response.data;
        setAverageRatings((prevState) => ({
          ...prevState,
          [strollId]: averageRating,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    strolls.forEach((stroll) => {
      if (!averageRatings[stroll._id]) {
        getAverageRating(stroll._id);
      }
    });
  }, [strolls]);

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
                  <p style={{ fontWeight: "bold" }}>
                    {averageRatings[stroll._id] || 0}
                  </p>
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
              {/* <Link to={`/strolls/${stroll._id}`}>
                {stroll.title.charAt(0).toUpperCase() + stroll.title.slice(1)}
              </Link> */}
            </div>
            <div className="flex" style={{ justifyContent: "space-between" }}>
              <div>{stroll.budget}€ avg.</div>
              <i
                className={`uil uil-heart-sign cursor-pointer ${
                  stroll.isStrollAdded ? "text-customGreen" : ""
                }`}
                onClick={() => handleFavoritesClick(stroll._id)}
              ></i>
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StrollList;
