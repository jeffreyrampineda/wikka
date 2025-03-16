import { Link } from "react-router";
import Button from "./common/Button";
import hero_banner_type_writer from "../assets/images/hero_banner_type_writer.jpg";
import undraw_reading_time from "../assets/images/undraw_reading_time.svg";
import undraw_group_chat from "../assets/images/undraw_group_chat.svg";
import undraw_travelers from "../assets/images/undraw_travelers.svg";

function Intro() {
  return (
    <>
      <section className="hero container">
        <div className="hero__content">
          <div className="hero__content__intro">
            <h1 className="hero__content__intro--heading">
              The free, fun, and interactive way to learn a language!
            </h1>
            <p className="hero__content__intro--description">
              Maximize your proficiency in reading Japanese by engaging in
              practical, frequent and sustained learning opportunities while
              learning various Japanese stories.
            </p>
            <div className="hero__content__intro__cto--container">
              <Link to={"/stories/"}>
                <Button wClass="btn--primary hero__content__intro__cto--button">
                  Get started
                </Button>
              </Link>
              <Link to={"/#learn-more"}>
                <Button wClass="btn--secondary hero__content__intro__cto--button">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
          <div className="hero__content__banner">
            <img
              src={hero_banner_type_writer}
              className="hero__content__banner--image hover-grow-1"
              alt="A typewriter image"
            />
          </div>
        </div>
      </section>
      <section className="learn-more container" id="learn-more">
        <div className="learn-more__content">
          <div className="learn-more__content__banner">
            <img
              src={undraw_reading_time}
              className="learn-more__content__banner--image hover-grow-1"
              alt="Reading time"
            />
          </div>
          <div className="learn-more__content__intro">
            <p className="learn-more__content__intro--description">
              Immerse yourself in the rich Japanese mythological and folktale
              stories while advancing your language skills. Our offerings
              include some of the most popular Japanese tales, covering a
              diverse collection of genres including fantasy, history, horror,
              comedy, fiction, sci-fi, and more.
            </p>
          </div>
        </div>
        <div className="learn-more__content">
          <div className="learn-more__content__intro">
            <p className="learn-more__content__intro--description">
              With your newly acquired reading and writing skills, you can
              communicate with others online. By using your reading and writing
              skills, you can expand your social network, connect with others
              who share your interests, and enhance your online communication
              skills.
            </p>
          </div>
          <div className="learn-more__content__banner">
            <img
              src={undraw_group_chat}
              className="learn-more__content__banner--image hover-grow-1"
              alt="Reading time"
            />
          </div>
        </div>
        <div className="learn-more__content">
          <div className="learn-more__content__banner">
            <img
              src={undraw_travelers}
              className="learn-more__content__banner--image hover-grow-1"
              alt="Reading time"
            />
          </div>
          <div className="learn-more__content__intro">
            <p className="learn-more__content__intro--description">
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
