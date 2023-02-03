import React from "react";
import { Link } from "react-router-dom";
import Button from "./common/Button";
import hero_banner_type_writer from "../assets/images/hero_banner_type_writer.jpg";
import undraw_reading_time from "../assets/images/undraw_reading_time.svg";
import undraw_group_chat from "../assets/images/undraw_group_chat.svg";
import undraw_travelers from "../assets/images/undraw_travelers.svg";

function Intro() {
  return (
    <>
      <section className="hero-section mb-5">
        <div className="row g-0 p-5 align-items-center">
          <div className="col-5 px-5">
            <h1 className="display-4">
              The free, fun, and interactive way to learn a language!
            </h1>
            <p className="my-5 lead text-secondary">
              Maximize your proficiency in reading Japanese by engaging in
              practical, frequent and sustained learning opportunities while
              learning various Japanese stories.
            </p>
            <Link to={"/stories/"} className="me-4">
              <Button color="primary text-white">Get started</Button>
            </Link>
            <Link to={"/#learn-more"}>
              <Button color="secondary">Learn more</Button>
            </Link>
          </div>
          <div className="col-7">
            <img
              src={hero_banner_type_writer}
              class="img-fluid"
              alt="A typewriter image"
            />
          </div>
        </div>
      </section>
      <section className="container my-5" id="learn-more">
        <div className="row align-items-center mb-5">
          <div className="col-6">
            <img
              src={undraw_reading_time}
              class="img-fluid"
              alt="Reading time"
            />
          </div>
          <div className="col-6">
            <p className="lead">
              Immerse yourself in the rich Japanese mythological and folktale
              stories while advancing your language skills. Our offerings
              include some of the most popular Japanese tales, covering a
              diverse collection of genres including fantasy, history, horror,
              comedy, fiction, sci-fi, and more.
            </p>
          </div>
        </div>
        <div className="row align-items-center mb-5">
          <div className="col-6">
            <p className="lead">
              With your newly acquired reading and writing skills, you can
              communicate with others online. By using your reading and writing
              skills, you can expand your social network, connect with others
              who share your interests, and enhance your online communication
              skills.
            </p>
          </div>
          <div className="col-6">
            <img src={undraw_group_chat} class="img-fluid" alt="Reading time" />
          </div>
        </div>
        <div className="row align-items-center mb-5">
          <div className="col-6">
            <img src={undraw_travelers} class="img-fluid" alt="Reading time" />
          </div>
          <div className="col-6">
            <p className="lead">
              Having conversational skills can greatly enhance your traveling
              experience. It allows you to communicate with the locals and get a
              more authentic and immersive experience. You can ask for
              directions, make restaurant recommendations, and learn about local
              customs and traditions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
