import React from "react";
import NavBar from "../components/common/NavBar";
import StoriesList from "../components/StoriesList";
import Footer from "../components/common/Footer";

function Stories({ stories, fetchStories }) {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <StoriesList stories={stories} fetchStories={fetchStories} />
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Stories;
