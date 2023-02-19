import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext }  from "react";
import axios from 'axios';
import { RiUserHeartLine, RiTimerLine, RiWalkFill, RiHeartFill, RiStarLine, RiStarSFill} from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';



const StrollList = () => {
    const [strolls, setStrolls] = useState([]);

    const { user } = useContext(AuthContext);

    const [isStrollAdded, setIsStrollAdded] = useState(false);

    const [hoveredStarIndex, setHoveredStarIndex] = useState(null);

    const [rating, setRating] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5005/strolls')
            .then((response) => {
                // console.log('response.data', response.data)
                setStrolls(response.data)
            })
            .catch(error => {
                console.error(error);
            });
        
    },[]);

    const handleFavoritesClick = (strollId) => {
        axios.post(`http://localhost:5005/api/${user._id}`, {
          strollId: strollId
        })
        .then((response) => {
          const updatedUser = response.data;
          setStrolls((prevStrolls) => {
            return prevStrolls.map((stroll) => {
              if (stroll._id === strollId) {
                return {
                  ...stroll,
                  list: updatedUser.list,
                  isStrollAdded: true // set isStrollAdded to true for updated stroll
                };
              } else {
                return stroll;
              }
            });
          });
          setIsStrollAdded(true);
        })
        .catch((error) => {
          console.error(error);
        });
      };

      const renderStars = (rating, strollId) => {
        const stars = [];
      
        for (let i = 0; i < 5; i++) {
          if (i < rating) {
            stars.push(
              <RiStarSFill
                key={i}
                size={16}
                onMouseEnter={() => setHoveredStarIndex(i)}
                onMouseLeave={() => setHoveredStarIndex(null)}
                onClick={() => {
                  setRating(i + 1);
                  handleStrollRating(strollId, i + 1);
                }}
                color="currentColor"
              />
            );
          } else {
            stars.push(
              <RiStarLine
                key={i}
                size={16}
                onMouseEnter={() => setHoveredStarIndex(i)}
                onMouseLeave={() => setHoveredStarIndex(null)}
                onClick={() => {
                  setRating(i + 1);
                  handleStrollRating(strollId, i + 1);
                }}
                color="currentColor"
              />
            );
          }
        }
      
        if (hoveredStarIndex !== null) {
          for (let i = 0; i <= hoveredStarIndex; i++) {
            stars[i] = (
              <RiStarSFill
                key={i}
                size={16}
                onMouseEnter={() => setHoveredStarIndex(i)}
                onMouseLeave={() => setHoveredStarIndex(null)}
                onClick={() => {
                  setRating(i + 1);
                  handleStrollRating(strollId, i + 1);
                }}
                color="currentColor"
              />
            );
          }
        }
      
        return stars;
      };
      
      
      const handleStrollRating = (strollId, rating) => {
        console.log("strollId:", strollId);
        console.log("rating:", rating);
        axios
          .post(`http://localhost:5005/rating/${strollId}`, {
            rating,
            user: user._id,
            stroll: strollId,
          })
          .then((response) => {
            const newRating = response.data;
            // Update the stroll with the new rating in the strolls state
            setStrolls((prevStrolls) => {
              return prevStrolls.map((prevStroll) => {
                if (prevStroll._id === strollId) {
                  return {
                    ...prevStroll,
                    rating: newRating.rating,
                    numRatings: newRating.numRatings,
                  };
                } else {
                  return prevStroll;
                }
              });
            });
          })
          .catch((error) => {
            console.error(error);
          });
      };
      
      

      

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {strolls.map(stroll => {
                return (
                    <div key={stroll._id} className="bg-white shadow-1 p-5  hover:shadow-2 transition">
                        <Link to={`/strolls/${stroll._id}`}>
                            <img className="mb-8" src={stroll.img1} alt="img" />
                        </Link>

                        <div className="mb-4">

                            <div className="text-sm mb-8 flex" style={{justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="bg-customPrimary rounded-full text-white px-3">
                                    {stroll.city.charAt(0).toUpperCase() + stroll.city.slice(1)}                                   
                                </span>
                                <div className="flex gap-x-2" style={{ alignItems: 'center' }}>
                                <div className='flex text-customThird cursor-pointer'>{renderStars (rating, stroll._id)}</div>

                                    <p style={{ fontWeight: 'bold' }}>4.98</p>
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
                        <div className='flex' style={{justifyContent: 'space-between'}}>
                            <div>
                                {stroll.budget}€ avg.
                            </div>
                            <i className={`uil uil-heart-sign cursor-pointer ${stroll.isStrollAdded ? 'text-customGreen' : ''}`} onClick={() => handleFavoritesClick(stroll._id)}></i>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default StrollList
