export default function LMSInp (props) {
    const {label, onChange, type, value} = props
    return (
        <>
        <input 
        className="border-2 focus:border-blue-900 w-full outline-none text-center text-lg py-2 my-1 rounded"
        placeholder={label}
        value={value}
        onChange={onChange}
        type={type ?? "text"}/>
        </>
    )
}