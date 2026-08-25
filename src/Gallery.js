import almabraids from "./images/almabraids.jpg";
import male from "./images/male.jpg";
import female1 from "./images/female1.jpg";
import female2 from "./images/female2.jpg";
import female3 from "./images/female3.jpg";
import red from "./images/red.jpg";

function Gallery() {
  return (
    <section id="gallery" className="container mx-auto mt-8 text-white">
      <h2 className="text-6xl font-bold mb-4 text-center shadow-sm shadow-white">
        Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/*
          Alt text doubles as image-search keywords. Replace the generic
          descriptions below with the actual service in each photo
          (e.g. "Dimensional balayage on brunette hair") -- Alma will know
          which service each shot is.
        */}
        <img
          src={almabraids}
          alt="Braided hair styling by Alma Juarez at The Mane Allure, Houston"
          className="w-full h-96 object-cover"
        />
        <img
          src={red}
          alt="Custom red hair color by Alma Juarez at The Mane Allure, Houston"
          className="w-full h-96 object-cover"
        />
        <img
          src={male}
          alt="Men's white blonding by Alma Juarez at The Mane Allure, Houston"
          className="w-full h-96 object-cover"
        />
        <img
          src={female1}
          alt="Hair color and styling by Alma Juarez at The Mane Allure, Houston"
          className="w-full h-96 object-cover"
        />
        <img
          src={female2}
          alt="Hair color and styling by Alma Juarez at The Mane Allure, Houston"
          className="w-full h-96 object-cover"
        />
        <img
          src={female3}
          alt="Hair color and styling by Alma Juarez at The Mane Allure, Houston"
          className="w-full h-96 object-cover"
        />
      </div>
    </section>
  );
}

export default Gallery;
