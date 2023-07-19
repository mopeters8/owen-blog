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
    <div>
      <div class="content">
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
          </p>
        </div>
      </div>
    </div>
  );
}
