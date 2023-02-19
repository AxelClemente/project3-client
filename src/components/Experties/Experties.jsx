import React from 'react'
import css from './Experties.module.scss'
import { plans } from '../../utils/data'
import { AboutTheApp } from '../../utils/data'
import { motion } from 'framer-motion'
import { staggerContainer } from '../../utils/motion'
import { fadeIn } from '../../utils/motion'
import { textVariant } from '../../utils/motion'


const Experties = () => {
  return (
    <motion.section 
    variants={staggerContainer} 
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}} 
    className={css.wrapper}
    >
        
        <div className={`paddding yPaddings flexCenter innerWidth ${css.container}`}>
            <div className={css.leftSide}>
                {plans.map((exp, i) =>{
                        return (
                                <motion.div
                                variants={fadeIn("right", "tween", (i+1)*0.2, 1)}
                                className={css.exp} key={i}>
                                    <div className="flexCenter" style={{background: exp.bg}}>
                                        <exp.icon size={25} color="white" />
                                    </div>

                                    <div>
                                        <span>
                                            {exp.name}
                                        </span>
                                        <span>
                                            {exp.projects}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
            </div>

            <motion.div
            variants={textVariant(0.5)} 
            className={css.rightSide}>
                <span className='primaryTextDevelop' id='#about'>How It Works</span>
                {/* {
                    AboutTheApp.map((text, i) => {
                        return <span className='secondaryText' key={i}>{text}</span>
                    })
                } */}
                <p className='secondaryText'>
                <span className='text-customPrimary'>Strollapp</span>  - plan your perfect city getaway with itineraries created by local experts, read traveler reviews and share your own experience.
                    <br /> A tool to create customized city travels with distance, cost, destinations, and time.
                </p>

            </motion.div>
        </div>
    </motion.section>
  )
}

export default Experties
