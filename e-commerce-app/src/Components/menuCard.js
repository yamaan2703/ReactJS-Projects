import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoStarSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import WebBtn from "./WebBtn";
import { PizzaData } from "../Config/AppData";
import { SandwitchData } from "../Config/AppData";
import { CupCakeData } from "../Config/AppData";
import { CakeData } from "../Config/AppData";
import { CoffeeData } from "../Config/AppData";
import { addToCart } from "../Features/cartSlice";

export default function MenuCard() {
    const items = useSelector((state) => state.allcarts.items);
    const dispatch = useDispatch()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="container p-5">
            <h1 className="Text-center text-2xl md:text-2xl lg:text-6xl text-[#e4c590] text-center font-serif shadow-md shadow-white py-2 mb-5">Menu Card</h1>
            <h3 className="text-white text-5    xl font-serif p-3 ">Burgers</h3>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card bg-gray-700 mx-3 md:mx-1 lg:mx-5 text-white text-center flex-column justify-start items-center rounded-xl relative shadow-md my-2 shadow-[#e4c590]">
                            <div className="absolute top-0 right-0 p-2 bg-black bg-opacity-50 rounded-tr-xl rounded-bl-xl">
                                <IoStarSharp className="text-yellow-400" />
                                <p className="text-yellow-400">{item.rating}</p>
                            </div>
                            <img src={item.img} alt={item.name} className="card-img-top h-[200px] rounded-xl" />
                            <div className="card-body">
                                <h5 className="card-title text-xl text-[#e4c590] font-serif">{item.name}</h5>
                                <p className="card-text text-xl text-yellow-600 flex justify-center">$<span className="mx-1">{item.price}</span></p>
                            </div>
                            <div className="my-1 mb-3">
                                <WebBtn 
                                label="Order Now"
                                onClick={() => dispatch(addToCart(item))}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            <h3 className="text-white text-5xl font-serif p-3 ">Pizza</h3>
            <Slider {...settings}>
                {PizzaData.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card bg-gray-700 mx-3 md:mx-1 lg:mx-5 text-white text-center flex-column justify-start items-center rounded-xl relative shadow-md my-2 shadow-[#e4c590]">
                            <div className="absolute top-0 right-0 p-2 bg-black bg-opacity-50 rounded-tr-xl rounded-bl-xl">
                                <IoStarSharp className="text-yellow-400" />
                                <p className="text-yellow-400">{item.rating}</p>
                            </div>
                            <img src={item.img} alt={item.name} className="card-img-top h-[200px] rounded-xl" />
                            <div className="card-body">
                                <h5 className="card-title text-xl text-[#e4c590] font-serif">{item.name}</h5>
                                <p className="card-text text-xl text-yellow-600 flex justify-center">$<span className="mx-1">{item.price}</span></p>
                            </div>
                            <div className="my-1 mb-3">
                                <WebBtn 
                                label="Order Now"
                                onClick={() => dispatch(addToCart(item))}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            <h3 className="text-white text-5xl font-serif p-3 ">Sandwiches</h3>
            <Slider {...settings}>
                {SandwitchData.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card bg-gray-700 mx-3 md:mx-1 lg:mx-5 text-white text-center flex-column justify-start items-center rounded-xl relative shadow-md my-2 shadow-[#e4c590]">
                            <div className="absolute top-0 right-0 p-2 bg-black bg-opacity-50 rounded-tr-xl rounded-bl-xl">
                                <IoStarSharp className="text-yellow-400" />
                                <p className="text-yellow-400">{item.rating}</p>
                            </div>
                            <img src={item.img} alt={item.name} className="card-img-top h-[200px] rounded-xl" />
                            <div className="card-body">
                                <h5 className="card-title text-xl text-[#e4c590] font-serif">{item.name}</h5>
                                <p className="card-text text-xl text-yellow-600 flex justify-center">$<span className="mx-1">{item.price}</span></p>
                            </div>
                            <div className="my-1 mb-3">
                                <WebBtn 
                                label="Order Now"
                                onClick={() => dispatch(addToCart(item))}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            <h3 className="text-white text-5xl font-serif p-3 ">Cup Cake    </h3>
            <Slider {...settings}>
                {CupCakeData.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card bg-gray-700 mx-3 md:mx-1 lg:mx-5 text-white text-center flex-column justify-start items-center rounded-xl relative shadow-md my-2 shadow-[#e4c590]">
                            <div className="absolute top-0 right-0 p-2 bg-black bg-opacity-50 rounded-tr-xl rounded-bl-xl">
                                <IoStarSharp className="text-yellow-400" />
                                <p className="text-yellow-400">{item.rating}</p>
                            </div>
                            <img src={item.img} alt={item.name} className="card-img-top h-[200px] rounded-xl" />
                            <div className="card-body">
                                <h5 className="card-title text-xl text-[#e4c590] font-serif">{item.name}</h5>
                                <p className="card-text text-xl text-yellow-600 flex justify-center">$<span className="mx-1">{item.price}</span></p>
                            </div>
                            <div className="my-1 mb-3">
                                <WebBtn 
                                label="Order Now"
                                onClick={() => dispatch(addToCart(item))}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            <h3 className="text-white text-5xl font-serif p-3 ">Cake</h3>
            <Slider {...settings}>
                {CakeData.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card bg-gray-700 mx-3 md:mx-1 lg:mx-5 text-white text-center flex-column justify-start items-center rounded-xl relative shadow-md my-2 shadow-[#e4c590]">
                            <div className="absolute top-0 right-0 p-2 bg-black bg-opacity-50 rounded-tr-xl rounded-bl-xl">
                                <IoStarSharp className="text-yellow-400" />
                                <p className="text-yellow-400">{item.rating}</p>
                            </div>
                            <img src={item.img} alt={item.name} className="card-img-top h-[200px] rounded-xl" />
                            <div className="card-body">
                                <h5 className="card-title text-xl text-[#e4c590] font-serif">{item.name}</h5>
                                <p className="card-text text-xl text-yellow-600 flex justify-center">$<span className="mx-1">{item.price}</span></p>
                            </div>
                            <div className="my-1 mb-3">
                                <WebBtn 
                                label="Order Now"
                                onClick={() => dispatch(addToCart(item))}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            <h3 className="text-white text-5xl font-serif p-3 ">Coffee</h3>
            <Slider {...settings}>
                {CoffeeData.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card bg-gray-700 mx-3 md:mx-1 lg:mx-5 text-white text-center flex-column justify-start items-center rounded-xl relative shadow-md my-2 shadow-[#e4c590]">
                            <div className="absolute top-0 right-0 p-2 bg-black bg-opacity-50 rounded-tr-xl rounded-bl-xl">
                                <IoStarSharp className="text-yellow-400" />
                                <p className="text-yellow-400">{item.rating}</p>
                            </div>
                            <img src={item.img} alt={item.name} className="card-img-top h-[200px] rounded-xl" />
                            <div className="card-body">
                                <h5 className="card-title text-xl text-[#e4c590] font-serif">{item.name}</h5>
                                <p className="card-text text-xl text-yellow-600 flex justify-center">$<span className="mx-1">{item.price}</span></p>
                            </div>
                            <div className="my-1 mb-3">
                                <WebBtn 
                                label="Order Now"
                                onClick={() => dispatch(addToCart(item))}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>


        </div>
    );
}
