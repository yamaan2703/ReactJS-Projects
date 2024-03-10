import icon from "../images/icon.svg";


export default function About() {
  return (
    <>
      <div className="about_section bg-[#0d1819]">
        <div className="container pt-10 md:pt-10 lg:pt-40">
          <div className="row">
            <div className="col-md-6">
              <div className="text-white text-center p-3 mt-11">
                <p className="text-[#e4c590] tracking-widest py-2">OUR STORY</p>
                <div className="flex justify-center py-2">
                  <img src={icon} className="w-[100px]" />
                </div>
                <h1 className="text-3xl md:text-3xl lg:text-6xl font-serif py-2">
                  Every Flavor Tells a Story
                </h1>
                <p className="text-gray-400 p-2">
                  Lorem Ipsum is simply dummy text of the printingand
                  typesetting industry lorem Ipsum has been the industrys
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled it to make a type specimen
                  book It has survived not only five centuries, but also the
                  leap into.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div style={{ position: "relative" }}>
                <img
                  src="https://mediacity.co.in/delici/static/media/image-1.661483ecb5620eb91605.jpg"
                  style={{ height: "500px" }}
                />
                
              </div>
            </div>
          </div>
        </div>

     
      </div>
    </>
  );
}
