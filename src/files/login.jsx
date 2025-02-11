import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'

export default function Login() {
    const nav= useNavigate();
    const submit = (e) =>{
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify(user));
        nav("/");
        toast.success("Logged in sucessfully");
    }
    const [user , setUser] = useState("");
  return (
    <>
    <div className=" bg-slate-800 h-screen">
        <h1 className="font-bold font-sans text-center pt-20 text-white text-4xl">Login to TodoList</h1>
        <div className="h-96 mx-auto w-[430px]">
            <form className="m-4 p-8 rounded-xl outline-3 outline-offset-0 outline-gray-300 h-48 mt-20 ">
                
                <input type="text" name="name" placeholder="username" value = {user} onChange ={(e)=>setUser(e.target.value)}className="bg-white mt-2 mx-auto w-80 font-sarif h-12 text-xl text-green-700 font-bold rounded-lg focus:ring-4 focus:ring-blue-400 focus:outline-none hover:outline hover:outline-offset-0 hover:outline-gray-200 px-2 py-4"/>
                            
                <button onClick = {submit} className="cursor-pointer m-28 bg-teal-500 rounded-xl mt-8 text-xl  text-white h-[40px] pb-1 w-24 font-bold hover:bg-teal-600">Login</button>
            </form>
        </div>
    </div>
    </>    
  )
}
