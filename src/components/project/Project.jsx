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
    <div className="post">
      <div class="content">
        <div class="my_card">
          <div class="icon">
            <i class="material-icons md-36">face</i>
          </div>
          <p class="title">Master Class Site</p>
          <p class="text">Click to see or edit your profile page.</p>
        </div>
      </div>
    </div>
  );
}
