import "./card.css";

export default function Card(props) {
  const { title, content, imageUrl, icons } = props;
  return (
    <>
      <div className="card">
        {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
        <div className="card-content">
          <p className="card-text text-lg text-white italic">{content}</p>
          <h2 className="card-title text-2xl text-white font-bold font-sans">{title}</h2>
          <p className="card-icons text-white px-2 text-lg">{icons}</p>
        </div>
      </div>
    </>
  );
}
