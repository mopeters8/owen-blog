import "./about.css";
import Project from "../../components/project/Project";
import { Link } from "react-router-dom";
import React from "react";
import FadeInSection from "../../components/effects/FadeInSection";

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
                  <a class href="#Projects">
                    View Portfolio
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

      <FadeInSection>
        <div className="container biography">
          <p>
            Hi I’m Owen Peters, I’m an aspiring software engineer who loves to
            solve problems, collaborate, and learn.
            <br></br>
            <br></br>I just graduated University of San Francisco and obtained
            my Bachelors in Science degree for computer science.
            <br></br>
            <br></br>
            Through experiences of past jobs and a passion for computers and
            video games, I am pursuing a career in the software development
            industry. Growing up with electronics my whole life, I have
            developed a passion for everything computer related.
            <br></br>
            <br></br>I plan to continue to learn as much as I can about computer
            science and the game development industry, and would love a career
            that would welcome my eagerness, passion and tenacity to learn. Like
            I mentioned, my hobbies include tinkering and building, diving deep
            into the details of the electronic gaming industry, watching sports,
            and eating good food.
          </p>
        </div>
      </FadeInSection>

      <hr class="rounded"></hr>

      <div className="bio">{/* <!-- emphasis on M and O --> */}</div>
      <div className="Projects" id="Projects">
        <Project></Project>
      </div>
    </div>
  );
}
