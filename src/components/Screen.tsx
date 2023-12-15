export default function Screen(props: any) {
  return (
    <div className="w-[93%] h-32 rounded-xl bg-slate-700 mt-4 shadow text-right">
           <h1 className="text-white text-4xl font-bold mx-6 mt-16 mb-3 text-gray-300">{ props.data }</h1>
        </div>
  )
}