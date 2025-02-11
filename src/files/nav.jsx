import List from './list.jsx'
import {useState ,useEffect} from 'react'

export default function Nav({name}) {
  console.log(name)
  const change =(e) =>{
    e.preventDefault();
    setHide(!hide)
  }
  const [hide , setHide] = useState(false);
  
  return (  
    
    <>
    <div className="bg-gray-500 h-12 py-4 pb-10 text-center font-bold text-white text-xl ">
      <img src="data:image/png;base64,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" alt="" className='rounded-full h-16 absolute right-5 top-5.5 cursor-pointer' onClick={change}/>Welcome to Todo App {name}
    </div>
    <List hide ={hide}/>
    </>
  )
}
