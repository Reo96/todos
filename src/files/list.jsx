import React from 'react'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

export default function List({hide}) {
    const nav = useNavigate();
    const logout = () =>{
        localStorage.removeItem('user');
        nav('/login');
        toast.success("Logged Out Successfully")
    }
    const clearAll = () =>{
        localStorage.clear();
        nav('/login');
        toast.success("Everything Deleted Successfully")
    }
  return (
    <>
    {hide && <div className='z-1 absolute flex flex-col top-22 gap-2 bg-gray-600 rounded-lg w-28 py-auto text-gray-100 h-23 p-4 py-3 font-medium right-1'>
                <div onClick = {logout} className='cursor-pointer ml-2'>Logout</div>
                <hr className='text-gray-300 text-xl'/>
                <div onClick = {clearAll} className='cursor-pointer ml-2'>Delete All</div>
            </div>}
    </>
  )
}
