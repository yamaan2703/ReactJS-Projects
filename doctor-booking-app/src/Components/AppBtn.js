export default function AppBtn (props) {
    const {onClick, label} = props
    return (
        <>
          <button 
          onClick={onClick} 
          className="bg-blue-500 text-white w-full p-2 text-xl rounded-lg font-bold hover:bg-blue-700 focus:bg-blue-700"
          >{label}</button>
        </>
    )
}