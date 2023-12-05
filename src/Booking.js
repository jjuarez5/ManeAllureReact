function Booking() {
  return (
    // <!-- Booking Section -->
    <section id="booking" className="container mx-auto mt-8 text-white">
      <h2 className="text-6xl font-bold mb-4 text-center shadow-sm shadow-white">
        BOOKING
      </h2>
      <div className="container mx-auto mt-8 text-center" id="notice">
        <h2 className="text-4xl font-bold mb-4 ">Notice</h2>
        <p className="text-3xl">
          First time clients must book a free consultation prior to any color
          appointments.
        </p>
        <a href="https://maneallure.square.site/" target="blank">
          <button
            type="submit"
            id="book-button"
            className="bg-green-900 text-xl font-libre font-semibold px-5 pb-3 pt-3 rounded-md hover:text-green-900 hover:bg-white"
          >
            Book
          </button>
        </a>
      </div>
      {/* <!-- Repeat the Lorem Ipsum paragraph as needed to reach 20 lines --> */}
    </section>
  );
}

export default Booking;
