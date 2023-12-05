function Footer() {
  return (
    <footer className="bg-black text-white p-4 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center sm:flex-wrap">
          <div className="mb-4 sm:mb-0">
            <span className="font-bold">TheManeAllure LLC</span> &copy; 2023
          </div>
          <div className="flex items-center space-x-4">
            {/* <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400">
              Terms of Service
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
