import React, { Component } from 'react';
import About from './components/about'
import Navigation from './components/navigation'
import Work from './components/work'

 function start(){
  let conts=document.querySelectorAll(".container1");
  let sum=document.querySelector(".about").offsetHeight;
  const heights=[];
  heights.push(sum);
  conts.forEach(x=>heights.push(sum+=(x.offsetHeight)));
  
    console.log(heights);
 
  window.addEventListener('scroll', function(e) {
    const li = document.querySelectorAll(".li1");
    const container=document.querySelector(".about");

    if(window.scrollY>300){
    document.querySelector(".nav").classList.add("fix");
    }
    if(window.scrollY<120){
    document.querySelector(".nav").classList.remove("fix");
    }
for (let i = 0; i < heights.length; i++) {
  if(window.scrollY<heights[0]-80){
    for (let j = 0; j < li.length; j++) {
      li[j].classList.remove("active");
    }
    li[0].classList.add("active");
     
     }
     else if(window.scrollY>=heights[i]-80 && window.scrollY<heights[i+1]){
       
      for (let j = 0; j < li.length; j++) {
        li[j].classList.remove("active");
      }
      li[i+1].classList.add("active");
     }
  
}
   

  });
}
class app extends Component {
  
  state = { }
   
 componentDidMount(){
start();
 }
  render() { 
    return(
      <React.Fragment>
      <About />
      <Work />
      </React.Fragment>
      
    )
   
  }
}
 
export default app;