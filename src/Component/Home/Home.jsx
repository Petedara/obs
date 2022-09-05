import Navbar from "../Navbar"
import Testimonials from "./obswallpapper.jpg"

import Aboutus from "./Aboutus.mp4"

import "./home.css"

const Home = () =>{
    return(
        <nav className="home">
            <div>
                <Navbar />
                <div className="mid-nav">
                    <div>
                        <p>Discover How You Can Partner With Us FOR LIFE And Generate</p>
                        <p>“Multiple Income Streams Without Any Selling!”</p>
                    </div>
                    <div className="what-we-do">
                        <video src={Aboutus} className="about-us" ></video>
                    </div>
                    <div className="connect">
                        <a href="google.com">Connect on expertnaire</a>
                        <a href="google.com"> Connect on learnoflix</a>
                    </div>
                </div>
               
                <div>
                    <div className="testimonial-p">
                        <strong>What Others are earning right NOW...</strong>
                    </div>
                    <div className="reports">
                        <div className="testimonials">
                            <div>
                                <img src={Testimonials} alt="" />
                            </div>
                            <div>
                                <img src={Testimonials} alt="" />
                            </div>
                            <div>
                                <img src={Testimonials} alt="" />
                            </div>
                            <div>
                                <img src={Testimonials} alt="" />
                            </div>
                            <div>
                                <img src={Testimonials} alt="" />
                            </div>
                            <div>
                                <img src={Testimonials} alt="" />
                            </div>
                            <div>
                                <img src={Testimonials} alt="" />
                            </div>
                            <div>
                                <img src={Testimonials} alt="" />
                            </div>
                            <div>
                                <img src={Testimonials} alt="" />
                            </div>
                            <div>
                                <img src={Testimonials} alt="" />
                            </div>
                            <div>
                                <img src={Testimonials} alt="" />
                            </div>
                            <div>
                                <img src={Testimonials} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Home