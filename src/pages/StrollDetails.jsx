// test axel 
import React from 'react'
import '../pages/style.css'
import { useState, useEffect, useContext }  from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {RiStarLine, RiStarSFill, RiWalkFill, RiTimerLine, RiUserHeartLine} from 'react-icons/ri';
import { AuthContext } from '../context/auth.context';

import User from './User';
import { margin } from '@mui/system';
const API_URL= process.env.REACT_APP_API_URL || 'http://localhost:5005';

const StrollDetails = () => {
    const [strolls, setStrolls] = useState({});
    const {id} = useParams();
    const [hoveredStarIndex, setHoveredStarIndex] = useState(null);
    const { user } = useContext(AuthContext);
    const [rated, setRated] = useState(false); // display message "Thanks for sharing your rating"
    const [rating, setRating] = useState(0);
    const [activeModal, setActiveModal] = useState(null);
    function openModal(modalClick) {
      setActiveModal(modalClick);
    }
  
    function closeModal() {
      setActiveModal(null);
    }



    useEffect(() => {
        axios.get(`${API_URL}/strolls/${id}`)
            .then(response => {
                
                setStrolls(response.data)
                // console.log('respuesta del API :', response.data)
            })
            .catch(error => {
                console.error(error);
            });
        
    },[id]);
    
    if(Object.keys(strolls).length===0){
        return <p>Loading...</p>
    }
    const renderStars = (rating, strollId) => {
        const stars = [];
      
        for (let i = 0; i < 5; i++) {
          if (i < rating) {
            stars.push(
              <RiStarSFill
                key={i}
                size={20}
                onMouseEnter={() => setHoveredStarIndex(i)}
                onMouseLeave={() => setHoveredStarIndex(null)}
                onClick={() => {
                  setRating(i + 1);
                  handleStrollRating(strollId, i + 1);
                  setRated(true);
                }}
                color="currentColor"
              />
            );
          } else {
            stars.push(
              <RiStarLine
                key={i}
                size={20}
                onMouseEnter={() => setHoveredStarIndex(i)}
                onMouseLeave={() => setHoveredStarIndex(null)}
                onClick={() => {
                  setRating(i + 1);
                  handleStrollRating(strollId, i + 1);
                  setRated(true);
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
                size={20}
                onMouseEnter={() => setHoveredStarIndex(i)}
                onMouseLeave={() => setHoveredStarIndex(null)}
                onClick={() => {
                  setRating(i + 1);
                  handleStrollRating(strollId, i + 1);
                  setRated(true);
                }}
                color="currentColor"
              />
            );
          }
        }
      
        return stars;
      };
      
      
      const handleStrollRating = (strollId, rating) => {
        axios
          .post(`${API_URL}/rating/${strollId}`, {
            rating: rating,
            user: user._id,
            stroll: strollId,
          })
          .then((response) => {
            console.log(strollId)
            console.log(rating)
            console.log(rating)
            const newRating = response.data;
            // Update the stroll with the new rating in the strolls state
            setStrolls((prevStrolls) => {
              if (Array.isArray(prevStrolls)) {
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
              } else {
                return prevStrolls;
              }
            });
          })
          .catch((error) => {
            console.error(error);
          });
      };
      
    
  return (
    <div>
            
            
            <section class="qualification section">
                <div class="section__title">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={user.profilePicture} style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }} alt="" />
                    </div>
                    <p className='primaryText'>Created by <span className='text-customPrimary'>{user.username}</span></p>
                </div>

                <h2 class="section__title" style={{ marginTop: "3rem", marginBottom: "2rem" }}>{strolls.title.charAt(0).toUpperCase() + strolls.title.slice(1)}</h2>
                <div className="flex gap-x-6 justify-center">
                    <div className="flex items-center">
                    <RiTimerLine className="dropdown-icon-customYellow" />
                    <span className="bg-customSecondary rounded-full text-black px-3">
                        {strolls.duration}hr
                    </span>
                    </div>
                    <div className="flex items-center">
                    <RiWalkFill className="dropdown-icon-customPurple" />
                    <span className="bg-customPurple rounded-full text-white px-3">
                        {strolls.distance}km
                    </span>
                    </div>
                    <div className="flex items-center">
                    <RiUserHeartLine className="dropdown-icon-customFour" />
                    <span className="bg-green-500 rounded-full text-white px-3">
                        {strolls.guide}
                    </span>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop:"50px" }}>
                    <img className="mb-8" src={strolls.img5} style={{ width: "500px", height: "400px", borderRadius: "0 0 0 5%",}} alt="img" />
                    <img className="mb-8" src={strolls.img6} style={{ width: "500px", height: "400px"}} alt="img" />
                    <img className="mb-8" src={strolls.img1} style={{ width: "500px", height: "400px", borderRadius: "0 0 5% 0",}} alt="img" />
                </div>
                
                <span class="section__subtitle">Lets Start🚀</span>
                <div className='flex text-customThird cursor-pointer mb-10 ' style={{ justifyContent: 'center', alignItems: 'center' }}>
                    {renderStars(rating, strolls._id)}
                    { rated && 
                        <p className='ml-2 text-customGreen'>
                            Thanks for sharing your rating!
                        </p>}
                </div>
                <div class="qualification__container container">
                    {/* <div class="qualification__tabs">
                        <div class="qualification__button button--flex qualification__active">
                        <i class="uil uil-location-point"style={{color: 'rgb(237,119,113)'}}></i> 
                        <img src={strolls.img1} alt="" /><i class="uil uil-heart-sign"></i>
                        
                        </div>
                    </div> */}
                    <div class="qualification__sections">
                        
                        <div class="qualification__content qualification__active" data-content id="education">
                            
                            <div class="qualification__data">
                                <div className="services__content">
                                <h3 class="qualification__title " onClick={() => openModal(0)}>{strolls.stops1}</h3>
                                    <span class="qualification__subtitle">Starting point</span>
                                    <div class="qualification__calendar">
                                    
                                        <a href="https://goo.gl/maps/zW7XpBS8j83UjEva8"  target="_blank" rel="noreferrer"><i class="uil uil-location-point"></i></a>
                                        
                                    </div>
                                    <span className="button button--flex button--small button--link services__button" onClick={() => openModal(0)}>
                                        Info More
                                        <i className="uil uil-arrow-right button__icon"></i>
                                    </span>
                                </div>
                                <div>
                                    <span class="qualification__rounder" style={{backgroundColor: 'rgb(104,105,152)'}}></span>
                                    <span class="qualification__line" style={{backgroundColor: 'rgb(104,105,152)'}}></span>
                                    
                                </div>
                            </div>
                            
                            <div class="qualification__data">
                                <div></div>
                                <div>
                                    <span class="qualification__rounder" style={{backgroundColor: 'rgb(104,105,152)'}}></span>
                                    <span class="qualification__line"style={{backgroundColor: 'rgb(237,119,113)'}}></span>
                                </div>
                                <div className="services__content">
                                    <h3 class="qualification__title">{strolls.stops2}</h3>
                                    <span class="qualification__subtitle">Next destination</span>
                                    <div class="qualification__calendar">
                                        <a href="https://www.google.com/"  target="_blank" rel="noreferrer"><i class="uil uil-location-point"></i></a>
                                        
                                    </div>
                                    <span className="button button--flex button--small button--link services__button" onClick={() => openModal(1)}>
                                        Info More
                                        <i className="uil uil-arrow-right button__icon"></i>
                                    </span>
                                </div>
                            </div>
                            
                            <div class="qualification__data">
                                <div className="services__content">
                                    <h3 class="qualification__title">{strolls.stops3}</h3>
                                    <span class="qualification__subtitle">Third call</span>
                                    <div class="qualification__calendar">
                                        <a href="https://www.google.com/"  target="_blank" rel="noreferrer"><i class="uil uil-location-point"></i></a>
                                        
                                    </div>
                                    <span className="button button--flex button--small button--link services__button" onClick={() => openModal(2)}>
                                        Info More
                                        <i className="uil uil-arrow-right button__icon"></i>
                                    </span>
                                </div>
                                <div>
                                    <span class="qualification__rounder"style={{backgroundColor: 'rgb(237,119,113)'}}></span>
                                    <span class="qualification__line"style={{backgroundColor: 'rgb(104,105,152)'}}></span>
                                </div>
                            </div>
                            
                                <div class="qualification__data">
                                    <div></div>
                                    <div >
                                        <span class="qualification__rounder"style={{backgroundColor: 'rgb(104,105,152)'}}></span>
                                        <span class="qualification__line"style={{backgroundColor: 'rgb(104,105,152)'}}></span> 
                                    </div>
                                    <div className="services__content">
                                        <h3 class="qualification__title">{strolls.stops4}</h3>
                                        <span class="qualification__subtitle">Our next planned stop</span>
                                        <div class="qualification__calendar">
                                                <a href="https://www.google.com/"  target="_blank" rel="noreferrer"><i class="uil uil-location-point"></i></a>
                                            
                                        </div>
                                        <span className="button button--flex button--small button--link services__button" onClick={() => openModal(3)}>
                                        Info More
                                        <i className="uil uil-arrow-right button__icon"></i>
                                    </span>
                                    </div>
                    
        
                                </div>
                                <div class="qualification__data">
                                <div className="services__content">
                                    <h3 class="qualification__title">{strolls.stops5}</h3>
                                    <span class="qualification__subtitle">We are almost there</span>
                                    <div class="qualification__calendar">
                                            <a href="https://www.google.com/"  target="_blank" rel="noreferrer"><i class="uil uil-location-point"></i></a>
                                        
                                    </div>
                                    <span className="button button--flex button--small button--link services__button" onClick={() => openModal(4)}>
                                        Info More
                                        <i className="uil uil-arrow-right button__icon"></i>
                                    </span>
                                </div>
                                <div>
                                    <span class="qualification__rounder"style={{backgroundColor: 'rgb(104,105,152)'}}></span>
                                    <span class="qualification__line"style={{backgroundColor: 'rgb(237,119,113)'}}></span>
                                </div>
                            </div>
                            <div class="qualification__data">
                                    <div></div>
                                    <div>
                                        <span class="qualification__rounder"style={{backgroundColor: 'rgb(237,119,113)'}}></span>
                                        
                                    </div>
                                    <div className="services__container ">
                                        <div className="services__content">
                                            <h3 class="qualification__title " onClick={() => openModal(0)}>{strolls.stops6}</h3>
                                            <span class="qualification__subtitle">Our ultimate destination.</span>
                                            <div class="qualification__calendar">
                                                    <a href="https://www.google.com/"  target="_blank" rel="noreferrer"><i class="uil uil-location-point"></i></a>
                                                
                                            </div>
                                            <span className="button button--flex button--small button--link services__button" onClick={() => openModal(5)}>
                                                Info More
                                                <i className="uil uil-arrow-right button__icon"></i>
                                            </span>
                                        </div>
                                    </div>
  
                    
        
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                
                <div>
                    <div>
                        <div className={activeModal === 0 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">{strolls.stops1}</h4>
                                <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <img src={strolls.img1} alt="" />
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>{strolls.description1}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={activeModal === 1 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">{strolls.stops2}</h4>
                                <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <img src={strolls.img2} alt="" />
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>{strolls.description2}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={activeModal === 2 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">{strolls.stops3}</h4>
                                <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <img src={strolls.img3} alt="" />
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>{strolls.description3}</p>
                                    </li>
     
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={activeModal === 3 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">{strolls.stops4}</h4>
                                <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <img src={strolls.img4} alt="" />
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>{strolls.description4}</p>
                                    </li>
     
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={activeModal === 4 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">{strolls.stops5}</h4>
                                <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <img src={strolls.img5} alt="" />
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>{strolls.description5}</p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={activeModal === 5 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">{strolls.stops6}</h4>
                                <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        
                                        <img src={strolls.img6} alt="" />
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>{strolls.description6}</p>
                                    </li>
  
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                
            </section>
            
            
            
    
    </div>
  )
}
export default StrollDetails