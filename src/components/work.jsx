import React, { Component } from "react";
import gastro from "../gastro.PNG";
import shop from "../islamshop.png";
import admin from "../admin1.PNG";
import dizart from "../dizart.PNG";

import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
Swiper.use([Navigation, Pagination]);

class Work extends Component {
  componentDidMount() {
    let mySwiper = new Swiper(".swiper-container1", {

      direction: "horizontal",
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      initialSlide: 1,
      speed: 1000,
    });
    let mySwiper2 = new Swiper(".swiper-container2", {

      direction: "horizontal",
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      slidesPerView:1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      initialSlide: 2,
      speed: 1000,
      breakpoints: {
        999: {
            slidesPerView: 3,   
        }
       
       
    }
 
    });
  }
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container1">
          <div className="know_me">
            <h2 className="about_me">About Me</h2>
            <h2 className="about_me_more">Know Me More</h2>
            <div className="separate"></div>
          </div>
          <div className="info">
            <div className="info_left">
              <h2 className="infos_title">
                I'm <span className="info_name">Fares Hamali </span>, a Web
                Developer.
              </h2>
              <p className="info_details">
               Hey , My name is Fares Harmali , i am a Full Stack Web Developper & Web Designer
               I've got a Bachelor Degree in Computer sciences in 2020 and currently Studying for my Master Degree
                <br />
                I am passionate about everything Related to Software engineering and Programming.
                <br/>
                I love creating new things and work on interesting projects
              </p>
             
     
            </div>
            <div className="info_right">
              <div className="row">
                <span className="bold">Name</span>: Fares Harmali
              </div>
              <div className="row">
                <span className="bold">Email</span>:faresharmali3@gmail.com
              </div>
              <div className="row">
                <span className="bold">Age</span>: 22
              </div>
              <div className="row">
                <span className="bold">From</span>: Algeria
              </div>
              <div className="btn btn2"> Download cv</div>
            </div>
            
          </div>
        </div>
        <div className="container1 services">
          <div className="know_me">
            <h2 className="about_me">Services</h2>
            <h2 className="about_me_more">What I Do?</h2>
            <div className="separate"></div>
          </div>
          
          <div className="my_services">
            <div className="service">
              <div className="icon_container">
                <i class="fas fa-desktop "></i>
              </div>
              <div className="discription_container">
                <h2 className="description_title">Web Design / Dev</h2>
                <p>
                  I Can help you Build your Website and Boost your Business and reach more People
                </p>
              </div>
            </div>
            <div className="service">
              <div className="icon_container">
                <i class="fas fa-pencil-ruler"></i>
              </div>
              <div className="discription_container">
                <h2 className="description_title">UI / UX Design</h2>
                <p>
                I Can help you Design User interfaces and optimise the user's experience for your app
                </p>
              </div>
            </div>
            <div className="service">
              <div className="icon_container">
                <i class="fas fa-paint-brush"></i>
              </div>
              <div className="discription_container">
                <h2 className="description_title">APP Design & Developpement</h2>
                <p>
                  I will help you Design & Develop your Mobile app (android & IOS) Using the latest tech
                </p>
              </div>
            </div>
            <div className="service">
              <div className="icon_container">
                <i class="fas fa-palette"></i>
              </div>
              <div className="discription_container">
                <h2 className="description_title">Graphic Design</h2>
                <p>
                  I will help you Design anything (Logo , Banner ...)
                </p>
              </div>
            </div>
            
            
          </div>
    
