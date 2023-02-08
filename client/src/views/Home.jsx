import React from "react";
import NavBar from "../components/common/NavBar";
import Intro from "../components/Intro";
import Footer from "../components/common/Footer";

function Home() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Intro></Intro>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Home;
