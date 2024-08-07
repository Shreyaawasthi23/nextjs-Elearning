"use client";
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SlideCard from './SlideCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const Slider = () => {
  return (
    <Carousel additionalTransfrom={0}
    arrows={true}
    autoPlay={true}
    autoPlaySpeed={5000}
    centerMode={false}
    responsive={responsive}
    itemClass='item' >
    <SlideCard 
    image="/images/r1.jpg"
    name="Shreya Awasthi"
    role="Full Stack Developer"/>
    <SlideCard 
    image="/images/r2.jpg"
    name="Sidharth Singh"
    role="Next Js Developer"/>
    <SlideCard 
    image="/images/r3.jpg"
    name="Ritik Sharma"
    role="MERN Developer"/>
    </Carousel>
  )
}

export default Slider
