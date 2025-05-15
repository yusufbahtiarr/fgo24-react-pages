import Navbar from "../components/Navbar";

function HomePage(){
  return(
    <div className='h-screen w-screen' id="container">
      <Navbar />
      <main className="flex flex-col relative rounded-xl p-1 items-center justify-center h-[100%] bg-[url(/landing.jpg)] bg-no-repeat bg-cover">
        <article className="flex items-center flex-col text-center text-4xl text-amber-400">
          <h1 className="text-center font-bold text-7xl uppercase text-shadow-amber-900">We focus on you!</h1>
          <p className="text-center font-medium text-amber-400 capitalize mt-4  text-shadow-amber-900">
            Clients are always our number one priority.
          </p>
          <p className="text-center font-medium text-amber-400 mt-6  text-shadow-amber-900">
            With the spirit of providing <strong>"connectivity for better life"</strong>,
          </p>
        </article>
      </main>
    </div>
  )
}

export default HomePage