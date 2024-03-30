import React from 'react'
import { motion } from "framer-motion"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

import zoro from "../assets/zoropng.png"
import roundedball from "../assets/pic1.png"


import AboutComponent from './AboutComponent'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Header from './Header'
import "./component.css"

function HeadComponent() {

    const navigate = useNavigate()
    const [effect] = useTypewriter({
        words: ["Full Stack Developer", "Web Designer"],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    })

    //animate={{ scale: 1 }} initial={{ scale: 0 }} transition={{ type: "tween", duration: 0.4 }}


    return (
        <>
        <Header></Header>
        <div style={{ width: '90%', margin: 'auto'}} >
            
            

            <div className="myinfo row   mx-lg-5" style={{ marginTop: '10%', position: 'relative', overflow: 'hidden' }}>
                <motion.div animate={{ y: -5, opacity: 1 }} initial={{ y: +70, opacity: 0 }} transition={{ type: "tween", duration: 1 }} className="col-12 col-lg-6 col-md-6">
                    <h2 className='' style={{ color: 'white', fontSize: '3rem' }}>Hello There, </h2>
                    <h3 style={{ fontSize: '4rem', color: 'white' }}>I'm <span style={{ color: 'orange' }}>ZORO, </span></h3>
                    <img className='roundimage' src={roundedball} style={{ position: 'absolute', opacity: '0.5', zIndex: '-1', height: '90%', width: '50%', top: '40px', left: '-70px' }}></img>
                    <h4 className='mt-3 ' style={{ letterSpacing: '2px', color: 'white' }}>I'm a <span style={{ color: '#D919E8', letterSpacing: '2px' }}>{effect}<Cursor></Cursor></span></h4>
                    <button className='mt-3 btn ' style={{ borderRadius:'17px',border:'1px solid white' ,fontWeight:'bold',color:'white'}} onClick={()=>navigate("/about")}>About me &nbsp;<i class="bi bi-arrow-down  " style={{ color: 'white' }}> </i></button> &nbsp; &nbsp;
                    <button className='mt-3 btn text-white' style={{ borderRadius:'17px',border:'1px solid black' ,fontWeight:'bold',background:'black'}}>Download CV &nbsp;</button><br></br>

                    <div className="row mt-3 ">
                        <div className="col">
                            <i class="bi bi-github p-2 ms-5" style={{ fontSize: '1.5rem' ,marginLeft:'10px',color:'white'}}></i>
                            <i class="bi bi-linkedin p-2 ms-5" style={{ fontSize: '1.5rem',marginLeft:'10px',color:'white' }}></i>
                        </div>
                    </div>

                </motion.div>

                <motion.div animate={{ x: -5, opacity: 1 }} initial={{ x: +70, opacity: 0 }} transition={{ type: "tween", duration: 1,marginTop:'0' }} className="col-12 col-md-6  col-lg-6 d-flex justify-content-lg-end " >
                    <img className='profile' src={zoro}></img>
                </motion.div>
            </div>
        </div>
        </>

    )
}

export default HeadComponent


//import {Link,animateScroll as scroll } from 'react-scroll';
{/* <li class="list-inline-item p-3"><a href='#' style={{textDecoration:'none'}}><Link to={"about"} smooth={true} duration={500} class=" text-decoration-none " style={{ color: '#101552', fontWeight: 'bold' }}>Home</Link></a></li> */}
