import { Suspense } from 'react'

import { useOutletContext } from "react-router-dom"
import { useEffect, useState } from "react";

import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Section from "../../components/Section";
import MainBtn from "../../components/MainBtn";
import Map from "./Map";
// import LearnMoreLink from "../../components/LearnMoreLink";
import SubBtn from "../../components/SubBtn";
import { Helmet } from "react-helmet";

const mapStatus = (status) => {
  return <h2>{Status.status}</h2>;
};

const Location = () => {

  const { location } = useOutletContext();

  return (
    <div className="page-location">

      <Helmet title="Location" />

      {location.map((sectionData, i) => (
        <Section key={i} {...sectionData} />
      ))}


      <div className="flex justify-center mb-10">
        <MainBtn to="/gallery">View Gallery</MainBtn>
      </div>

      <Wrapper apiKey={import.meta.env.VITE_APP_MAP_API_KEY} render={mapStatus}>
        <Map />
      </Wrapper>

      <div className="container flex justify-center md:justify-end">
        <SubBtn to="/homes">Learn More About Our Homes</SubBtn>
      </div>
    </div>
  )
}

export default Location