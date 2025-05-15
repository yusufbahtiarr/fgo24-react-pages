import Navbar from "../components/Navbar";

function AboutPage(){
  return(
    <div className="min-h-screen w-full overflow-x-hidden" id="container">
      <Navbar />
      <main className="flex flex-col items-center px-4 md:px-16 lg:px-32 xl:px-48 py-10 mt-20">
        <article className="flex flex-col gap-10 max-w-5xl w-full">
          
          <h1 className="text-center font-bold text-4xl uppercase text-amber-900 drop-shadow">About</h1>
          
          <div className="flex flex-col items-center gap-6">
            <p className="text-lg md:text-xl font-medium text-center leading-relaxed">
              TexaNet serves a variety of clients from various industries to provide the best solutions for their business. We are committed to being a trusted partner who always provides the best service to support our clients' businesses.
            </p>
            <img
              className="h-[30rem] w-full object-cover rounded-2xl"
              src="about-us.jpeg"
              alt="team"
            />
          </div>
          
          <div>
            <p className="text-base md:text-lg text-justify leading-loose">
              During our two-decade journey to becoming a trusted partner for clients, we have successfully built a reputation as a provider of various infrastructure connectivity services.
              <br /><br />
              Founded in 2002, when the digital world was not yet rapidly developing, iForte was already running VSAT, ISP, and IT outsourcing businesses. We already have both a closed fixed network and an internet service provider license at the time.
              <br /><br />
              In 2015, iForte was acquired by PT Profesional Telekomunikasi Indonesia or known as PT. Protelindo, a subsidiary of PT. Sarana Menara Nusantara, Tbk. PT. Protelindo is the largest independent tower provider in Indonesia, with more than 30,000 towers and nearly 55,000 tenants.
              <br /><br />
              By the end of 2022, iForte has succeeded in building and operating 155,000 km of fiber optic cables which connected more than 20,000 towers in Indonesia with fiber optic cable networks and already has more than 6,000 VSAT sites and serves more than 3,000 corporate customers.
              <br /><br />
              iForte always prioritizes customer satisfaction and professional services to strengthen iForte's focus in Indonesia's telecommunications business and strengthen iForte's vision as a provider of data communication & connectivity network services based on optical cable, wireless, and VSAT.
            </p>
          </div>

        </article>
      </main>
    </div>
  );
}

export default AboutPage;
