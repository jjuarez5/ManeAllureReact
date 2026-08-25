import Almabw from "./images/Almabw.jpg";
import AlmaLogo from "./images/Alma Logo.png";

function Splash() {
  return (
    <section id="home" className="landing-zone flex mt-20">
      <div className="container mx-auto ">
        <div className="flex flex-col mt-20 md:flex-row">
          <img
            src={AlmaLogo}
            alt="The Mane Allure Logo"
            className="mx-auto h-auto w-3/4 sm:object-cover sm:h-screen sm:w-1/2 sm:m-2"
          />

          <img
            src={Almabw}
            alt="Alma Juarez, Master Colorist"
            className="mx-auto h-auto w-3/4 sm:object-cover sm:h-screen sm:w-1/2 sm:m-2"
          />
        </div>

        <div className="text-center text-white mt-8 mb-12 px-4">
          <h1 className="text-4xl font-bold sm:text-5xl">THE MANE ALLURE</h1>
          <p className="text-2xl mt-3 sm:text-3xl">
            Houston Hair Colorist &amp; Dimensional Color Specialist
          </p>
          <p className="text-xl mt-4 sm:text-2xl">
            Balayage &bull; Foliayage &bull; Blonding &bull; Custom Color
          </p>
          <p className="text-xl mt-4 sm:text-2xl">By Alma Juarez</p>
        </div>
      </div>
    </section>
  );
}

export default Splash;
