import React, { useState } from 'react'
import zoro2 from "../assets/zoropng.png"
import react from "../assets/Skills/react.png"
import html from "../assets/Skills/html.png"
import css from "../assets/Skills/css.png"
import java from "../assets/Skills/java2.png"
import spring from "../assets/Skills/spring2.png"
import mysql from "../assets/Skills/mysql.png"
import postgress from "../assets/Skills/postgress.png"
import aws from "../assets/Skills/aws.png"
import mongodb from "../assets/Skills/mongodb.png"
import docker from "../assets/Skills/docker.png"
import git from "../assets/Skills/git.png"
import "./component.css"
import Header from './Header'
import {motion} from "framer-motion"

function AboutComponent() {
    const [option, setoption] = useState("skills")
    return (
        <div style={{ width: '90%', margin: 'auto', height: '100vh' }}>
            <Header />
            <div className="row" style={{height:'85vh'}}>
                <motion.div animate={{ x: +5, opacity: 1 }} initial={{ x: -70, opacity: 0 }} transition={{ type: "tween", duration: 1 }} className="col d-flex justify-content-center align-items-center">
                    <img src={zoro2} style={{ height: '300px', width: '300px' }}></img>
                </motion.div>
                <div className="col">
                    <motion.h4 animate={{ y: -5, opacity: 1 }} initial={{ y: +70, opacity: 0 }} transition={{ type: "tween", duration: 1 }}>About Me</motion.h4>
                    <motion.p animate={{ y: -5, opacity: 1 }} initial={{ y: +70, opacity: 0 }} transition={{ type: "tween", duration: 1 }}>Hello! I'm Sukumar, a passionate Java Full Stack Developer with 2 years
                        of experience in building robust and scalable web applications. I specialize
                        in utilizing Java technologies for both front-end and back-end development,
                        along with expertise in modern web development frameworks and tools.
                    </motion.p>
                    <div className="row">
                        <div className="col">
                            <a style={{ cursor: 'pointer', }} onClick={() => setoption("skills")} className='topics text-decoration-none text-black'><h5>Skills</h5></a>
                            {option == "skills" ? <div className="underline" style={{ width: '80px', height: '2px', backgroundColor: 'darkmagenta', borderRadius: '10px' }}></div> : ""}
                        </div>
                        <div className="col">
                            <a style={{ cursor: 'pointer' }} onClick={() => setoption("experience")} className='topics text-decoration-none text-black'><h5>Experience</h5></a>
                            {option == "experience" ? <div className="underline" style={{ width: '80px', height: '2px', backgroundColor: 'darkmagenta', borderRadius: '10px' }}></div> : ""}
                        </div>
                        <div className="col">
                            <a style={{ cursor: 'pointer' }} onClick={() => setoption("education")} className='topics text-decoration-none text-black'><h5>Education</h5></a>
                            {option == "education" ? <div className="underline" style={{ width: '80px', height: '2px', backgroundColor: 'darkmagenta', borderRadius: '10px' }}></div> : ""}

                        </div>

                        <div className='mt-3 mb-3' style={{ backgroundColor: '#2C3E50 ', boxShadow: '10px 10px 10px gray', borderRadius: '10px' }}>
                            {option === "skills" ?

                                <>
                                    <div className="row">
                                        <h5 style={{color:'orange'}}>Front End</h5>
                                    </div>
                                    <div className="row">
                                        <p style={{color:'white'}}>React JS ,HTML ,CSS ,Java Script</p>
                                    </div>
                                    <div className="row">
                                        <h5 style={{color:'orange'}}>Back End</h5>
                                    </div>
                                    <div className="row">
                                        <p style={{color:'white'}}>Java ,Spring Boot</p>
                                    </div>
                                    <div className="row">
                                        <h5 style={{color:'orange'}}>Data Base</h5>
                                    </div>
                                    <div className="row">
                                        <p style={{color:'white'}}>My Sql ,Postgress Sql ,Mongo DB</p>
                                    </div>
                                    <div className="row">
                                        <h5 style={{color:'orange'}}>Devobs</h5>
                                    </div>
                                    <div className="row">
                                        <p style={{color:'white'}}>AWS ,Docker ,Git</p>
                                    </div>
                                    {/* <div className="row  mt-2" style={{ borderRadius: '10px' }}>

                                        <div className="col d-flex align-items-center">
                                            <h6 className='mt-2 me-5' style={{ color: 'purple' }}>Front End</h6>
                                            <img src={react} className='d-inline mb-2 me-5' style={{ height: '50px', width: '50px' }}></img>
                                            <img src={html} className='d-inline mb-2 me-5' style={{ height: '50px', width: '50px' }}></img>
                                            <img src={css} className='d-inline mb-2 me-5' style={{ height: '50px', width: '50px' }}></img>
                                        </div>
                                    </div>

                                    <div className="row mt-2 mb-3">
                                        <div className="col d-flex align-items-center">
                                            <h6 className='mt-2 me-5 ' style={{ color: 'purple' }}>Back End</h6>
                                            <img src={java} className='d-inline mb-2 me-5' style={{ height: '70px', width: '70px' }}></img>
                                            <img src={spring} className='d-inline mb-2 mt-3' style={{ height: '40px', width: '70px' }}></img>
                                        </div>

                                    </div>

                                    <div className="row mt-2 mb-3">
                                        <div className="col d-flex align-items-center">
                                            <h6 className='mt-2 me-5 ' style={{ color: 'purple' }}>Data Base</h6>
                                            <img src={mysql} className='d-inline mb-2 me-5 ms-2' style={{ height: '50px', width: '50px' }}></img>
                                            <img src={mongodb} className='d-inline mb-2 me-5' style={{ height: '50px', width: '50px' }}></img>
                                            <img src={postgress} className='d-inline mb-2 mt-3' style={{ height: '50px', width: '50px' }}></img>
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                    <div className="col d-flex align-items-center">
                                            <h6 className='mt-2 me-5 ' style={{ color: 'purple' }}>Devops</h6>
                                            <img src={aws} className='d-inline mb-2 me-5 ms-3' style={{ height: '50px', width: '50px' }}></img>
                                            <img src={docker} className='d-inline mb-2 me-5' style={{ height: '50px', width: '50px' }}></img>
                                        </div>
                                    </div> */}

                                </>
                                : ""}

                            {option === "experience" ?

                                <>
                                    <div className="row" >
                                        <h5 style={{color:'white'}}>2022 - Current</h5>
                                    </div>
                                    <div className="row">
                                        <h6 style={{color:'orange'}}>ASM Technologies</h6>
                                    </div>
                                    <p style={{color:'white'}}>I have worked with various technologies including VB.NET, Python (especially Django), Java (specifically Spring framework), and Unity game development. I have also created several projects which you can check out on the 'Projects' tab."</p>
                                    
                                </>
                                : ""}

                            {option === "education" ?

                                <>    
                                <div className="row mt-2">
                                    <h5 style={{color:'white'}}>2022</h5>
                                </div>
                                 <div className="row mb-4">
                                    <h6 style={{color:'white'}}>BE.Computer Science &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'orange'}}>CGPA</span> 8.01</h6>
                                </div> 
                                <div className="row">
                                    <h5 style={{color:'white'}}>2018</h5>
                                </div> 
                                <div className="row mb-4">
                                    <h6 style={{color:'white'}}>HSC &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'orange'}}>Percentage - </span> 68</h6>
                                </div> 
                                <div className="row">
                                    <h5 style={{color:'white'}}>2016</h5>
                                </div>
                                <div className="row mb-4">
                                    <h6 style={{color:'white'}}>SSLC &nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'orange'}}>Percentage - </span> 84</h6>
                                </div>   
                            </>
                            : ""}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent

                                    //  <div className="row  mt-2" style={{ borderRadius: '10px' }}>

                                    //     <div className="col d-flex align-items-center">
                                    //         <h6 className='mt-2 me-5' style={{ color: 'purple' }}>Front End</h6>
                                    //         <img src={react} className='d-inline mb-2 me-5' style={{ height: '50px', width: '50px' }}></img>
                                    //         <img src={html} className='d-inline mb-2 me-5' style={{ height: '50px', width: '50px' }}></img>
                                    //         <img src={css} className='d-inline mb-2 me-5' style={{ height: '50px', width: '50px' }}></img>
                                    //     </div>
                                    // </div>

                                    // <div className="row mt-2 mb-3">
                                    //     <div className="col d-flex align-items-center">
                                    //         <h6 className='mt-2 me-5 ' style={{ color: 'purple' }}>Back End</h6>
                                    //         <img src={java} className='d-inline mb-2 me-5' style={{ height: '70px', width: '70px' }}></img>
                                    //         <img src={spring} className='d-inline mb-2 mt-3' style={{ height: '40px', width: '70px' }}></img>
                                    //     </div>

                                    // </div>

                                    // <div className="row mt-2 mb-3">
                                    //     <div className="col d-flex align-items-center">
                                    //         <h6 className='mt-2 me-5 ' style={{ color: 'purple' }}>Data Base</h6>
                                    //         <img src={mysql} className='d-inline mb-2 me-5 ms-2' style={{ height: '50px', width: '50px' }}></img>
                                    //         <img src={mongodb} className='d-inline mb-2 me-5' style={{ height: '50px', width: '50px' }}></img>
                                    //         <img src={postgress} className='d-inline mb-2 mt-3' style={{ height: '50px', width: '50px' }}></img>
                                    //     </div>
                                    // </div>

                                    // <div className="row mt-2">
                                    // <div className="col d-flex align-items-center">
                                    //         <h6 className='mt-2 me-5 ' style={{ color: 'purple' }}>Devops</h6>
                                    //         <img src={aws} className='d-inline mb-2 me-5 ms-3' style={{ height: '50px', width: '50px' }}></img>
                                    //         <img src={docker} className='d-inline mb-2 me-5' style={{ height: '50px', width: '50px' }}></img>
                                    //     </div>
                                    // </div> 

                                    // </>
                                    // : ""