import "./button.css";

export default function Button(props) {
    const { label, onClick} = props
  return (
    <>
      <div>
        <button class="button">
          <span class="button-content" onClick={onClick}>{label}</span>
        </button>
      </div>
    </>
  );
}
