"use client";

import React, { useEffect } from 'react'
import Hero from "./Hero/Hero";
import About from "./About/About";
import Article from "./Article/Article";
import Review from "./Review/Review";
import Courses from "./Course/Courses";
import Feature from "./Feature/Feature";

import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(()=>{
    const initAOS = async()=>{
      await import ('aos')
      AOS.init({
        duration:1000,
        easing:"ease",
        once:true,
        anchorPlacement:"top-bottom",
      });
    };

    initAOS();
  },[]);
  return (
    <div>
      <Hero/>
      <About/>
      <Courses/>
      <Feature/>
      <Review/>
      <Article/>
    </div>
  )
}

export default Home
