import React from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';

function About() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <section className="hero container">
        <div className="hero__content">
          <div className="hero__content__intro">
            <h1 className="hero__content__intro--heading">About</h1>
            <p className="hero__content__intro--description">
              Wikka is a minimalistic typing test dedicated to helping you
              maximize your proficiency in reading Japanese. It offers
              practical, frequent, and sustained learning opportunities designed
              to immerse you in the language. By engaging with a variety of
              captivating Japanese stories, you'll not only enhance your reading
              skills but also deepen your understanding of Japanese culture and
              context. Let us support your journey toward fluency, one story at
              a time.
            </p>
            <div className="hero__content__intro__cto--container"></div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default About;
