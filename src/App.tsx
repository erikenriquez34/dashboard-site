import Navbar from './components/Navbar'

function App() {
  return (
    <div className="">
      <Navbar/>
      <main className="min-h-[80vh] xl:my-28 mt-36 pt-16">
        <section className="flex flex-row items-center justify-between px-24">
          <div className="px-24">
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

          <div className="px-24">
            <img src="../public/simulate-guy.png" className="mb-9" width="1250vh" height="1250vh"/>
          </div>
 
        </section>
      </main>
    </div>
  )
}

export default App
