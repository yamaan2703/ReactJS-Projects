import "./WebBtn.css";

export default function WebBtn(props) {
  const { label, onClick } = props;
  return (
    <>
      <div>
        <button class="button" onClick={onClick}>{label}</button>
      </div>
    </>
  );
}
