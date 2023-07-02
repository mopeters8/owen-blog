import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/posts";
// import Sidebar from "../../components/sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [moPosts, setmoPosts] = useState([]);

  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };

    const fetchMoineyPosts = async () => {
      //Using my unique ID from mongo. This is probably dumb.
      const res = await axios.get(
        "/posts/?userId=649629ec0acfea8d85361620" + search
      );
      setmoPosts(res.data);
    };
    fetchPosts();
    fetchMoineyPosts();
  }, [search]);

  //TODO: home page 3 column - why, how to use, rules
  //why talk about place to post for friends and family and to show off cs skills -> then link to about page
  // how to use, where to post, what to click
  // rules - no racism, sexual content, or bullying. this is a positive space.

  return (
    <>
      <Header />
      <div className="title">
        <h2 className="sectionTitle">Owen's Posts</h2>
        <hr />
      </div>
      <div className="home">
        <Posts posts={moPosts} />
      </div>
      <div className="title">
        <h2 className="sectionTitle">Other Posts</h2>
        <hr />
      </div>
      <div className="home">
        <Posts posts={posts} />
      </div>
    </>
  );
}
