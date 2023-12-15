export default function Numbers(props) {
  return (
    <button onClick={props.onClick} className="bg-slate-600 rounded-full h-20 w-20 text-4xl text-gray-300 shadow mx-1 md:mx-3">{ props.value }</button>
  )
}