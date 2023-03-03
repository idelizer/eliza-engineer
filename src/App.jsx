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
  const resetText = () => setTechText("");

  return (
    <div class="p-10 grid grid-rows-2 place-items-center">
      <div class="grid grid-cols-11 gap-6">
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
      <div class="grid grid-cols-2 gap-3 pt-10">
        <div>
          <span>I am experienced with</span>
        </div>
        <div class="text-left">
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
      <header class="shadow-lg sticky top-0 z-50 bg-white">
        <div class="container mx-auto flex h-20">
          <nav class="relative w-full flex flex-wrap contents">
            <a href="/" class="flex items-center justify-end">
              <img class="h-14" src={icon} alt="Eliza" />
            </a>
            <div class="flex w-full flex-wrap items-center justify-end">
              <a href="" class="px-3">
                <span>Home</span>
              </a>
              <a href="#about" class="px-3">
                <span>About</span>
              </a>
              <a href="#tech" class="px-3">
                <span>Tech</span>
              </a>
              <a href="#projects" class="px-3">
                <span>Projects</span>
              </a>
              <a href="#hobbies" class="px-3">
                <span>Hobbies</span>
              </a>
              <a href="#contact" class="px-3">
                <span>Contact</span>
              </a>
              <button>
                Dark
              </button>
            </div>
          </nav>
        </div>
      </header>
    
      <br />

      {/* Intro and Headshot */}
      <div class="grid grid-cols-2 place-items-center">
        <div>
          <h1>Hi, I'm Eliza.</h1>
        </div>

        <div>
          <img src={headshot} id="headshot"></img>
        </div>
      </div>

      <br />

      {/* About */}
      <div>
        <div class="flex flex-row-3 justify-center">
            <img src={ leafleft } class="icon"></img>
            <h1 id="about" class="mx-2">About</h1>
            <img src={ leafright } class="icon"></img>
        </div>
        <div class="grid grid-cols-2 gap-6 place-items-center py-10">
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

      <br />

      {/* Technologies */}
      <div>
        <div class="flex flex-row-3 justify-center">
            <img src={ leafleft } class="icon"></img>
            <h1 id="tech" class="mx-2">Technologies</h1>
            <img src={ leafright } class="icon"></img>
        </div>
        <HoverIcons />
      </div>
   
      <br />

      {/* Projects */}
      <div>
        <div class="flex flex-row-3 justify-center">
            <img src={ leafleft } class="icon"></img>
            <h1 id="projects" class="mx-2">Projects</h1>
            <img src={ leafright } class="icon"></img>
        </div>
        <div class="p-10 grid sm:grid-cols-1 md:grid-cols-3 gap-5 py-10">
          <div class="relative rounded overflow-hidden shadow-lg group">
            <a href="http://breadventure.eliza.engineer/">
              <img src={breadventure} class="icon w-full transition-all duration-200 ease-out" alt="Breadventure"></img>
            </a>
            <a href='https://github.com/idelizer/breadventure'>
              <SiGithub class="icon w-full transition-all duration-200 ease-out" />
            </a>
            <h2>Breadventure</h2>
            <p class="group-hover:blur-[4px]">Breadventure is a WebApp that tracks your experiments with bread-making and sourdough starters. I built the backend and frontend with Flask, PostgreSQL, and the Cloudinary and Spoonacular APIs. It was deployed via Heroku. This app was the capstone project of Hackbright Academy. </p>
            
            <div class="inset-0 absolute p-5 flex flex-col justify-end bg-black/40 opacity-0 scale-110 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out">
              <h3>Insight</h3>
              <p>Breadventure is a solo project, allowing me to test how much I can accomplish when I set my mind to it. Projects will change as you go, no matter how much planning you have, so be adaptable and flexible. That said, this is no excuse to not plan at all; in fact, having a roadmap or at least well organized vision for a project makes all the difference. This project showed me the scope of planning a complete product, and helped me become comfortable with making every decision that would impact my final version. </p>
            </div>
          </div>

          <div class="relative rounded overflow-hidden shadow-lg group">
              <img src={camp} class="icon w-full transition-all duration-200 ease-out" alt="Camphoric"></img>
              <a href='https://github.com/camphoric'>
                <SiGithub class="icon w-full transition-all duration-200 ease-out" />
              </a>
            <div>
              <h2>Camphoric</h2>
              <h3 class="group-hover:blur-[4px]">Description</h3>
              <p class="group-hover:blur-[4px]">Volunteer opportunity with an open source project affiliated with my favorite local music non-profit, creating the registration system for music camps in California. Opportunity to work with world class software engineers.</p>
              
              <div class="inset-0 absolute p-5 flex flex-col justify-end bg-black/40 opacity-0 scale-110 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out">
                <h3>Insight</h3>
                <p>What I learned: I learned the process behind architectural planning, database design when working with a team. This was my first experience seeing what it is like to balance difference viewpoints and experience, when teammates bring ideas to the table, what it’s like to weight them, then execute a plan. The flow of how to break down problems larger than 1 person can accomplish, and the value of multiple inputs. I learned firsthand that being a beginner has a place at the table too, since I sometimes saw things that the experienced engineers didn’t, or could point out when the code was unclear.</p>
              </div>
   
            </div>
          </div>

          <div class="relative rounded overflow-hidden shadow-lg group">
            <a href="https://marquee.eliza.engineer/">
              <img src={marquee} class="icon w-full transition-all duration-200 ease-out" alt="Marquee"></img>
            </a>
            <a href='https://github.com/idelizer/marquee'>
              <SiGithub class="icon w-full transition-all duration-200 ease-out" />
            </a>
            <h2>Marquee</h2>
            <h3 class="group-hover:blur-[4px]">Description</h3>
            <p class="group-hover:blur-[4px]">description</p>
            
            <div class="inset-0 absolute p-5 flex flex-col justify-end bg-black/40 opacity-0 scale-110 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out">
              <h3>Insight</h3>
              <p>This project was an exercise in my favorite aspect of coding: you can create any tool you can imagine. I built marquee after hearing from a manager at my current work (a non profit venue for live folk music called the link:Freight and Salvage), mentioned how much easier it would be to change out the marquee display with a simple character counter. I also learned react animations from a link:blog post from a previous Hackbright graduate.</p>
            </div>
          </div>
        </div>
      </div>
      

      <br />

      {/* Hobbies */}
      {/* <div>
        <h1 id="hobbies">Hobbies</h1>
        <span class="">When I am not coding, I love to </span>
      </div> */}

      {/* Contact */}
      <div>
        <div class="flex flex-row-3 justify-center">
            <img src={ leafleft } class="icon"></img>
            <h1 id="contact" class="mx-2">Contact</h1>
            <img src={ leafright } class="icon"></img>
        </div>
        <div class="py-10">
          <h2>elizaofthebay@gmail.com</h2>
        </div>
      </div>


    </div>
  )
}

export default App
