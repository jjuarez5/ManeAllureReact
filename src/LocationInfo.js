import { SiTiktok } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

function LocationInfo() {
  return (
    <section id="location">
      <div className="flex flex-col justify-center items-center text-white">
        <h2 className="text-2xl font-semibold">HOUSTON</h2>
        <ul className="flex flex-row justify-center mt-2 sm:justify-end">
          <li>
            <a
              href="https://www.tiktok.com/@themanealluree"
              target="blank"
              className="text-2xl rounded-md mr-7"
            >
              <SiTiktok className=" hover:bg-green-900" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/themaneallure/"
              target="blank"
              className="text-2xl rounded-md hover:bg-green-900"
            >
              <FaInstagram className="hover:bg-green-900" />
            </a>
          </li>
        </ul>
        {/*
          Keep this address and phone identical to the HairSalon JSON-LD in
          public/index.html and to the Google Business Profile. Conflicting
          NAP data across those three places hurts local ranking.
        */}
        <address className="mb-8 not-italic text-center">
          <p>3312 Marquart St</p>
          <p>Houston, TX 77027</p>
          <p className="mt-2">
            <a href="tel:+1-281-832-0808" className="hover:bg-green-900">
              (281) 832-0808
            </a>
          </p>
        </address>
        <h3 className="text-xl">HOURS OF OPERATION</h3>
        <div className="flex justify-center mt-4 text-white">
          <div className="grid grid-row gap-1">
            <div className=" text-center">Tuesday</div>
            <div>9:00 AM - 5:00 PM</div>
            <div className=" text-center">Wednesday</div>
            <div>10:00 AM - 7:00 PM</div>
            <div className=" text-center">Thursday</div>
            <div>10:00 AM - 7:00 PM</div>
            <div className=" text-center">Friday</div>
            <div>10:00 AM - 7:00 PM</div>
            <div className=" text-center">Saturday</div>
            <div>10:00 AM - 6:00 PM</div>
            <div className=" text-center">Sun-Mon</div>
            <div className="text-center">Closed</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationInfo;
