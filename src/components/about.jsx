import React, { Component } from "react";
import Navigation from "./navigation";

const texts = ["Fares.", "a freelancer.", "a developper.", "a designer."];
let count = 0,
  index = 0,
  current = "",
  letter = "";
  function scrollTo(x) {
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

function type() {
  if (count >= texts.length) {
    count = 0;
  }
  current = texts[count];
  letter = current.slice(0, ++index);
  document.querySelector(".name").textContent = letter;
  if (letter.length === current.length) {
    count++;
    index = 0;
    setTimeout(deleteletters, 1500);
  } else {
    setTimeout(type, 200);
  }
}
function deleteletters() {
  if (letter.length === 0) {
    index = 0;
    setTimeout(type, 200);
  } else {
    letter = current.slice(0, --index);
    document.querySelector(".name").textContent = letter;
    setTimeout(deleteletters, 50);
  }
}


class About extends Component {
  componentDidMount() {
    type();
    const arrow = document.querySelector(".x4");
    const container = document.querySelector(".about");
    const btn = document.querySelector(".hirebtn");
    btn.addEventListener("click",()=>{
      scrollTo(6);
    });
    arrow.addEventListener("click", () => {
      window.scrollTo(0, container.offsetHeight + 50);
    });
  }
  render() {
    return (
      <section className="about">
        <Navigation />
        <div id="ab" className="container">
          <h1>Welcome</h1>
          <div className="flex">
            <h3 className="nameb">i'm </h3>
            <h3 className="name"></h3>
          </div>
          <h3 className="base">based in Bouira, Algeria.</h3>
          <div className="btn hirebtn">Hire Me</div>
          <i className="fas fa-chevron-down x4"></i>
        </div>
      </section>
    );
  }
}

export default About;
