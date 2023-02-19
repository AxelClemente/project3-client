import React from 'react'
import css from './Landing.module.scss'
import { motion } from 'framer-motion'
import { staggerContainer } from '../../utils/motion'
import { fadeIn } from '../../utils/motion'
import Experties from '../Experties/Experties'
import Footer from '../Footer/Footer'

const Landing = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}} 
        className={`innerWidth ${css.container}`}>

            <div className={css.upperElement}>

                <motion.span
                variants={fadeIn("right", "tween", 0.2, 1)} 
                className='primaryText'>

                    Enjoy the city <span className='text-customPrimary'>like a local</span> 
                    <br /> 
                    every time
                </motion.span>
                <motion.span
                variants={fadeIn("left", "tween", 0.4, 1)}  
                className='secondaryText'>Create <span className='text-customSecondary'>customized</span> travel routes! 
                    <br/>
                    
                </motion.span>

            </div>

            <motion.div
             variants={fadeIn("down", "tween", 0.3, 1)}
             className={css.person}>
                <motion.img
                variants={fadeIn("up", "tween", 0.5, 1.3)}
                src="images/editadaNormal.png" alt="" width="270" />
            </motion.div>

            <div className={css.lowerElements}>
                <motion.div
                 variants={fadeIn("right", "tween", 0.2, 1)}
                 className={css.experience}>

                    <div className="primaryText"><span className='text-customPrimary'>+1000</span></div>

                    <div className="secondaryText">
                        <div >Travel</div>
                        <div >Routes</div>
                    </div>

                </motion.div>
            </div>
        </motion.div>
        <Experties />
        <Footer />
    </section>
  )
}

export default Landing