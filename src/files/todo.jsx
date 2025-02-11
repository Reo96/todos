import PropTypes from 'prop-types';
import { Trash2, NotebookPen } from 'lucide-react';
export default function Todo({item ,onDelete, onEdit}) {
  return (<>
    <div className="">
        <div className='relative w-60'>
        <button  onClick = {()=> {onDelete(item)}} className=' absolute top-0 left-85 cursor-pointer text-red-500 font-bold bg-gray-200 p-0.5 rounded-lg'><Trash2 className='h-[20px]' /></button>
        <button  onClick = {()=> {onEdit(item)}} className='absolute top-0 left-76  cursor-pointer text-blue-500 font-bold bg-gray-200 p-0.5 rounded-lg'><NotebookPen className='h-[20px]' /></button>
            <h1 className="text-lg text-white font-semibold">{item.title}</h1>
            <p className="text-sm text-gray-300">{item.desc}</p>  
        </div>
    </div>
    </>
  )
}
Todo.propTypes = {
    item : PropTypes.object.isRequired
}

