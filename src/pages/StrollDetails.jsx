import React from 'react'
import '../pages/style.css'
import { useState, useEffect, useContext }  from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {RiStarLine, RiStarSFill} from 'react-icons/ri';
import { AuthContext } from '../context/auth.context';
import User from './User';
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
                    <img src={user.profilePicture}  style={{ width: "100px", height: "100px" }} alt="" />
                    <p>Hosted by {user.username}</p>
                </div>
                
                <h2 class="section__title">{strolls.title.charAt(0).toUpperCase() + strolls.title.slice(1)}</h2>
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
                                <h3 class="qualification__title " onClick={() => openModal(0)}> <span> <a href="https://goo.gl/maps/5ZvWXCvVk6TrEL499" target="_blank" rel="noreferrer"><i class="uil uil-map-marker-alt"></i></a></span> {strolls.stops1}</h3>
                                    <span class="qualification__subtitle">Caracas - University</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2009-2015
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
                                    <span class="qualification__subtitle">Caracas - Uneweb</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2015-2016
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
                                    <span class="qualification__subtitle">USA - Celeritech</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2018-2019
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
                                        <span class="qualification__subtitle">Spain - Ironhack</span>
                                        <div class="qualification__calendar">
                                            <i class="uil uil-calendar-alt"></i>
                                            2022-2023
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
                                    <span class="qualification__subtitle">USA - Celeritech</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2018-2019
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
                                            <span class="qualification__subtitle">Spain - Ironhack</span>
                                            <div class="qualification__calendar">
                                                <i class="uil uil-calendar-alt"></i>
                                                2022-2023
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
                                        <img src={strolls.description1} alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={activeModal === 1 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">Axel Test</h4>
                                <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Tes1.</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Test2.</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Test3</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Test4</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={activeModal === 2 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">Lia Test</h4>
                                <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p> Lia Tes1.</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Test2.</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Test3</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p> Lia Test4</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={activeModal === 3 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">Coco Test</h4>
                                <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Coco Tes1.</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Test2.</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Test3</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Test4</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={activeModal === 4 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">Luchi Test</h4>
                                <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Luchi.</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Test2.</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Test3</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Test4</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={activeModal === 5 ? "services__modal active-modal" : "services__modal"}>
                            <div className="services__modal-content">
                                <h4 className="services__modal-title">Mambo Test</h4>
                                <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Mambo</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Test2.</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Test3</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>Test4</p>
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

