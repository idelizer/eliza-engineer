import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { SiBootstrap, SiCss3, SiFlask, SiGit, SiGithub, SiHeroku, SiHtml5, SiJavascript, SiJinja, SiLinkedin, SiPostgresql, SiPython, SiReact } from '../node_modules/react-icons/si';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <img src="/src/assets/headshot.jpg" id="headshot"></img>
      </div>
      <h1>Eliza Cantwell</h1>
      <h2>Software Engineer</h2>
      {/* <p>elizaofthebay@gmail.com | (510) 725-9999 | Bay Area, CA</p> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          poke me {count}
        </button>

        <a href="https://www.linkedin.com/in/eliza-cantwell/">
          <SiLinkedin />
        </a> 

        <a href="https://github.com/idelizer">
          <SiGithub />
        </a> 

        <a href="https://www.python.org/">
          <SiPython />
        </a> 

        <a href="https://www.javascript.com/">
          <SiJavascript />
        </a> 

        <SiCss3 />
        <SiHtml5 />

        <a href="https://www.postgresql.org/">
          <SiPostgresql />
        </a> 

        <a href="https://flask.palletsprojects.com/en/2.2.x/">
          <SiFlask />
        </a> 

        <a href="https://reactjs.org/">
          <SiReact />
        </a> 

        <a href="https://jinja.palletsprojects.com/en/3.1.x/">
          <SiJinja />
        </a> 

        <a href="https://getbootstrap.com/">
          <SiBootstrap />
        </a> 

        <a href="https://git-scm.com/">
          <SiGit />
        </a> 

        <a href="https://id.heroku.com/">
          <SiHeroku />
        </a>
      </div>
    </div>
  )
}

export default App
