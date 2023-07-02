import "./Header.css";
import logo from "../../assets/images/deuceMo.png";

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
            <br />
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
    </div>
  );
}
