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
    <div class="mt-10">
      <div class="flex flex-row justify-around p-6" onMouseLeave={ resetText }>
        <div onMouseEnter={ hoverText("Python") }>
          <SiPython class="icon"/>
        </div>
        <div onMouseEnter={ hoverText("Javascript")}>
          <SiJavascript class="icon"/>
        </div>
        <div onMouseEnter={ hoverText("CSS") }>
          <SiCss3 class="icon"/>
        </div>
        <div onMouseEnter={ hoverText("HTML") }>
          <SiHtml5 class="icon"/>
        </div>
        <a href="https://git-scm.com/" onMouseEnter={ hoverText("Git") }>
          <SiGit class="icon"/>
        </a> 
        <a href="https://reactjs.org/" onMouseEnter={ hoverText("React") }>
          <SiReact class="icon"/>
        </a> 
        <a href="https://getbootstrap.com/" onMouseEnter={ hoverText("Bootstrap") }>
          <SiBootstrap class="icon"/>
        </a> 
        <a href="https://www.postgresql.org/" onMouseEnter={ hoverText("PostgreSQL") }>
          <SiPostgresql class="icon"/>
        </a> 
        <a href="https://id.heroku.com/" onMouseEnter={ hoverText("Heroku") }>
          <SiHeroku class="icon"/>
        </a>
        <a href="https://flask.palletsprojects.com/en/2.2.x/" onMouseEnter={ hoverText("Flask") }>
          <SiFlask class="icon"/>
        </a> 
        <a href="https://jinja.palletsprojects.com/en/3.1.x/" onMouseEnter={ hoverText("Jinja") }>
          <SiJinja class="icon"/>
        </a> 
      </div>
      <div class="flex flex-row justify-around pt-6">
        <div class="grid grid-cols-2 bg-white w-fit rounded-md py-2 px-4 text-xl tracking-wide">
          <div class="text-right">
            <span>I am experienced with:</span>
          </div>
          <div class="font-bold px-4">
            <span>{ techText }</span>
          </div>
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
      <div class="grid grid-cols-2 place-items-center mt-10 px-6">
        <div>
          <h1>Hi, I'm Eliza.</h1>
          <h2 class="text-2xl mt-10">I'm a full-stack software engineer.</h2>
        </div>

        <div>
          <img src={headshot} id="headshot"></img>
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
              <p class="mt-6">Marquee is a character counter that tracks how many letters you will need transitioning your marquee layout between dates. You enter the characters currently displayed on your marquee, then the characters you intend to display next. This app then gives you the difference in characters.</p>
              <p class="mt-6">This project was an exercise in my favorite aspect of coding: you can create any tool you can imagine. I built marquee after hearing from a manager at my current work, a non profit venue for live folk music, mentioned how much easier it would be to change out the marquee display with a simple character counter. This was my first project using React and CSS to animate.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div class="mt-20">
        <div class="flex flex-row-3 justify-center">
            <img src={ leafleft } class="icon"></img>
            <h1 id="about" class="mx-2">About</h1>
            <img src={ leafright } class="icon"></img>
        </div>
        <div class="grid grid-cols-2 place-items-center m-10">
          <div class="w-3/4">
              <p class="my-4">I am a creator. My educational background is in music, and over my lifetime, I have taught myself many art forms.  I am happiest when I am creating.</p>
              <p class="my-4">Programming has been the natural next step in this progression. I view coding is a form of creative expression that allows me to build intuitive tools for learning, teaching, and exploring the world. I am particularly interested in using technology to connect smaller communities, both local and online. I love the intersection between technology and cognition, including how people use their tools and what makes them accessible. I love the process behind analyzing details that go into every individual’s decision and watching those decisions snowball into data about human behavior. For these reasons, I have found my place within the tech space.</p>
              <p class="my-4">I am thrilled to be transitioning to a career in tech as a software engineer. I completed a programming bootcamp for that gave me a strong foundation in full stack technologies and am eager to apply those skills in a professional setting.</p>
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
