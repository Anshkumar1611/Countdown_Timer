import React from 'react'

const CountdownCards = ({value,title}) => {
  return (
    <div className="flex flex-col min-w-24 min-h-24 justify-center items-center p-4 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-500 text-white">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-xl font-semibold text-slate-300">{title}</p>
    </div>  )
}

export default CountdownCards