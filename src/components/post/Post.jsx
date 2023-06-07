import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img 
            className='postImg'
            src="https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg"
            alt = ""
        />

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                This is example post title!
            </span>
            <hr/>
            <span className="postDate">1 hour ago!</span>
        </div>
        <p className='postDesc'> 
            This is some flavor text, sort of as a test i'd say! I am going to make This
            text extremely long and say a lot of clutter just because i gotta test some things.
            This makes no sense at all. I have to make it even longer now.  I have to make it even longer now.
            I have to make it even longer now.  I have to make it even longer now.
        </p>
    </div>
  )
}
