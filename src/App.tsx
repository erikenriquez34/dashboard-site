import Navbar from './components/Navbar'

function App() {
  return (
    <div className="">
      <Navbar/>
      <main className="min-h-[80vh] xl:my-28 mt-36 pt-16">
        <section className="flex flex-row items-center justify-between px-24">
          <div className="px-12">
            <h1 className="text-6xl font-bold">Hello I'm</h1>
            <h1 className="text-6xl mb-6 font-bold text-amber-500">Erik Enriquez</h1>
            <p className="text-xl mb-9"> Currently a student, I’m especially intrested in GPUs, systems programming, and 
              performance engineering. I like working with Linux, and like enjoy coding in
              Java and C++. </p>
            <div className="flex gap-4">
              <a className="bg-gray-50 w-10 h-10 rounded-4xl cursor-pointer flex items-center justify-center hover:scale-110" 
              href="https://github.com/erikenriquez34" target="_blank">
                <img src="github.png" width="25vh" height="25vh"/>
              </a>
              <a className="bg-gray-50 w-10 h-10 rounded-4xl cursor-pointer flex items-center justify-center hover:scale-110"
              href="https://www.linkedin.com/in/erikenriquez34/" target="_blank">
                <img src="linkedin.png" width="25vh" height="25vh"/>
              </a>
              <a className="bg-gray-50 w-10 h-10 rounded-4xl cursor-pointer flex items-center justify-center hover:scale-110"
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=erikenriquez34@gmail.com" target="_blank">
                <img src="gmail.png" width="25vh" height="25vh"/>
              </a>
              <a className="bg-gray-50 w-10 h-10 rounded-4xl cursor-pointer flex items-center justify-center hover:scale-110"
              href="https://leetcode.com/u/erikenriquez34/" target="_blank">
                <img src="leetcode.png" width="25vh" height="25vh"/>
              </a>
            </div>
          </div>

          <div className="px-12">
            <img src="../public/simulate-guy.png" className="mb-9" width="1250vh" height="1250vh"/>
          </div>
 
        </section>

        <section className="flex flex-row items-center justify-around gap-24 px-36 mb-18 mt-16">

          <div className="flex flex-row items-center gap-6 justify-center py-2 px-4 rounded-md cursor-pointer transition delay-50 duration-100 hover:-translate-y-2 hover:bg-amber-500 hover:scale-110">
            <h1 className="text-5xl font-bold">4</h1>
            <div className="flex flex-column">
              <p className="text-xl">GitHub <br/> Projects</p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-6 justify-center py-2 px-4 rounded-md cursor-pointer transition delay-50 duration-100 hover:-translate-y-2 hover:bg-amber-500 hover:scale-110">
            <h1 className="text-5xl font-bold">15</h1>
            <div className="flex flex-column">
              <p className="text-xl">Technical <br/> Skills</p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-6 justify-center py-2 px-4 rounded-md cursor-pointer transition delay-50 duration-100 hover:-translate-y-2 hover:bg-amber-500 hover:scale-110">
            <h1 className="text-5xl font-bold">35</h1>
            <div className="flex flex-column">
              <p className="text-xl">Video <br/> Clips</p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-6 justify-center py-2 px-4 rounded-md cursor-pointer transition delay-50 duration-100 hover:-translate-y-2 hover:bg-amber-500 hover:scale-110">
            <h1 className="text-5xl font-bold">150</h1>
            <div className="flex flex-column">
              <p className="text-xl">Leetcode <br/> Solved</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
