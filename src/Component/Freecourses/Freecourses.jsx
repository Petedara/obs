import React, { useState } from "react";

import Navbar from "../Navbar";
import Aboutus from "../Home/Aboutus.mp4";
import Twitterurl from "./twitter_url.png";
import Facebookurl from "./facebook_url.png";
import Whatsappurl from "./whatsapp_url.png";

import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

import "./freecourses.css";

const Freecourses = () => {
  const [accordion, setAccordion] = useState(false);

  const toggleAccordion = () => {
    setAccordion(!accordion);
  };

  const [isAccordion, setIsAccordion] = useState(false);

  const toggleIsAccordion = () => {
    setIsAccordion(!isAccordion);
  };

  return (
    <nav>
      <Navbar />
      <div className="free-course">
        <div className="course-grid">
          <div className="course-name">
            <div className="course-list">
              <div className="course-title" onClick={toggleAccordion}>
                <strong>Digital and affiliate marketing</strong>
              </div>
              <div
                className="course-topics"
                style={accordion ? { display: "block" } : { display: "none" }}
              >
                <div className="course-drop-down">
                  <div className="topic" onClick={toggleIsAccordion}>
                    <div className="outline">
                     <input type="radio" />
                    </div>
                    <div>
                      {" "}
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum, tempore.
                    </div>
                  </div>
                  <div
                    style={isAccordion ? { display: "block" } : { display: "none" }}
                  >
                    <div className="sub-topic">
                      <div className="sub-topic-outline">
                       <input type="radio" />
                      </div>
                      <div>
                        {" "}
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Eum, tempore.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="course-display">
          <div className="course-video">
            <video src={Aboutus} controls></video>
          </div>
          <div className="video-title">
            <strong>
              Lorem istrongsum dolor sit amet consectetur adipisicing elit.
              Similique, ratione.
            </strong>
            <hr className="border-bottom" />
          </div>
          <div>
            <strong className="description-title">About this course</strong>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              velit.
              <hr className="border-bottom" />
            </p>
          </div>
          <div className="make-comment">
            <div className="profile-background">
              <i class="fa-solid fa-user profile-icon"></i>
            </div>
            <div className="input-plate">
              <input type="text" placeholder="Add a comment..." />
              <hr className="border-bottom" />
              <div className="action-on-comment">
                <div className="cancle-comment">CANCLE</div>
                <div className="send-comment">SEND</div>
              </div>
            </div>
          </div>

          <div className="comment-section">
            <div className="profile-photo">
              <i class="fa-solid fa-user photo-icon"></i>
            </div>
            <div className="name-and-comment">
              <strong className="profile-name">Afolayan Peter</strong>
              <div className="comment-note">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                illum temporibus, voluptatem et iure inventore.
              </div>
            </div>
          </div>
          <div className="comment-section">
            <div className="profile-photo">
              <i class="fa-solid fa-user photo-icon"></i>
            </div>
            <div className="name-and-comment">
              <strong className="profile-name">Afolayan Peter</strong>
              <div className="comment-note">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                illum temporibus, voluptatem et iure inventore.
              </div>
            </div>
          </div>
          <div className="comment-section">
            <div className="profile-photo">
              <i class="fa-solid fa-user photo-icon"></i>
            </div>
            <div className="name-and-comment">
              <strong className="profile-name">Afolayan Peter</strong>
              <div className="comment-note">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                illum temporibus, voluptatem et iure inventore.
              </div>
            </div>
          </div>
        </div>
        <div className="image-url">
          <a href="" target="_blank" className="anchor-image">
            <img src={Facebookurl} alt="Connect with us on facebook." />
          </a>
          <a
            href="https://tinyurl.com/ese-edosa"
            target="_blank"
            className="anchor-image"
          >
            <img src={Whatsappurl} alt="Connect with us on whatsapp." />
          </a>
          <a href="" target="_blank" className="anchor-image">
            <img src={Twitterurl} alt="Connect with us on twitter." />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Freecourses;
