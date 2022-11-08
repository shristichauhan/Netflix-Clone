import React from "react";
import styled from "styled-components";
import Row from "../Row/Row";
import requests from "../../requests";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const HomeContainer = styled.div`
  background: #0e0e10;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.NetflixOriginals}
        isLarge
      />
      <Row title="Trending Now" fetchUrl={requests.Trending} />
      <Row title="Top Rated" fetchUrl={requests.TopRated} />
      <Row title="Action Movies" fetchUrl={requests.ActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.ComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.HorrorMovies} />
    </HomeContainer>
  );
};

export default Home;
