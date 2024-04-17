export default function AppInp (props) {
    const {label, onChange, type, value} = props
    return (
        <>
        <input 
        className="p-3 my-2 border-2 focus:border-blue-500 w-full outline-none rounded-lg text-center text-lg"
        placeholder={label}
        value={value}
        onChange={onChange}
        type={type ?? "text"}/>
        </>
    )
}