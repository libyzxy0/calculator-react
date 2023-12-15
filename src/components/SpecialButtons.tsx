export default function SpecialButtons(props) {
  return (
    <button onClick={props.onClick} className= {`bg-slate-700 rounded-full h-20 w-20 ${props.value == 'DEL' ? 'text-2xl' : 'text-4xl'} text-gray-300 shadow mx-1 md:mx-3`}>{props.value}</button>
  )
}