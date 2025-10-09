export const Input = ({ type, name, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-left" htmlFor={name}>{name}</label>
      <input
        className="p-1 rounded border border-slate-400 shadow 
        focus:outline-none focus-ring focus:ring-blue-500 focus:border-blue-500" type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        title={name}
        value={value}
        onChange={onChange}
      />

    </div>
  )
}