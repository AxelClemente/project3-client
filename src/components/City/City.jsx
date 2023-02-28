import React, { useState, useEffect, useMemo } from 'react';
import { RiMapPinLine, RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri';
import axios from 'axios';
import {
  RiUserHeartLine,
  RiTimerLine,
  RiWalkFill,
  RiStarSFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

const City = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [strolls, setStrolls] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/strolls`)
      .then((response) => {
        const cities = [...new Set(response.data.map(stroll => stroll.city))];
        setCities(cities);
        setSelectedCity(cities); // set the selected city to the first city in the array
        setStrolls(response.data); // store the strolls in state
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setIsOpen(false);
  };

  const filteredStrolls = useMemo(() => {
    if (selectedCity) {
      return strolls.filter(stroll => stroll.city === selectedCity);
    } else {
      return strolls;
    }
  }, [strolls, selectedCity]);

  return (
    <Menu as='div' className='dropdown relative'>
  <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
    <RiMapPinLine className='dropdown-icon-custom' />
    <div>
      <div className='text-[15px] font-medium leading-tight'>City</div>
      <div className='text-[13px]'>Select your place</div>
    </div>
    {isOpen ? (
      <RiArrowDropUpLine className='dropdown-icon-custom' />
    ) : (
      <RiArrowDropDownLine className='dropdown-icon-custom' />
    )}
  </Menu.Button>

  <Transition
    show={isOpen}
    enter='transition duration-100 ease-out'
    enterFrom='transform scale-95 opacity-0'
    enterTo='transform scale-100 opacity-100'
    leave='transition duration-75 ease-out'
    leaveFrom='transform scale-100 opacity-100'
    leaveTo='transform scale-95 opacity-0'
  >
    <Menu.Items static className='dropdown-menu absolute w-full bg-white shadow-lg rounded-lg py-1'>
      {cities.map((city) => (
        <Menu.Item key={city} as='div' className='dropdown-item py-1 px-3'>
          {({ active }) => (
            <div
              className={`w-full text-left font-medium ${
                city === selectedCity ? 'text-customPrimary' : 'text-black'
              }`}
              onClick={() => handleCityClick(city)}
            >
              {city}
            </div>
          )}
        </Menu.Item>
      ))}
    </Menu.Items>
  </Transition>


  <div>
  {filteredStrolls.map(stroll => (
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
        {/* <span className="bg-customPrimary rounded-full text-white px-3">
          {stroll.city.charAt(0).toUpperCase() + stroll.city.slice(1)}
        </span> */}
        <div className="flex gap-x-2" style={{ alignItems: "center" }}>
          <div>
            <RiStarSFill />
          </div>
          {/* <p style={{ fontWeight: "bold" }}>
            {averageRatings[stroll._id] || 0}
          </p> */}
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
          {/* <i
            className={`uil uil-heart-sign cursor-pointer ${
              stroll.isStrollAdded ? "text-customGreen" : ""
            }`}
            onClick={() => handleFavoritesClick(stroll._id)}
          ></i> */}
          
        </div>
      </div>
      ))}
    </div>
  </Menu>
);

  
};

export default City;
