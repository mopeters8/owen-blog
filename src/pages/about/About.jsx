import "./about.css";

export default function About() {
  //great reference
  //https://cdn.hashnode.com/res/hashnode/image/upload/v1631446162089/6D9tgVJsq.png

  return (
    <div className="aboutPage">
      <div className="biography">
        <div className="bioHeadshot"></div>
        <img
          className="bioImg"
          src="https://drive.google.com/uc?export=view&id=1wNuqXOVr_kSp2sQOdP2p66BsUasO4bK2"
          alt=""
        />
      </div>
      <div className="bio">
        <p>Hi, my name is</p>
        <p>Michael Owen Peters</p>
        <p>
          I'm a software engineering with a strong interest in web design. I am
          currently working on this website, and looking for my entry into
          industry
        </p>
        {/* <!-- emphasis on M and O --> */}
      </div>
    </div>
  );
}
