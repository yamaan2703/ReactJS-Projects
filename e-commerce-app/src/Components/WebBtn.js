import "./WebBtn.css";

export default function WebBtn(props) {
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