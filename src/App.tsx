import Navbar from './components/about/Navbar.tsx'
import Bubble from './components/about/Bubble.tsx'
import Stat from './components/about/Stat.tsx'

function App() {
  return (
    <div className="">
      <Navbar/>
      <main className="min-h-[80vh] xl:mt-28 mt-36 pt-12">
        <section className="flex flex-row items-center justify-between px-24">
          <div className="px-12">
            <h1 className="text-6xl font-bold">Hello I'm</h1>
            <h1 className="text-6xl mb-6 font-bold text-amber-500">Erik Enriquez</h1>
            <p className="text-xl mb-9"> Currently a student, I’m especially intrested in GPUs, systems 
              programming, and performance engineering. I like working with Linux, and like enjoy coding 
              in Java and C++. </p>
            <div className="flex gap-4">
              <Bubble link="https://github.com/erikenriquez34" icon="github.png"/>
              <Bubble link="https://www.linkedin.com/in/erikenriquez34/" icon="linkedin.png"/>
              <Bubble link="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=erikenriquez34@gmail.com" icon="gmail.png"/>
              <Bubble link="https://leetcode.com/u/erikenriquez34/" icon ="leetcode.png"/>
            </div>
          </div>

          <div className="px-12">
            <img src="simulate-guy.png" className="mb-9" width="1250vh" height="1250vh" alt="computer-guy"/>
          </div>
        </section>

        <section className="flex flex-row items-center justify-around gap-24 px-36 mb-18 mt-16">
          <Stat number={4} top="Github" bot="Projects"/>
          <Stat number={15} top="Technical" bot="Skills"/>
          <Stat number={35} top="Video" bot="Clips"/>
          <Stat number={150} top="Leetcode" bot="Solved"/>
        </section>

        <section className="flex flex-row items-center justify-between px-24 pt-14 mb-24">
          <div className="px-24 text-center">
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

          <div>
            <img src="erikpic.png" width="1000vh" height="1000vh" className="rounded-full aspect-square" alt="erik-pic"/>
          </div>
        </section>

        <section className="py-8 bg-darker-spirit">

        </section>
      </main>
    </div>
  )
}

export default App
