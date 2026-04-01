import React from 'react'

const Chatbotsection = () => {
  return (
    <div id='chatbot' className='text-white p-3 bg-black/5 backdrop-blur-xs border-transparent shadow-[8px_8px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(255,255,255,0.3)] rounded-xl mt-15 w-2/3 m-auto h-110'>
      <div className="flex items-center justify-between px-4 py-3 
                border-b border-white/10 bg-white/5">

  <span className="text-white font-bold text-xl">AI Assistant</span>

  <button className="text-gray-400 font-extrabold hover:text-white">✕</button>
</div>

    </div>
  )
}

export default Chatbotsection
