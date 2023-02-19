import React from 'react'
import css from './Footer.module.scss';
import { motion } from 'framer-motion';
import { staggerChildren } from '../../utils/motion';
import { footerVariants } from '../../utils/motion';
import { BsGithub } from "react-icons/bs";



const Footer = () => {
    
  return (

    <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}>
            
        <button id="developers"></button>
        <motion.div
            variants={footerVariants} 
            className={`innerWidth yPaddings flexCenter ${css.container}`}>

            <div className={css.left}>
                <span className="primaryTextDevelop">
                    Full Stack Developers: <br />
                </span>
                <span className="primaryTextDevelop">
                    <a href="https://github.com/axelclemente?tab=repositories" rel="noreferrer" target="_blank">Axel Clemente🚀</a>  <br />
                    <a href="https://github.com/arcadioreyes/" rel="noreferrer" target="_blank">Arcadio Reyes🚀</a> 
                </span>
                
            </div>

            <div className={css.right}>
                <div className={css.info}>
                    <span className="secondaryText">Technologies:</span>
                    {/* <p>Frontend: React js, CSS, Sass</p>
                    <p>Backend: Node.js, Express, Mongoose, MongoDB</p> */}
                </div>
                <div className={css.menu}>
                    <p>Frontend: React.js, Css Sass.</p>
                    <p className={css.test}>Backend: Node.js, Express, Mongoose.</p>
                </div>
            </div>



        </motion.div>
        

    </motion.section>
)}


export default Footer
