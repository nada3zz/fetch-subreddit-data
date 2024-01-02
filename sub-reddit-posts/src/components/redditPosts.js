import React, { useState, useEffect } from "react";
import axios from "axios";

const RedditPosts = ({ endpoint }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/r/flutterDev/${endpoint}`
        );
        setPosts(response.data.posts);
      } catch (error) {
        console.error(`Error fetching ${endpoint} posts:`, error);
      }
    };

    fetchData();
  }, [endpoint]);

  return (
    <div>
      <h2>{endpoint.toUpperCase()} Posts</h2>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <h5>{post.title}</h5>
            <p>{post.selftext}</p>
            <small>Author: {post.author}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RedditPosts;
