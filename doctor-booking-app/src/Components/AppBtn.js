export default function AppBtn(props) {
  const { onClick, label, icon } = props;

  return (
    <button
      onClick={onClick}
      className="bg-blue-700 text-white w-full text-xl rounded hover:bg-blue-900 focus:bg-blue-900 py-2 flex justify-center items-center"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
}


