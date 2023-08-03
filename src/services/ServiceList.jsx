import React from 'react';
import serviceCard from "./ServiceCard";
import { Col } from 'reactstrap';

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";
import ServiceCard from './ServiceCard';

const servicesData =[
    {
        imgUrl : weatherImg,
        title : "Calculate Weather",
        desc : "The weather is nice...",
    },
    {
        imgUrl : guideImg,
        title : "Best Tour Guide",
        desc : "We have the best tour guide..",
    },
    {
        imgUrl : customizationImg,
        title : "Customization",
        desc : "Customization is Amazing....",
    },
]


const ServiceList = () => {
  return (
    <>
    {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
            <ServiceCard item={item} />
        </Col>
    ))}
    </>
  )
}

export default ServiceList