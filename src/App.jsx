import React, { useState } from 'react'
import { render } from "react-dom";
import icon from './assets/icon.svg'
import headshot from './assets/headshot.svg'
import breadventure from './assets/breadventurelogo.svg'
import marquee from './assets/iconmarquee.svg'
import camp from './assets/LarkLogo.svg'
import leafleft from './assets/leafleft.svg'
import leafright from './assets/leafright.svg' 
import { SiBootstrap, SiCss3, SiFlask, SiGit, SiGithub, SiHeroku, SiHtml5, SiJavascript, SiJinja, SiLinkedin, SiPostgresql, SiPython, SiReact } from '/node_modules/react-icons/si';
import './App.css'

// Render all icons and 
function HoverIcons() {
  const [techText, setTechText] = useState("");

  // Arrow function returns another arrow function; currying or partial application
  const hoverText = text => () => setTechText(text);
  const resetText = () => setTechText("$YOUR_TOOL");

  return (
    <div class="grid grid-rows-2 place-items-center mt-10">
      <div class="grid grid-cols-11 gap-6 py-6">
        <SiPython class="icon" onMouseEnter={ hoverText("Python") } onMouseLeave={ resetText }/>
        <SiJavascript class="icon" onMouseEnter={ hoverText("Javascript") } onMouseLeave={ resetText }/>
        <SiCss3 class="icon" onMouseEnter={ hoverText("CSS") } onMouseLeave={ resetText }/>
        <SiHtml5 class="icon" onMouseEnter={ hoverText("HTML") } onMouseLeave={ resetText }/>
        <a href="https://git-scm.com/">
          <SiGit class="icon" onMouseEnter={ hoverText("Git") } onMouseLeave={ resetText }/>
        </a> 
        <a href="https://reactjs.org/">
          <SiReact class="icon" onMouseEnter={ hoverText("React") } onMouseLeave={ resetText }/>
        </a> 
        <a href="https://getbootstrap.com/">
          <SiBootstrap class="icon" onMouseEnter={ hoverText("Bootstrap") } onMouseLeave={ resetText }/>
        </a> 
        <a href="https://www.postgresql.org/">
          <SiPostgresql class="icon" onMouseEnter={ hoverText("PostgreSQL") } onMouseLeave={ resetText }/>
        </a> 
        <a href="https://id.heroku.com/">
          <SiHeroku class="icon" onMouseEnter={ hoverText("Heroku") } onMouseLeave={ resetText }/>
        </a>
        <a href="https://flask.palletsprojects.com/en/2.2.x/">
          <SiFlask class="icon" onMouseEnter={ hoverText("Flask") } onMouseLeave={ resetText }/>
        </a> 
        <a href="https://jinja.palletsprojects.com/en/3.1.x/">
          <SiJinja class="icon" onMouseEnter={ hoverText("Jinja") } onMouseLeave={ resetText }/>
        </a> 
      </div>
      <div class="grid grid-cols-2 bg-white rounded-md py-2 px-4 text-xl tracking-wide">
        <div class="">
          <span>I am experienced with:</span>
        </div>
        <div class="font-bold">
          <span>{ techText }</span>
        </div>
      </div>
    </div>
  );
  

}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      {/* Nav Bar */}
        <div class="shadow-lg top-0 bg-white relative">
          <div class="flex justify-end mx-20 h-20">
              <div class="flex items-center mr-auto">
                <img src={ leafleft } class="h-14"></img>
                <a href="/" class="flex items-center">
                  <img src={icon} class="h-14" alt="Eliza" />
                </a>
              </div>
              <div class="flex items-center gap-9">
                <a href="" class="text-xl hover:text-cyan-400 transition-colors">Home</a>
                <a href="#about" class="text-xl hover:text-cyan-400 transition-colors">About</a>
                <a href="#tech" class="text-xl hover:text-cyan-400 transition-colors">Tech</a>
                <a href="#projects" class="text-xl hover:text-cyan-400 transition-colors">Projects</a>
                {/* <a href="#hobbies" class="text-xl hover:text-cyan-400 transition-colors">Hobbies</a> */}
                <a href="#contact" class="text-xl hover:text-cyan-400 transition-colors">Contact</a>
                {/* <button>
                  Dark
                </button> */}
              </div>
          </div>
        </div>
    
      {/* Intro and Headshot */}
      <div class="grid grid-cols-2 place-items-center mt-10">
        <div>
          <h1>Hi, I'm Eliza.</h1>
        </div>

        <div>
          <img src={headshot} id="headshot"></img>
        </div>
      </div>

      {/* About */}
      <div class="mt-20">
        <div class="flex flex-row-3 justify-center">
            <img src={ leafleft } class="icon"></img>
            <h1 id="about" class="mx-2">About</h1>
            <img src={ leafright } class="icon"></img>
        </div>
        <div class="grid grid-cols-2 gap-6 place-items-center my-10">
          <div class="w-2/3">
              <p>
                As a Bay Area Native, my mission is to bridge local artistic communities and the tech world. Pre-pandemic I was working in the live music industry as a server in a folk venue and as a music teacher. This last year, I changed as my communities changed. Hackbright became the clear next step in facilitating my goals, and allowing me to problem solve at new levels. To me, coding is a freedom of expression, allowing me to make intuitive tools for learning, exploring, and teaching, as well as connecting smaller communities, both local and online. I love to build to things. With coding, I can turn around and give back to those artistic communities I’ve come from.
              </p>
            </div>
          <div class="w-2/3 grid grid-rows-2">
            <div>
              <p class="text-2xl">Eliza Cantwell</p>
              <p class="text-xl">Full-Stack Software Engineer</p>
              <p class="text-xl">Bay Area, California</p>
            </div>
            <div class="grid grid-cols-2 place-items-center py-6">
              <a href="https://www.linkedin.com/in/eliza-cantwell/">
                  <SiLinkedin class="icon"/>
              </a> 
              <a href="https://github.com/idelizer" >
                <SiGithub class="icon"/>
              </a> 
            </div>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div class="mt-20">
        <div class="flex flex-row-3 justify-center">
            <img src={ leafleft } class="icon"></img>
            <h1 id="tech" class="mx-2">Technologies</h1>
            <img src={ leafright } class="icon"></img>
        </div>
        <HoverIcons />
      </div>
   
      {/* Projects */}
      <div class="mt-20">
        <div class="flex flex-row-3 justify-center">
            <img src={ leafleft } class="icon"></img>
            <h1 id="projects" class="mx-2">Projects</h1>
            <img src={ leafright } class="icon"></img>
        </div>
        
        <div class="mx-0 sm:mx-20">
          <div class="card relative rounded-lg overflow-hidden shadow-lg flex items-center justify-center gap-32 mt-10">
            <div class="ml-20">
              <a href="http://breadventure.eliza.engineer/">
                <img src={breadventure} class="project-icon w-full transition-all duration-200 ease-out" alt="Breadventure"></img>
              </a>
              <a href='http://breadventure.eliza.engineer/' class='block mt-10 px-4 py-3 rounded-lg text-lg tracking-wide text-center bg-white transition-colors duration-200 ease-out hover:bg-gray hover:text-white transform focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                Visit Breadventure
              </a>
              <a href='https://github.com/idelizer/breadventure' class='block mt-6 px-4 py-3 rounded-lg text-lg tracking-wide text-center bg-white transition-colors duration-200 ease-out hover:bg-gray hover:text-white transform focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                {/* <SiGithub class="inline transition-all duration-200 ease-out" /> */}
                Github
              </a>
            </div>
            <div class="m-10 basis-1/2">
              <h2 class="text-2xl">Breadventure</h2>
              <p class="mt-6">Breadventure is a solo project, allowing me to test how much I can accomplish when I set my mind to it. Projects will change as you go, no matter how much planning you have, so be adaptable and flexible. That said, this is no excuse to not plan at all; in fact, having a roadmap or at least well organized vision for a project makes all the difference. This project showed me the scope of planning a complete product, and helped me become comfortable with making every decision that would impact my final version. </p>
            </div>
          </div>

          <div class="card relative rounded-lg overflow-hidden shadow-lg flex items-center justify-center gap-32 mt-10">
            <div class="ml-20">
              <img src={camp} class="project-icon w-full transition-all duration-200 ease-out" alt="Breadventure"></img>
              <a href='https://github.com/camphoric' class='block mt-10 px-4 py-3 rounded-lg text-lg tracking-wide text-center bg-white transition-colors duration-200 ease-out hover:bg-gray hover:text-white transform focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                Github
              </a>
            </div>
            <div class="m-10 basis-1/2">
              <h2 class="text-2xl">Camphoric</h2>
              <p class="mt-6">Volunteer opportunity with an open source project affiliated with my favorite local music non-profit, creating the registration system for music camps in California. Opportunity to work with world class software engineers.</p>
              <p>What I learned: I learned the process behind architectural planning, database design when working with a team. This was my first experience seeing what it is like to balance difference viewpoints and experience, when teammates bring ideas to the table, what it’s like to weight them, then execute a plan. The flow of how to break down problems larger than 1 person can accomplish, and the value of multiple inputs. I learned firsthand that being a beginner has a place at the table too, since I sometimes saw things that the experienced engineers didn’t, or could point out when the code was unclear.</p>
            </div>
          </div>

          <div class="card relative rounded-lg overflow-hidden shadow-lg flex items-center justify-center gap-32 mt-10">
            <div class="ml-20">
              <a href="https://marquee.eliza.engineer/">
                <img src={marquee} class="project-icon w-full transition-all duration-200 ease-out" alt="Breadventure"></img>
              </a>
              <a href='https://marquee.eliza.engineer/' class='block mt-10 px-4 py-3 rounded-lg text-lg tracking-wide text-center bg-white transition-colors duration-200 ease-out hover:bg-gray hover:text-white transform focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                Visit Marquee
              </a>
              <a href='https://github.com/idelizer/marquee' class='block mt-6 px-4 py-3 rounded-lg text-lg tracking-wide text-center bg-white transition-colors duration-200 ease-out hover:bg-gray hover:text-white transform focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                Github
              </a>
            </div>
            <div class="m-10 basis-1/2">
              <h2 class="text-2xl">Marquee</h2>
              <p class="mt-6">This project was an exercise in my favorite aspect of coding: you can create any tool you can imagine. I built marquee after hearing from a manager at my current work (a non profit venue for live folk music called the link:Freight and Salvage), mentioned how much easier it would be to change out the marquee display with a simple character counter. I also learned react animations from a link:blog post from a previous Hackbright graduate.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hobbies */}
      {/* <div>
        <h1 id="hobbies">Hobbies</h1>
        <span class="">When I am not coding, I love to </span>
      </div> */}

      {/* Contact */}
      <div class="mt-20 mb-10">
        <div class="flex flex-row-3 justify-center">
            <img src={ leafleft } class="icon"></img>
            <h1 id="contact" class="mx-2">Contact</h1>
            <img src={ leafright } class="icon"></img>
        </div>
        <div class="py-10 text-2xl">
          <h2>elizaofthebay@gmail.com</h2>
        </div>
      </div>


    </div>
  )
}

export default App
