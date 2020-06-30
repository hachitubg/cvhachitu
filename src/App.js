import React from 'react';
import avatar from './img/avatar.jpg';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function NavShow() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Hà Chí Tú</span>
        <span className="d-none d-lg-block">
          <img style={{maxHeight: '15rem'}} className="img-fluid img-profile rounded-circle mx-auto mb-2" src={avatar}/>
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

function Container() {
  return (
    <div className="container-fluid p-0">
      <About/>
      <hr className="m-0"/>
      <Experience/>
      <hr className="m-0"/>
      <Education/>
      <hr className="m-0"/>
      <Skills/>
      <hr className="m-0"/>
    </div>
  )
}

function About() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div className="w-100">
        <h1 className="mb-0">Hachi<span className="text-primary">Tu</span></h1>
        <div className="subheading mb-5">300 · My Dinh · Ha Noi · CONTACT (039) 469-9944 ·
          <a href="mailto:hachitu0305@gmail.com">hachitu0305@gmail.com</a>
        </div>
        <p className="lead mb-5">
          I'm Ha Chi Tu, a full stack developer with <b>1 years of experience in JAVA technologies</b> and <b>more 1 year of experience in PHP</b>, with good knowledge of <i>Database Design, Node.JS, Spring, Hibernate, Angular...</i>.
          <br/><br/>
          Learning new languages and technologies is what I am passionate about. I am considered a team-player because I like to help other and tend to work well within groups. I can also do some mentoring tasks and do code reviewing for other team members. I like helping other and work well with group. I can also do some mentoring tasks and code reviewing for other member.
        </p>
        <div className="social-icons">
          <a href="./img/Ha-Chi-Tu-CV.pdf">
            <FontAwesomeIcon icon={faDownload} />
          </a>
          <a href="https://www.facebook.com/tusieunhan6789">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Java Developer</h3>
            <div className="subheading mb-3">LIFESUP COMPANY</div>
            <ul>
              <li><b>Project: </b>Mano, Campaign, Chatbot, QLTTTT, Dataturks</li>
              <li><b>Project Description: </b>Building systems with functions required by Viettel</li>
              <li><b>Team Size: </b>3</li>
              <li><b>Responsiblities: </b>Meeting with customers and teammates to get clear requirement. Develop the frameworks and modules of the system.</li>
              <li><b>Technologies: </b>Front-end: ReactJS, AngularJS, Angular 7, Primefaces. Back-end: Java Core, Spring, Hibernate, Redis.</li>
              <li><b>Leader: </b>Lê Thế Việt - CONTACT: 0373030995</li>
            </ul>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">12/2018 - Present</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">PHP Web Developer</h3>
            <div className="subheading mb-3">MANMO COMPANY</div>
            <ul>
              <li><b>Project: </b>MANMO</li>
              <li><b>Project Description: </b>ManMo is a multi-platform search engine, developed according to the model of Google, capable of helping users search for the nearest property via GPS and supporting online booking.</li>
              <li><b>Team Size: </b>5</li>
              <li><b>Responsiblities: </b>Building interfaces and systems for the ManMo website</li>
              <li><b>Technologies: </b>Front-end: HTML, CSS, Boostrap. Back-end: PHP, CakePHP.</li>
              <li><b>Leader: </b>Trần Ngọc Mạnh - CONTACT: 0816560000</li>
            </ul>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">02/2018 - 08/2018</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">PET PROJECT</h3>
            <div className="subheading mb-3">in my free time, I work on some pet projects</div>
            <ul>
              <li><b>Project Human Resource Management: </b>Human resource management for the University of Transport Technology</li>
              <li><b>Online learning website with video: </b>Sell and deliver instructor course videos to students who register for the course <b>(<a href="http://27.72.96.215/webvideo/">link</a>)</b></li>
              <li><b>Leader: </b>Nguyễn Thái Sơn - CONTACT: 0969880912</li>
            </ul>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">ALL THE TIME</span>
          </div>
        </div>

      </div>
    </section>
  );
}

function Education() {
  return(
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
      <div className="w-100">
        <h2 className="mb-5">Education</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">University of Transport Technology</h3>
            <div className="subheading mb-3">54 Trieu Khuc - Ha Noi - Viet Nam</div>
            <ul>
              <li>The only student to receive Korean TOPCIT certification</li>
              <li>Head of a school-level scientific research team. Project: course support system</li>
              <li>Outstanding student of the department and received a scholarship 4/6 semesters</li>
              <li>GPA ≥ 3.5</li>
            </ul>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">2016 - 2020</span>
          </div>
        </div>

      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>
        <div className="row">
          <div className="col-6" style={{wordWrap: 'break-word'}}>
            <div className="skill-box">
              <h4>Programming languages</h4>
              <ul>
                  <li>PHP</li>
                  <li>Java</li>                  
                  <li>JavaScript</li>
                  <li>HTML, CSS</li>
              </ul>
            </div>
            <div className="skill-box">
              <h4>DATABASE</h4>
              <ul>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>SQL Service</li>
              </ul>
            </div>
            <div className="skill-box">
              <h4>IDE</h4>
              <ul>
                  <li>Sublime Text </li>
                  <li>Visual Studio</li>
                  <li>Eclipse & Netbeans</li>
                  <li>Intellij</li>
              </ul>
            </div>
          </div>
          <div className="col-6" style={{wordWrap: 'break-word'}}>
            <div className="skill-box">
              <h4>Frameworks &amp; platforms</h4>
              <ul>
                  <li>Codeigniter </li>
                  <li>Spring / Hibernate </li>
                  <li>ReactJS</li>
                  <li>Angular 7 / AngularJS / NodeJS</li>
                  <li>Boostrap / JQuery / Primefaces</li>
                  <li>RestfulAPI / JSON, XML</li>
              </ul>
            </div>
            <div className="skill-box">
              <h4>VERSION CONTROL</h4>
              <ul>
                  <li>Git (Git Shell & Github)</li>
                  <li>SVN (TortoiseSVN & VisualSVN)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Interests() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
      <div className="w-100">
        <h2 className="mb-5">Interests</h2>
        <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
        <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
      </div>
    </section>
  );
}

function Awards() {
  return(
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
      <div className="w-100">
        <h2 className="mb-5">Awards &amp; Certifications</h2>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            Google Analytics Certified Developer</li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            Mobile Web Specialist - Google Certification</li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            1<sup>st</sup>
            Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            1<sup>st</sup>
            Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            2<sup>nd</sup>
            Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            1<sup>st</sup>
            Place - James Buchanan High School - Hackathon 2006</li>
          <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
            3<sup>rd</sup>
            Place - James Buchanan High School - Hackathon 2005</li>
        </ul>
      </div>
    </section>
  );
}

function App() {
  return (
    <div>
      <NavShow/>
      <Container/>
    </div>
  )
}

export default App;
