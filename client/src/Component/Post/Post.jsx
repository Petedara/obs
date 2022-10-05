import React from "react";

import SectionDropdown from "./SectionDropdown";

import Navbar from "../Navbar";
import "./post.css";

const Post = () => {

  return (
    <div className="post">
      <Navbar />
      <form method="POST" action="/api/create-post">
        <div className="update-web-page">
          <h1>UPDATE HOME PAGE</h1>
          <h1>UPLOAD A COURSE</h1>
        </div>
        <div className="post-body">
          <div>
            <div className="post-course-name">
              <label htmlFor="Course Name">Course Name :</label>
              <input type="text"  name="courseName"/>
            </div>
           <SectionDropdown />
            <div className="submit-post">
              <button>Submit Post</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Post;                                                                   