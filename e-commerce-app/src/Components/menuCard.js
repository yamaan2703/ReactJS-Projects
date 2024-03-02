import { useSelector } from "react-redux";

export default function MenuCard() {
    const items = useSelector((state) => state.allcarts.items);

    return (
        <div className="container">
            <h1 className="text-center text-white text-5xl">Menu Card</h1>
            <div className="row">
                {items.map((item, index) => (
                    <div className="col-md-3" key={index}>
                        <div className="card">
                            <img src={item.img} alt={item.name} className="card-img-top h-[200px]" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Price: ${item.price}</p>
                                <p className="card-text">Rating: {item.rating}</p>
                                <p className="card-text">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
