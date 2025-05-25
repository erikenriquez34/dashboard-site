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
            <p className="text-xl"> Currently a student, I’m especially intrested in GPUs, systems programming, and 
              performance engineering. I like working with Linux, and like enjoy coding in
              Java and C++. </p>
          </div>

          <div className="px-24">
            <img src="../public/simulate-guy.png" width="1000vh" height="1000vh"/>
          </div>
 
        </section>
      </main>
    </div>
  )
}

export default App
