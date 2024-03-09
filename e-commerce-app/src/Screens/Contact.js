export default function Contact () {
    return (
        <>
        <div className="contact_section bg-[#0d1819]">
            <div className="container pt-10 md:pt-10 lg:pt-40">
                <div className="row">
                <div className="col-md-8">
                    <div className="contact_form text-center">
                        <div className="text-white py-2">
                            <h1 className="text-3xl md:text-3xl lg:text-6xl font-serif text-[#e4c590]">Online Reservation</h1>
                            <p className="text-lg">Booking request <span className="text-[#e4c590]">+88-123-123456</span> or fill out the order form </p>
                        </div>

                        <div className="p-2">
  <input
    type="text"
    placeholder="Your Name"
    className="bg-transparent text-center py-2 border-2 border-[#e4c590] w-[395px] text-white outline-none   mx-1 text-lg"
  />
  <input
    type="tel"
    placeholder="Phone Number"
    className="bg-transparent text-center py-2 border-2 border-[#e4c590]  w-[395px] text-white outline-none  mx-1 text-lg"
  />
  <input
    type="date"
    placeholder="Date"
    className="bg-transparent text-center py-2 border-2 border-[#e4c590] w-[260px] mx-1 text-lg my-2 text-white outline-none"
  />
  <input
    type="time"
    placeholder="Time"
    className="bg-transparent text-white outline-none text-center py-2 border-2 border-[#e4c590] w-[260px] mx-1 text-lg my-2"
  />
  <input
    type="number"
    placeholder="Number of Persons"
    className="bg-transparent text-center py-2 border-2 text-white outline-none border-[#e4c590] w-[260px] mx-1 text-lg my-2"
  />
  <textarea
    className="p-2 text-lg bg-transparent border-2 border-[#e4c590] w-full text-white outline-none h-[200px]"
    placeholder="Message"
  ></textarea>
</div>

                    </div>
                </div>

                <div className="col-md-4">
                    <div className="contact_img"></div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}