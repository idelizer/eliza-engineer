import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { SiBootstrap, SiCss3, SiFlask, SiGit, SiGithub, SiHeroku, SiHtml5, SiJavascript, SiJinja, SiLinkedin, SiPostgresql, SiPython, SiReact } from '/node_modules/react-icons/si';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <img src="/src/assets/headshot.jpg" id="headshot"></img>
      </div>
      {/* Intro */}
      <h1>Hi, I'm Eliza.</h1>
      <h2>Full-Stack Software Engineer</h2>
      <p>
      As a Bay Area Native, my mission is to bridge local artistic communities and the tech world. Pre-pandemic I was working in the live music industry as a server in a folk venue and as a music teacher. This last year, I changed as my communities changed. Hackbright became the clear next step in facilitating my goals, and allowing me to problem solve at new levels. To me, coding is a freedom of expression, allowing me to make intuitive tools for learning, exploring, and teaching, as well as connecting smaller communities, both local and online. I love to build to things. With coding, I can turn around and give back to those artistic communities I’ve come from.
      </p>
      <a href="https://www.linkedin.com/in/eliza-cantwell/">
          <SiLinkedin class="icon"/>
      </a> 

      <a href="https://github.com/idelizer" >
        <SiGithub class="icon"/>
      </a> 
      {/* <p>elizaofthebay@gmail.com | (510) 725-9999 | Bay Area, CA</p> */}
      {/* Projects */}
      <h1>Projects</h1>

      <h2>Breadventure</h2>
      <a href='https://github.com/idelizer/breadventure'>
        <img src="/src/assets/breadventurelogo.svg" class="icon"></img>
      </a>
      <h3>Description</h3>
      <p>Breadventure is a WebApp that tracks your experiments with bread-making and sourdough starters. I built the backend and frontend with Flask, PostgreSQL, and the Cloudinary and Spoonacular APIs. It was deployed via Heroku. This app was the capstone project of Hackbright Academy. </p>
      <h3>Insight</h3>
      <p>Breadventure is a solo project, allowing me to test how much I can accomplish when I set my mind to it. Projects will change as you go, no matter how much planning you have, so be adaptable and flexible. That said, this is no excuse to not plan at all; in fact, having a roadmap or at least well organized vision for a project makes all the difference. This project showed me the scope of planning a complete product, and helped me become comfortable with making every decision that would impact my final version. </p>
      
      <SiPython class="icon"/>
      <SiJavascript class="icon"/>
      <SiCss3 class="icon"/>
      <SiHtml5 class="icon"/>
      <a href="https://git-scm.com/">
        <SiGit class="icon"/>
      </a> 
      <a href="https://getbootstrap.com/">
        <SiBootstrap class="icon"/>
      </a> 
      <a href="https://www.postgresql.org/">
        <SiPostgresql class="icon"/>
      </a> 
      <a href="https://id.heroku.com/">
        <SiHeroku class="icon"/>
      </a>

      <a href="https://flask.palletsprojects.com/en/2.2.x/">
        <SiFlask class="icon"/>
      </a> 
      <a href="https://jinja.palletsprojects.com/en/3.1.x/">
        <SiJinja class="icon"/>
      </a> 




      <h2>Camphoric</h2>
      <a href='https://github.com/camphoric'>
        <img src="/src/assets/iconmarquee.svg" class="icon"></img>
      </a>
      <p>Volunteer opportunity with an open source project affiliated with my favorite local music non-profit, creating the registration system for music camps in California. Opportunity to work with world class software engineers.</p>
      <p>What I learned: I learned the process behind architectural planning, database design when working with a team. This was my first experience seeing what it is like to balance difference viewpoints and experience, when teammates bring ideas to the table, what it’s like to weight them, then execute a plan. The flow of how to break down problems larger than 1 person can accomplish, and the value of multiple inputs. I learned firsthand that being a beginner has a place at the table too, since I sometimes saw things that the experienced engineers didn’t, or could point out when the code was unclear.</p>

      <h2>Marquee</h2>
      <a href='https://github.com/idelizer/marquee'>
        <img src="/src/assets/iconmarquee.svg" class="icon"></img>
      </a>
      <p>This project was an exercise in my favorite aspect of coding: you can create any tool you can imagine. I built marquee after hearing from a manager at my current work (a non profit venue for live folk music called the link:Freight and Salvage), mentioned how much easier it would be to change out the marquee display with a simple character counter. I also learned react animations from a link:blog post from a previous Hackbright graduate.</p>
      {/* Contact */}
      <h1>Contact</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          poke me {count}
        </button>







        <a href="https://reactjs.org/">
          <SiReact class="icon"/>
        </a> 



      </div>
    </div>
  )
}

export default App
