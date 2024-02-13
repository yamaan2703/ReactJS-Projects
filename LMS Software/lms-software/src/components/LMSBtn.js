export default function LMSBtn (props) {
    const {onClick, label} = props
    return (
        <>
          <button 
          onClick={onClick} 
          className="bg-blue-700 text-white w-full p-3 text-xl rounded-lg font-bold hover:bg-blue-900 focus:bg-blue-900"
          >{label}</button>
        </>
    )
}