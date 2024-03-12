import "./Button.css";

export default function Button(props) {
  const { label, onClick } = props;
  return (
    <>
      <div>
        <button class="button" onClick={onClick}>{label}</button>
      </div>
    </>
  );
}