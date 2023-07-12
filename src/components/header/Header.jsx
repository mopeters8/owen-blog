import "./Header.css";
import logo from "../../assets/images/deuceMo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="header">
        <img src={logo} class="logo" alt="Mo's Logo" />
        <div className="headerTitles">
          <span className="headerTitleSm">Mo's </span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <div className="bioField">
          <p class="bioText">
            <p id="bioTextHead"> Welcome to Mo's personal online community!</p>
            Explore, engage, and share your thoughts with fellow readers and
            writers.
            <br />
            <br />
            We invite you to share and immerse yourself in this small, yet
            captivating blogosphere. Whether you're an aspiring wordsmith or a
            passionate reader, HR representative, or a friend of Owen, this is
            the perfect platform to dive into captivating stories,
            thought-provoking articles, and informative discussions.
            <br />
            <br />
            Unleash your imagination and contribute your own unique perspective
            of anything. Our blog is a sanctuary for self-expression, where your
            voice can resonate and inspire others.
          </p>
        </div>
      </div>

      <hr className="botHR" />

      <div className="column_container">
        <div className="infoColumn">
          <p id="bioTextHead">Why was this made?</p>
          <p>
            Ultimately, this is a side project to practice creating a site using
            JavaScript, React, NodeJS, HTML, CSS along with its REST API.
            <br />
            <br />
            However I feel as if it can serve a great place to interact as a
            community. Many times I check in with a friend who has a new hobby,
            is playing a new game, or starting to educate themselves on a
            variety of topics. This would be a great place for them to share
            their interests with others through simple blog posts.
          </p>
        </div>
        <div className="infoColumn">
          <p id="bioTextHead">How can I use this?</p>
          <p>
            Feel free to view the home page and explore the other options on the
            top bar.
            <br />
            <br />
            To create posts, please register & login using the respective links
            in the top right or through here:{" "}
            <Link className="link" to="/login">
              Login Link?
            </Link>
            <br />
            <br />
            After registering or logging in, navigate to the <i>Write</i> page
            to create a post.
            <br />
            <br />
            It's simple. Anything you find interesting, please share!
          </p>
        </div>
        <div className="infoColumn">
          <p id="bioTextHead">What are the rules?</p>
          <p>
            It's actually not that simple! I lied! To keep this a "For Fun"
            environment, please adhere to the following rules:
            <br />
            <br />
            Be respectful: Treat fellow members with courtesy and respect. Avoid
            offensive, discriminatory, or inflammatory language. Personal
            attacks, harassment, or hate speech will not be tolerated.
          </p>
        </div>
      </div>
      <hr className="botHR" />
    </div>
  );
}
