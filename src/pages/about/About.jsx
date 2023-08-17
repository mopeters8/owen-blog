import "./about.css";
import Project from "../../components/project/Project";
import { Link } from "react-router-dom";
import React from "react";
import FadeInSection from "../../components/effects/FadeInSection";
import ScrolltoTop from "../../components/effects/ScrolltoTop";
import GoToTop from "../../components/effects/ScrolltoTop";

export default function About() {
  //great reference
  //https://cdn.hashnode.com/res/hashnode/image/upload/v1631446162089/6D9tgVJsq.png

  return (
    <div className="aboutPage">
      <div class="container-xl fadeInUp-animation">
        <div class="row">
          {/* <div class="col-sm-4 column bioHeadshot">
            <img
              className="bioImg"
              src="https://drive.google.com/uc?export=view&id=1wNuqXOVr_kSp2sQOdP2p66BsUasO4bK2"
              alt=""
            />
          </div> */}
          <div class="col-12">
            <p className="biographyText">
              <p className="bioIntro">Hi, my name is</p>
              <p className="bioName">Owen Peters.</p>
              <p className="bioSubtext">I try to code web things.</p>
              <p className="bioDesc">
                I'm a software engineer / web developer with a strong interest
                in web design. I am currently working on this website, and
                looking for my entry into the industry!
              </p>
            </p>
            <div class="row bioButtons fadeIn-animation">
              <div class="col">
                <button
                  type="button"
                  class="btn btn-lg btn-outline-success mr-3"
                >
                  <a class href="#biographyTravel">
                    View Bio
                  </a>
                </button>
                <button type="button" class="btn btn-lg btn-outline-success">
                  <Link className="link" to="/">
                    Rest of Site
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a class="biographyTravel" id="biographyTravel"></a>

      <div className="container biography">
        <p>
          I’m an aspiring software engineer & web developer who loves to solve
          problems, collaborate, and learn.
          <br></br>
          <br></br>I just graduated from the University of San Francisco and
          obtained my Bachelors in Science degree for computer science.
          <br></br>
          <br></br>
          Through my experiences of past jobs and a passion for computers and
          video games, I am pursuing a career in the software development
          industry. Growing up with electronics, PCs, and gaming consoles my
          whole life, I have developed a passion for everything computer
          related. My hobbies include tinkering and building, diving deep into
          the details of the electronic gaming industry, watching sports, and
          eating good food.
          <br></br>
          <br></br>I plan to continue to learn as much as I can about software
          engineering, web development, and the gaming industry. I would love a
          career that would welcome my eagerness, passion and tenacity to learn.
        </p>
      </div>

      <hr class="rounded"></hr>

      <div className="Projects" id="Projects">
        <Project></Project>
      </div>
      {/* <GoToTop /> */}
    </div>
  );
}
