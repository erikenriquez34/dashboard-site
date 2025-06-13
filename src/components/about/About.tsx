import {NavLink} from "react-router-dom";
import Bubble from './Bubble.tsx'
import Stat from './Stat.tsx'

function About() {
  return (
    <>
      <main className="flex flex-col min-h-screen mt-22 pt-12 items-center">
        <section className="flex flex-col xl:flex-row items-center justify-around px-24 py-12 w-fit min-2xl:w-7xl">
          <div className="px-12 w-[55%]">
            <h1 className="text-6xl font-bold">Hello I'm</h1>
            <h1 className="text-6xl mb-6 font-bold text-amber-500">Erik Enriquez</h1>
            <p className="text-xl mb-9"> Currently a student, I’m especially intrested in GPUs, systems 
              programming, and performance engineering. I like working with Linux, and like enjoy coding 
              in Java and C++. </p>
            <div className="flex gap-4">
              <Bubble link="https://github.com/erikenriquez34" icon="/icons/github.png"/>
              <Bubble link="https://www.linkedin.com/in/erikenriquez34/" icon="/icons/linkedin.png"/>
              <Bubble link="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=erikenriquez34@gmail.com" icon="/icons/gmail.png"/>
              <Bubble link="https://leetcode.com/u/erikenriquez34/" icon="/icons/leetcode.png"/>
            </div>
          </div>
          <div className="justify-center px-12 w-[45%] hidden xl:flex">
            <img 
            src="simulate-guy.png" 
            className="mb-9 w-fit h-fit" 
            alt="computer-guy"
            />
          </div>
        </section>

        <section className="flex flex-wrap items-center justify-around gap-24 px-36 mb-18 mt-16">
          <NavLink to="/projects"><Stat number={4} top="Github" bot="Projects"/></NavLink>
          <NavLink to="/projects"><Stat number={15} top="Technical" bot="Skills"/></NavLink>
          <NavLink to="/media"><Stat number={35} top="Video" bot="Clips"/></NavLink>
          <NavLink to="https://leetcode.com/u/erikenriquez34/"><Stat number={150} top="Leetcode" bot="Solved"/></NavLink>
        </section>

        <section className="flex flex-col xl:flex-row items-center justify-around px-24 pt-14 mb-24 w-fit min-2xl:w-7xl">
          <div className="px-24 text-center w-[95%]">
            <h1 className="text-5xl font-bold mb-8">
              The <span className="text-amber-500">Journey</span> So Far
            </h1>

            <p className="text-left text-xl">
              I’m currently pursuing a Bachelor of Science in Computer Science at the
              Rochester, where I’ve been exploring everything from low-level systems to high-level 
              design.<br/><br/>

              Outside of class, I enjoy gaming with friends (you can check out some of
              my highlights on the site) 
              and keeping up with the latest in tech. My academic interests lean toward GPUs and computer 
              architecture, as it feels reasonable to understand performance from the hardware up.<br/><br/>

              When I’m not coding or gaming, I like to keep an eye on the stock market and experiment 
              with smart home tech. Whether it’s optimizing code or my living space, I love finding 
              practical and efficient solutions.<br/><br/>
            </p>
          </div>
          <div className="flex justify-center px-12 pt-14 w-[40%]">
            <img 
            src="erikpic.png" 
            className="mb-9 w-fit h-fit rounded-full aspect-square border-5 border-amber-500" 
            alt="erik-pic"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default About;