import "./project.scss";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:4000/images/";

  return (
    <>
      <div class="content">
        <div class="my_card masterClass">
          <img
            // src="https://drive.google.com/file/d/1zNomPTUIzWK5bSJl4DjsY3dKvgXguphg/view?usp=sharing"
            src="https://drive.google.com/uc?export=view&id=1zNomPTUIzWK5bSJl4DjsY3dKvgXguphg"
            // src="https://drive.google.com/uc?export=view&id=1wNuqXOVr_kSp2sQOdP2p66BsUasO4bK2"
            alt="project picture"
          />
          <p class="title">Senior Master Class</p>
          <p class="text">
            My team and I built a web application that allows professors to
            connect students with industry project sponsors and their ideas. We
            centralized a location for sponsor pitch ideas, and project team
            forming. This includes account creation, project uploading, student
            organization and communication
            <br></br>
            <i
              class="icon fa-brands fa-github fa-2xl"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            ></i>
          </p>

          {/* Need to create better way to hide this modal. */}
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    GitHub Links:
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <a href="https://github.com/sfdevshop/master-class-web">
                    <button type="button" class="btn btn-info">
                      Master Class Front End Link
                    </button>
                  </a>
                  <br />
                  <br />
                  <a href="https://github.com/sfdevshop/master-class-api">
                    <button type="button" class="btn btn-info">
                      Master Class API Link
                    </button>
                  </a>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="my_card searchEngine">
          <img
            //https://drive.google.com/file/d/1J7zVUv1iAt3AVtrn_IcJObodgv7WNYK4/view?usp=sharing
            src="https://drive.google.com/uc?export=view&id=1J7zVUv1iAt3AVtrn_IcJObodgv7WNYK4"
            alt="project picture"
          ></img>
          <p class="title">Search Engine</p>
          <p class="text">
            This search engine project uses a web crawler, and Jetty to provide
            a web server and servlet container. This project contains a webpage
            with a text box where users may enter a multi-word search query that
            submits to a servlet in my search engine. It then matches the data
            that is stored in the inverted index and returns the search results
            of those queries as dynamically generated HTML with sorted and
            clickable links.
            <br></br>
            <Link
              className="link"
              to="https://github.com/usf-cs212-spring2021/project-mopeters8"
            >
              <i class="icon fa-brands fa-github fa-2xl"></i>
            </Link>
          </p>
        </div>
        <div class="my_card">
          {/* https://drive.google.com/file/d/1UzOXcy-cBQ-Shks8ziZvZtvXJrrdgEoJ/view?usp=sharing */}
          <img
            src="https://drive.google.com/uc?export=view&id=1UzOXcy-cBQ-Shks8ziZvZtvXJrrdgEoJ"
            alt="project picture"
          ></img>
          <p class="title">Mo Money Manager</p>
          <p class="text">
            Using C# and the Microsoft .NET Framework, this Windows Form App is
            a basic little mini money manager. Growing into adulthood forced
            myself to juggle all sorts of purchases and financial responsibilty.
            Forgetting to manage one's money can quickly disrupt a budget. This
            WinFormApp helps manage any money received, as well as what you
            spend it on while keeping track of a history, for improving one's
            financial organization.
            <br></br>
            <Link
              className="link"
              to="https://github.com/mopeters8/MoMoneyCsharp"
            >
              <i class="icon fa-brands fa-github fa-2xl"></i>
            </Link>
          </p>
        </div>
        <div class="my_card">
          <img
            // https://drive.google.com/file/d/1SWg2Wc1SwBX5rmSY9kZgzANQtfD5tSLk/view?usp=sharing
            src="https://drive.google.com/uc?export=view&id=1SWg2Wc1SwBX5rmSY9kZgzANQtfD5tSLk"
            alt="project picture"
          ></img>
          <p class="title">Fatal Tide</p>
          <p class="text">
            Through my employement at Girls Make Games, I was able to attain a
            valuable skill set & understanding of Construct 3, a 2D game engine
            to provide instruction to a remote class of students. Here we
            created a 2D game called Fatal Tide, which featured enemy combat,
            multiple levels, cutscenes and dialogue with working sound and
            original music.
            <br></br>
            <Link
              className="link"
              to="https://drive.google.com/file/d/1KcYc-KBGc_-sQj7dZHNMll50U2Bo-4lC/view?usp=sharing"
            >
              <i class="icon fa-brands fa-github fa-2xl"></i>
            </Link>
          </p>
        </div>
        <div class="my_card smallCard">
          <img
            // https://drive.google.com/file/d/18i8YQxMqhnQIyr9swjJa435qr7MLx79S/view?usp=sharing
            src="https://drive.google.com/uc?export=view&id=18i8YQxMqhnQIyr9swjJa435qr7MLx79S"
            alt="project picture"
          ></img>
          <p class="title">Bash Shell</p>
          <p class="text">
            Using C and Shell, this project is a shell that is able to take
            commands and still execute them. This shell is able to function like
            a normal one with commands, scripting, history list/navigation, IO
            redirection, signal handling and more. It reads every command as a
            half-virtualization method, so that we may look at the command and
            interpret what we would like to do with it.
            <br></br>
            <Link
              className="link"
              to="https://github.com/usf-cs326-fa22/P2-mopeters8"
            >
              <i class="icon fa-brands fa-github fa-2xl"></i>
            </Link>
          </p>
        </div>
        <div class="my_card smallCard">
          <img
            // https://drive.google.com/file/d/12TaR4NB8qdcEq_HbA614bjiY8qIeeWBY/view?usp=sharing
            src="https://drive.google.com/uc?export=view&id=12TaR4NB8qdcEq_HbA614bjiY8qIeeWBY"
            alt="project picture"
          ></img>
          <p class="title">Forum / Blog Website</p>
          <p class="text">
            Using what I have learned from University, along with what I have
            practiced in my free time, I decided to create this website. Using
            React, Node.js, MongoDB and other libraries and frameworks, I aimed
            to create a forum that can host discussion and my portfolio for
            others to see.
            <br></br>
            <Link className="link" to="https://github.com/mopeters8/owen-blog">
              <i class="icon fa-brands fa-github fa-2xl"></i>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
