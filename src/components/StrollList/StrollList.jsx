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
import FilterCity from "../Search/FilterCity";
import FilterCountry from "../Search/FilterCountry";
import SearchCity from "../Search/SearchCity";
import SearchCountry from "../Search/SearchCountry";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

const StrollList = () => {
  const [strolls, setStrolls] = useState([]);
  const [filterStrolls, setFilterStrolls] = useState([]);
  const { user } = useContext(AuthContext);
  const [isStrollAdded, setIsStrollAdded] = useState(false);
  const [averageRatings, setAverageRatings] = useState({});
  const [strollsData, setStrollsData] = useState([]);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMediumScreen = screenSize >= 800;

  // console.log(strolls);

  // search stroll by city
  const searchCityStrollList = (str) => {
    let filteredStrolls;

    if (str === "") {
      filteredStrolls = strollsData;

      setStrolls(filteredStrolls);
    } else {
      filteredStrolls = strollsData.filter((stroll) => {
        return stroll.city.toLowerCase().includes(str.toLowerCase());
      });

      setStrolls(filteredStrolls);
    }
  };

  // search stroll by country
  const searchCountryStrollList = (str) => {
    let filteredStrolls;

    if (str === "") {
      filteredStrolls = strollsData;

      setStrolls(filteredStrolls);
    } else {
      filteredStrolls = strollsData.filter((stroll) => {
        return stroll.country.toLowerCase().includes(str.toLowerCase());
      });

      setStrolls(filteredStrolls);
    }
  };

  // filter by city
  const filterCityStrollList = (str) => {
    let filteredStrolls;

    if (str === "All") {
      filteredStrolls = strollsData;

      console.log("filteredStrolls", filteredStrolls);
      setStrolls(filteredStrolls);
    } else {
      filteredStrolls = strollsData.filter((stroll) => {
        return stroll?.city.toLowerCase() === str.toLowerCase();
      });

      console.log("filteredStrolls", filteredStrolls);
      setStrolls(filteredStrolls);
    }
  };

  // filter by country
  const filterCountryStrollList = (str) => {
    let filteredStrolls;

    if (str === "All") {
      filteredStrolls = strollsData;

      console.log("filteredStrolls", filteredStrolls);
      setStrolls(filteredStrolls);
    } else {
      filteredStrolls = strollsData.filter((stroll) => {
        return stroll?.country.toLowerCase() === str.toLowerCase();
      });

      console.log("filteredStrolls", filteredStrolls);
      setStrolls(filteredStrolls);
    }
  };

  // console.log("the user is:", user);
  useEffect(() => {
    axios
      .get(`${API_URL}/strolls`)
      .then((response) => {
        // console.log('response.data', response.data)
        setStrolls(response.data);
        setFilterStrolls(response.data);
        setStrollsData(response.data);
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
      // .catch((error) => {
      //   console.error(error);
      // });
      .catch((error) => {
        console.error(`Error fetching average rating for strolllllllll ${strollId}: ${error.message}`);
      });
  };

  useEffect(() => {
    // Keep track of strolls for which we have already fetched the average rating
    const fetchedStrolls = Object.keys(averageRatings);
    
    // Filter the strolls that we haven't fetched yet
    const strollsToFetch = strolls.filter(stroll => !fetchedStrolls.includes(stroll._id));
  
    // Fetch the average rating for each stroll that we haven't fetched yet
    strollsToFetch.forEach((stroll) => {
      getAverageRating(stroll._id);
    });
  }, [strolls, averageRatings]);
  

  return (
    <div>
      <div className="ResearchFilterBar px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
        <SearchCountry searchCountryStrollList={searchCountryStrollList} />
        <br />
        <SearchCity searchCityStrollList={searchCityStrollList} />
        <br />

        <FilterCountry
          filterCountryStrollList={filterCountryStrollList}
          strolls={filterStrolls}
        />
        <br />
        <FilterCity
          filterCityStrollList={filterCityStrollList}
          strolls={filterStrolls}
        />
        <br />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {strolls
          .sort((a, b) => a.country.localeCompare(b.country))
          .map((stroll) => {
            return (
              <div
                key={stroll._id}
                className="bg-white shadow-1 p-5  hover:shadow-2 transition"
              >
                <Link to={`/strolls/${stroll._id}`}>
                  <img className="mb-8" src={stroll.img1} style={
                isMediumScreen
                  ? { width: "700px", height: "400px" }
                  : { width: "100%", height: "auto" }
              } alt="img" />
                </Link>

                <div className="mb-4">
                  <div
                    className="text-sm mb-8 flex"
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {/* <span className="bg-customPrimary rounded-full text-white px-3">
                      {stroll.country}
                    </span> */}

                    <span className="bg-customPrimary rounded-full text-white px-3">
                      {stroll.city.charAt(0).toUpperCase() +
                        stroll.city.slice(1)}
                    </span>
                    <div
                      className="flex gap-x-2"
                      style={{ alignItems: "center" }}
                    >
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
                  <Link to={`/strolls/${stroll._id}`}>
                    {stroll.title.charAt(0).toUpperCase() +
                      stroll.title.slice(1)}
                  </Link>
                </div>
                <div
                  className="flex"
                  style={{ justifyContent: "space-between" }}
                >
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
    </div>
  );
};

export default StrollList;

