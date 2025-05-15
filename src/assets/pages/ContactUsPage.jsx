import Navbar from "../components/Navbar";

function ContactUsPage(){
  return(
    <div className="min-h-screen w-full overflow-x-hidden" id="container">
      <Navbar />
      <main className="flex flex-col items-center px-4 md:px-16 lg:px-32 xl:px-48 py-10 mt-20">
        <article className="flex flex-col justify-center items-center gap-10 max-w-5xl w-full">
          
          <h1 className="text-center font-bold text-3xl uppercase text-amber-900 drop-shadow">Contact Us</h1>
          
          <div className="flex flex-col items-center gap-6 w-full">
            <form className="flex flex-col w-full gap-6 items-center" id="formContactUs">
              <input className="px-5 py-2 border-2 border-gray-700 rounded w-[50%]" type="text" placeholder="Your Name" />
              <input className="px-5 py-2 border-2 border-gray-700 rounded w-[50%]" type="text" placeholder="Your Email" />
              <textarea className="px-5 py-2 border-2 border-gray-700 rounded w-[50%] h-[200px]" name="message" id="" placeholder="Your Messages"></textarea>
              <button className="bg-amber-900 py-2 w-[50%] rounded text-white" type="submit">Send Message</button>
            </form>
          </div>
          

        </article>
      </main>
    </div>
  )
}

export default ContactUsPage