import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
                src="https://www.minimaldesksetups.com/wp-content/uploads/2022/08/DSCF7140-min-1.jpg" 
                alt="" 
                className="singlePostImg" 
            />

            <h1 className="singlePostTitle">
                First mutant blog post?
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>

            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Owen Peters</b>
                </span>
                <span className="singlePostDate">
                    1 hour ago
                </span>
            </div>
            <p className="singlePostDesc">
                This is a test single post info thing. Just putting random text as filler,
                until this can be generated with legit user data! How fun! This is technically the first
                one, so I want to treat it nicely.
            </p>
        </div>
    </div>
  )
}
