import "./footer.css";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <>
      <div className="footer_Section">
        <div className="footer_shadow">
          <div className="row m-0 p-0">
            <div className="col-md-3">
              <div className="text-center p-5">
                <p className="text-white font-bold py-1 text-lg">COMPANY</p>
                <p className="text-gray-500 py-1 text-lg">About Us</p>
                <p className="text-gray-500 py-1 text-lg">COMPANY</p>
                <p className="text-gray-500 py-1 text-lg">Press & Blog</p>
                <p className="text-gray-500 py-1 text-lg">Privacy Policy</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="text-center p-5">
                <p className="text-white font-bold py-1 text-lg">OPEN HOUR</p>
                <p className="text-gray-500 py-1 text-lg">Monday 11am-7pm</p>
                <p className="text-gray-500 py-1 text-lg">
                  Tuesday-Friday 11am-8pm
                </p>
                <p className="text-gray-500 py-1 text-lg">Saturday 10am-6pm</p>
                <p className="text-gray-500 py-1 text-lg">Sunday 11am-6pm</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="text-center p-5">
                <p className="text-white font-bold py-1 text-lg">RESOURCES</p>
                <p className="text-gray-500 py-1 text-lg">Home Insurance</p>
                <p className="text-gray-500 py-1 text-lg">Travel Insurance</p>
                <p className="text-gray-500 py-1 text-lg">Car Insurance</p>
                <p className="text-gray-500 py-1 text-lg">Business Insurance</p>
                <p className="text-gray-500 py-1 text-lg">Heal Insurance</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="text-center p-5">
                <img src={logo} alt="Logo" />
                <p className="text-gray-500 py-1 text-lg lg:w-full">
                  GThe trade war currently ensuing between te US anfd several
                  natxions around thdhe globe, most fiercely with.
                </p>
               <div className="flex justify-center">
               <p><i class="fa-brands fa-twitter px-1 text-white text-lg"></i></p>
                <p><i class="fa-brands fa-facebook px-1 text-white text-lg"></i></p>
                <p><i class="fa-brands fa-instagram px-1 text-white text-lg"></i></p>
               </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