        </div>
        <div className="container1 resumee">
          <div className="know_me">
            <h2 className="about_me">SUMMARY</h2>
            <h2 className="about_me_more">Resume</h2>
            <div className="separate"></div>
          </div>
          <div className="resume">
            <div className="education">
              <h2 className="edu_title">My Education</h2>
              <div className="education_item">
                <div className="years">2015-2020</div>
                <h2 id="deploma">Online Courses</h2>
                <h2>Udemy / Coursera / Udacity</h2>
                <p>
                  I took several courses on different topics , i can say i'm a self taught web developer
                </p>
              </div>
              <div className="education_item">
                <div className="years">2017-2020</div>
                <h2 id="deploma">Bachelor Degree</h2>
                <h2>University of Bouira</h2>
                <p>
                  I got my Bachelor's degree in computer sciences in 2020
                 with an excelent grade.
                </p>
              </div>
              <div className="education_item">
                <div className="years">2020-Now</div>
                <h2 id="deploma">Master Degree</h2>
                <h2>University of Bouira</h2>
                <p>
                  I'm currently studying for a Master's degree in Computer Sciences
                .
                </p>
              </div>
            </div>
            <div className="education">
              <h2 className="edu_title">My Experience</h2>
              <div className="education_item">
                <div className="years">2017-Now</div>
                <h2 id="deploma">Freelance</h2>
                <h2>Bouira Algeria</h2>
                <p>
                  I worked on several software projects as a Freelancer ,
                  and i'm still open for any projects.
                
            
                </p>
              </div>{" "}
              <div className="education_item">
                <div className="years">2019-2020</div>
                <h2 id="deploma">Web Dev Internship</h2>
                <h2>SETRAM Algeria</h2>
                <p>
                 I worked as an intern in a Large company in Algiers .where i built a fairly complexe system for Maintenance.
                </p>
              </div>{" "}
              <div className="education_item">
                <div className="years">2020-Now</div>
                <h2 id="deploma"> My Own Business</h2>
                <h2>Online Service</h2>
                <p>
                 I'm starting a new Online service in Algeria which is a food delivery App.
                </p>
              </div>
            </div>
          </div>
          
          <div className="skills">
          <h2 className="infos_title">My Skills</h2>
          <h2 className="infos_title"></h2>
                <div className="skill_container">
                  <div className="skill_details">
                    <h4>HTML5 & CSS3</h4>
                    <h4>95%</h4>
                  </div>
                <div className="skill_bar">
                <div style={{width:'95%'}} className="skill"></div>
              </div>
              </div>
                <div className="skill_container">
                  <div className="skill_details">
                    <h4>Web Design</h4>
                    <h4>70%</h4>
                  </div>
              <div className="skill_bar">
                <div style={{width:'70%'}} className="skill"></div>
              </div>
              </div>
                <div className="skill_container">
                  <div className="skill_details">
                    <h4>JavaScript</h4>
                    <h4>75%</h4>
                  </div>
              <div className="skill_bar">
                <div className="skill"></div>
              </div>
              </div>
                <div className="skill_container">
                  <div className="skill_details">
                    <h4>ReactJS</h4>
                    <h4>60%</h4>
                  </div>
              <div className="skill_bar">
                <div style={{width:'60%'}} className="skill"></div>
              </div>
              </div>
                <div className="skill_container">
                  <div className="skill_details">
                    <h4>PHP</h4>
                    <h4>60%</h4>
                  </div>
              <div className="skill_bar">
                <div style={{width:'60%'}} className="skill"></div>
              </div>
              </div>
                <div className="skill_container">
                  <div className="skill_details">
                    <h4>Laravel</h4>
                    <h4>80%</h4>
                  </div>
              <div className="skill_bar">
                <div style={{width:'80%'}} className="skill"></div>
              </div>
              </div>
                
               
              </div>
        </div>
        <div className="container1 portfolio">
          <div className="know_me">
            <h2 className="about_me">PORTFOLIO</h2>
            <h2 className="about_me_more">My Work</h2>
            <div className="separate"></div>
          </div>
          <div className="projects_container">
          <div class="swiper-container swiper-container2">
              <div class="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="project">
                      <img className="project_img" src={gastro} alt="" />
                      <h2 className="project_title">Sofiane Gastro</h2>
                      <div className="project_info">
                        <h4>Project : medical clinic Landing Page</h4>
                        <h4>Front End : HTML,  CSS , JAVASCRIPT</h4>
                      </div>
                   </div>
                </div>
                <div className="swiper-slide">
                <div className="project">
              <img className="project_img" src={admin} alt="" />
              <h2 className="project_title">SETRAM Algerie</h2>
              <div className="project_info">
              <h4>Project : Maintenance managing system</h4>
              <h4>Front End : HTML,  CSS , JAVASCRIPT</h4>
              <h4>Backend : PHP , LARAVEL , MYSQL</h4>
              </div>
            </div>
                </div>
                <div className="swiper-slide">
                <div className="project">
              <img className="project_img" src={shop} alt="" />
              <h2 className="project_title">Quick Shop</h2>
              <div className="project_info">
              <h4>Project : E-Store</h4>
              <h4>Front End : HTML,  CSS , JAVASCRIPT ,JQEURY</h4>
              <h4>Backend : PHP  , MYSQL</h4>
              </div>
            </div>
                </div>
                <div className="swiper-slide">
                <div className="project">
              <img className="project_img" src={dizart} alt="" />
              <h2 className="project_title">Dizart</h2>
              <div className="project_info">
              <h4>Project : Startup Website</h4>
              <h4>Front End : HTML,  CSS , JAVASCRIPT ,JQEURY</h4>
              <h4>Backend : PHP  , MYSQL</h4>
              </div>
            </div>
                </div>
           
