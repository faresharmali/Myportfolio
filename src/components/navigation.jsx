import React, { Component } from "react";
import fares from "../fares.jpg";
import logo from "../logo.png";

class Navigation extends Component {
  componentDidMount(){
    const links=document.querySelectorAll(".link");
    const social=document.querySelectorAll(".social_hover");
    for(let i=0;i<links.length;i++){
      links[i].addEventListener("mouseover",()=>{
       
       social[i].style.opacity=1;
       links[i].style.color="#e2505f";
      })
      links[i].addEventListener("mouseout",()=>{
        social[i].style.opacity=0;
        links[i].style.color="#fff";
      })
    }
  }
  scrollTo(x) {
    let conts=document.querySelectorAll(".container1");
    let sum=document.querySelector(".about").offsetHeight;
    const heights=[];
    heights.push(sum);
    conts.forEach(x=>heights.push(sum+=x.offsetHeight));
    if(x===0){
      window.scrollTo(0,0);
    }
    else {
      window.scrollTo(0,heights[x-1]-50);
    }
  }
  render() {
    return (
      <div className="nav">
        <div className="logo">
        <img className="logo_img" src={logo} alt="" />
        </div>
        <div className="social">
          <div className="social_hover fb">facebook</div>
          <div className="social_hover git">github</div>
          <div className=" social_hover Li">LinkedIn</div>
         <a className="link " href="https://web.facebook.com/fares.harmali" target="_blank"> <i class="fab fa-facebook-f"></i></a>
          <a className="link " href="https://github.com/fares081998" target="_blank"><i class="fab fa-github-square"></i></a>
         <a className="link " href="https://www.linkedin.com/in/fares-harmali-822649137/" target="_blank"> <i class="fab fa-linkedin-in"></i></a>
        </div>
        <div className="navList">
          <ul>
            <li onClick={() => this.scrollTo(0)} className="li1 active">
              Home
            </li>
            <li onClick={() => this.scrollTo(1)} className="li1">
              About
            </li>
            <li onClick={() => this.scrollTo(2)} className="li1">
              What i do
            </li>
            <li onClick={() => this.scrollTo(3)} className="li1">
              Resume
            </li>
            <li onClick={() => this.scrollTo(4)} className="li1">
              Portfolio
            </li>
            <li onClick={() => this.scrollTo(5)} className="li1">
              Clients
            </li>
            <li onClick={() => this.scrollTo(6)} className="li1">
              contact
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
