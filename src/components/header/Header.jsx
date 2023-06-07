import "./Header.css"

export default function Header() {

    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Mo's </span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img 
                className="headerImg"
                src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg"
                alt=""
            />
        </div>
    )
}