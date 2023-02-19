import React from 'react'
import '../pages/style.css'
import { useState, useEffect}  from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StrollDetails = () => {
    const [strolls, setStrolls] = useState({});
    const {id} = useParams();

    const [activeModal, setActiveModal] = useState(null);
    function openModal(modalClick) {
      setActiveModal(modalClick);
    }
  
    function closeModal() {
      setActiveModal(null);
    }




    useEffect(() => {
        axios.get(`http://localhost:5005/strolls/${id}`)
            .then((response) => {
                console.log('respuesta del API :', response.data)
                setStrolls(response.data)
            })
            .catch(error => {
                console.error(error);
            });
        
    },[id]);
    

    if(Object.keys(strolls).length===0){
        return <p>Loading...</p>
    }

    

  return (
    <div>
            
            
            <section class="qualification section">
                <h2 class="section__title">{strolls.title.charAt(0).toUpperCase() + strolls.title.slice(1)}</h2>
                <span class="section__subtitle">Lets Start🚀</span>
                <div class="qualification__container container">
                    <div class="qualification__tabs">
                        <div class="qualification__button button--flex qualification__active">
                        <i class="uil uil-location-point"style={{color: 'rgb(237,119,113)'}}></i> 
                        <img src={strolls.img1} alt="" /><i class="uil uil-heart-sign"></i>
                        
                        </div>
                    </div>
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
                                <h4 className="services__modal-title">Development</h4>
                                <i className="uil uil-times services__modal-close" onClick={closeModal}></i>

                                <ul className="services__modal-services grid">
                                    <li className="services__modal-service">
                                        <i className="uil uil-parking-circle services__modal-icon"></i>
                                        <p>Nearest parking .</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <img src={strolls.img5} alt="" />
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>{strolls.description}</p>
                                    </li>
                                    <li className="services__modal-service">
                                        <i className="uil uil-check-circle services__modal-icon"></i>
                                        <p>I position xs brand.</p>
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
