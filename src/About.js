function calculateExperience() {
  var today = new Date().getFullYear();
  return Math.abs(today - 2011);
}

function About() {
  return (
    <section id="about-me" className="container mx-auto mt-8 text-white">
      <div className="drop-shadow-2xl shadow-zinc-100">
        <h2 className="text-6xl font-bold mb-4 z-1 text-center shadow-sm shadow-white">
          ABOUT
        </h2>
      </div>
      <p className="text-center font-libre sm: text-2xl" id="aboutMeParagraph">
        Alma Palomares-Juarez is a licensed cosmetologist with over{" "}
        {calculateExperience()} years of experience. Having gained her license
        out of Porter High School in Porter, Texas, she started her career by
        mastering men's hair cuts. While taking a brief break from the industry,
        Alma was able to maintain her expertise by doing freelance make-up, hair
        cut and color, as well as men's cuts. Upon moving to Seattle,
        Washington, Alma soon began as a colorist apprentice at the prestigious
        &nbsp;
        <a
          href="https://www.genejuarez.com/locations/bellevue/"
          target="blank"
          className="text-green-900"
        >
          Gene Juarez Salon and Spa
        </a>
        &nbsp;studying under several premier colorists before becoming a master
        colorist herself.
      </p>
    </section>
  );
}

export default About;
