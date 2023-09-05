import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (

    <div className='w-full h-screen duration-500' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center top-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
          <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:'red'}}
          onClick={()=>setColor('red')}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:'green'}}
          onClick={()=>setColor('green')}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:'blue'}}
          onClick={()=>setColor('blue')}>Blue</button>
          <button className='border-black px-4 py-1 rounded-full' style={{backgroundColor:'white'}}
          onClick={()=>setColor('white')}>White</button>
          <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:'orange'}}
          onClick={()=>setColor('orange')}>Orange</button>
          <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:'yellow'}}
          onClick={()=>setColor('yellow')}>Yellow</button>
          <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:'#00FF7F'}}
          onClick={()=>setColor('#00FF7F')}>Spring Grenn</button>
          <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:'#FF1493'}}
          onClick={()=>setColor('#FF1493')}>Pink</button>
          <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:'purple'}}
          onClick={()=>setColor('purple')}>Puple</button>
          <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:'#00FF00'}}
          onClick={()=>setColor('#00FF00')}>Lime</button>




        </div>
      </div>


    </div>

  )
}

export default App
