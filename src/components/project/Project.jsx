import "./project.scss";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:4000/images/";

  //   return (
  //     <div className="post">
  //       {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}

  //       <div className="postInfo">
  //         <div className="postCats">
  //           {post.categories.map((c) => (
  //             <span className="postCat">{c.name}</span>
  //           ))}
  //         </div>
  //         <Link to={`/post/${post._id}`} className="link">
  //           <span className="postTitle">{post.title}</span>
  //         </Link>
  //         <span className="postDate">
  //           {new Date(post.createdAt).toDateString()}
  //         </span>
  //       </div>
  //       <p className="postDesc">{post.desc}</p>
  //     </div>
  //   );

  return (
    <>
      <div class="content">
        <div class="my_card">
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

        <div class="my_card">
          <img
            src="https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_4x3.jpg"
            alt="project picture"
          ></img>
          <p class="title">Master Class Site</p>
          <p class="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            ducimus animi numquam earum sed aut voluptatum vel velit. Placeat
            harum laboriosam iure sed assumenda sequi minima distinctio dolorum
            ipsam magnam!
            <br></br>
            <Link className="link" to="/">
              <i class="icon fa-brands fa-github fa-2xl"></i>
            </Link>
          </p>
        </div>
        <div class="my_card">
          <img
            src="https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_4x3.jpg"
            alt="project picture"
          ></img>
          <p class="title">Master Class Site</p>
          <p class="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            ducimus animi numquam earum sed aut voluptatum vel velit. Placeat
            harum laboriosam iure sed assumenda sequi minima distinctio dolorum
            ipsam magnam!
            <br></br>
            <Link className="link" to="/">
              <i class="icon fa-brands fa-github fa-2xl"></i>
            </Link>
          </p>
        </div>
        <div class="my_card">
          <img
            src="https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_4x3.jpg"
            alt="project picture"
          ></img>
          <p class="title">Master Class Site</p>
          <p class="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            ducimus animi numquam earum sed aut voluptatum vel velit. Placeat
            harum laboriosam iure sed assumenda sequi minima distinctio dolorum
            ipsam magnam!
            <br></br>
            <Link className="link" to="/">
              <i class="icon fa-brands fa-github fa-2xl"></i>
            </Link>
          </p>
        </div>
        <div class="my_card">
          <img
            src="https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_4x3.jpg"
            alt="project picture"
          ></img>
          <p class="title">Master Class Site</p>
          <p class="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            ducimus animi numquam earum sed aut voluptatum vel velit. Placeat
            harum laboriosam iure sed assumenda sequi minima distinctio dolorum
            ipsam magnam!
            <br></br>
            <Link className="link" to="/">
              <i class="icon fa-brands fa-github fa-2xl"></i>
            </Link>
          </p>
        </div>
        <div class="my_card">
          <img
            src="https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_4x3.jpg"
            alt="project picture"
          ></img>
          <p class="title">Master Class Site</p>
          <p class="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            ducimus animi numquam earum sed aut voluptatum vel velit. Placeat
            harum laboriosam iure sed assumenda sequi minima distinctio dolorum
            ipsam magnam!
            <br></br>
            <Link className="link" to="/">
              <i class="icon fa-brands fa-github fa-2xl"></i>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
