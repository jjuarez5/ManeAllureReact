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
      </div>
    </section>
  );
}

export default Splash;