              </div>

              <div className="swiper-pagination"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
            
            
           
          </div>
        </div>
        <div className="container1 testimonials_container ">
          <div className="know_me">
            <h2 className="about_me">TESTIMONIALS</h2>
            <h2 className="about_me_more">Clients</h2>
            <div className="separate"></div>
          </div>
          <div className="testemonials">
            <div class="swiper-container swiper-container1">
              <div class="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial">
                    <p>
                      <i className="fas fa-quote-right quote"></i> I enjoyed working with
                      fares.{" "}
                      <i className="fas fa-quote-left quote"></i>
                    </p>
                    <h2>Amine </h2>
                    <h2 className="client_job">Maintenance Responsible</h2>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial">
                    <p>
                      <i className="fas fa-quote-right quote"></i> Good quality product delivered before time.{" "}
                      <i className="fas fa-quote-left quote"></i>
                    </p>
                    <h2>Islam </h2>
                    <h2 className="client_job">Business owner</h2>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial">
                    <p>
                      <i className="fas fa-quote-right quote"></i> Hard working person ,respectful and serious.{" "}
                      <i className="fas fa-quote-left quote"></i>
                    </p>
                    <h2>sofiane </h2>
                    <h2 className="client_job">Doctor</h2>
                  </div>
                </div>
              </div>

              <div style={{marginTop:50}}  className="swiper-pagination"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
        <div className="container1 contact">
          <div className="know_me">
            <h2 className="about_me">CONTACT</h2>
            <h2 className="about_me_more">Get in Touch</h2>
            <div className="separate"></div>
          </div>
          <div className="contact_me">
            <div className="contact_element contact_data">
                <h3>ADDRESS</h3>
                <p>Khaled Mesbahi City</p>
                <p>596 lgts LPP BOUIRA</p>
                <p>Bouira Algeria</p>
                <p></p>
                <p  style={{marginTop:30+'px'}}><i class="fas fa-phone-square-alt"></i> +213660818412</p>
                <p> <i class="fas fa-envelope-square"></i> Faresharmali3@gmail.com</p>
                <h3>FOLLOW ME</h3>
                <div className="networks">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-github-square"></i>
          <i class="fab fa-linkedin-in"></i>
        </div>
            </div>
            <div className="contact_element contact_form">
              <h2>TALK TO ME</h2>
              <form action="mailer.php" method="POST" className="contactMe_form">
                <input type="text" placeholder="Name" name="sujet" />
                <input type="text" placeholder="Email" name="email"/>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Tell me more about your needs ..."></textarea>
                <button>Send message</button>
              </form>
            </div>

          </div>
        </div>
        <footer>
        Copyright © 2020 Fares. All Rights Reserved.

        </footer>
      </React.Fragment>
    );
  }
}

export default Work;
