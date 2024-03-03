import WebBtn from "../Components/WebBtn";
import MenuImg from "../images/Menu.jpg";

export default function CartPage() {
  return (
    <>
      <div className="bg-[#0d1819] ">
      <div className="menu_img relative h-[500px] bg-center bg-cover">
                <div className="menu_overlay absolute inset-0 bg-black opacity-50"></div>
                <img src={MenuImg} alt="Menu" className="w-full h-full object-cover" />
                <h1 className="text-white text-5xl md:text-3xl lg:text-5xl font-serif text-center  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Our restaurant offers a delightful menu with exceptional flavors at reasonable prices...</h1>
            </div>

            
        <div className="container">
          <div className="card bg-gray-700 mx-3 md:mx-1 lg:mx-5 text-white text-center flex-column justify-start items-center rounded-xl relative shadow-md my-2 shadow-[#e4c590]">
            <div className="absolute top-0 right-0 p-2 bg-black bg-opacity-50 rounded-tr-xl rounded-bl-xl">
              <p className="text-yellow-400">4.5</p>
            </div>
            <div className="card-body">
              <h5 className="card-title text-xl text-[#e4c590] font-serif">Cup Cake</h5>
              <p className="card-text text-xl text-yellow-600 flex justify-center">$<span className="mx-1"> 199</span></p>
            </div>
            <div className="my-1 mb-3">
              <WebBtn label="Order Now" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}





                