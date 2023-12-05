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
        <div className="mb-8">
          <p>2101 Smith St STE 212</p>
          <p>Houston, TX 77002</p>
        </div>
        <h3 className="text-xl">HOURS OF OPERATION</h3>
        <div className="flex justify-center mt-4 text-white">
          <div className="grid grid-row gap-1">
            <div className=" text-center">Wednesday</div>
            <div>10:00 AM - 7:00 PM</div>
            <div className=" text-center">Thursday</div>
            <div>10:00 AM - 7:00 PM</div>
            <div className=" text-center">Friday</div>
            <div>10:00 AM - 7:00 PM</div>
            <div className=" text-center">Saturday</div>
            <div>10:00 AM - 5:00 PM</div>
            <div className=" text-center">Sun-Tue</div>
            <div className="text-center">Closed</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationInfo;
