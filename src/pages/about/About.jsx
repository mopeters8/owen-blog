import "./about.css";

export default function About() {
  //great reference
  //https://cdn.hashnode.com/res/hashnode/image/upload/v1631446162089/6D9tgVJsq.png

  return (
    <div className="aboutPage">
      <div class="container bioHeadshot">
        <div class="row">
          <div class="col-sm-4 column">
            <img
              className="bioImg"
              src="https://drive.google.com/uc?export=view&id=1wNuqXOVr_kSp2sQOdP2p66BsUasO4bK2"
              alt=""
            />
          </div>
          <div class="col-lg-8 column">
            <p className="biographyText">
              <p className="bioIntro">Hi, my name is</p>
              <p className="bioName">Owen Peters.</p>
              <p className="bioSubtext">I try to code web things.</p>
              <p className="bioDesc">
                I'm a software engineering with a strong interest in web design.
                I am currently working on this website, and looking for my entry
                into industry
              </p>
            </p>
          </div>
        </div>
        <div class="row bioButtons">
          <div class="col">
            <button type="button" class="btn btn-outline-secondary">
              View Portfolio
            </button>
            <button type="button" class="btn btn-outline-secondary">
              View Rest of Site
            </button>
          </div>
        </div>
      </div>
      <hr class="rounded"></hr>

      <div className="biography"></div>
      <div className="bio">{/* <!-- emphasis on M and O --> */}</div>
    </div>
  );
}
