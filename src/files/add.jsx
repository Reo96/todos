import { useState } from 'react';
import { toast } from 'react-hot-toast';
export default function Add({ addItem }) {

    const [title, setTitle] = useState("");
    const [desc, setdesc] = useState("");
    const toggle = (e) =>{
        e.preventDefault();
        setShow(!show);
    }
    const cancel = (e) =>{
        e.preventDefault();
        setShow(false);
    }
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            toast.error('Title or Description cannot be blank');
            return;
        }
        else {
            addItem(title, desc);
            toggle(e);
            setTitle("");
            setdesc("");
        }
    }
    const [show, setShow] = useState(false);
    
    return (
        <div>
            <div className='bg-slate-700 w-max-w-screen'>
            <button className='text-white cursor-pointer h-12 w-20 px-4 m-4 bg-blue-500 font-bold text-xl rounded-xl' onClick ={toggle}>
            Add
            </button>
            </div>
            {show &&<div className=" top-20 left-100 z-1 bg-blur absolute  bg-slate-700">
                <h1 className="font-bold font-sans text-center text-white text-2xl">Add New Todo</h1>
                <div className="h-72 rounded-xl mx-auto w-[500px] bg-slate-700 opacity-100">
                    <form onSubmit={submit} className=" bg-slate-700 flex flex-col gap-4  p-8 rounded-xl outline-3 outline-offset-0 outline-gray-300 h-72 mt-8 ">
                        <input type="text" name="title" placeholder="title" className="w-108 h-12 rounded-lg bg-white text-gray-600 focus:ring-4 focus:ring-blue-400 focus:outline-none  hover:outline hover:outline-offset-0 hover:outline-gray-200 px-2 py-4" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" name="desc" placeholder="description" className="w-108 h-12 bg-white text-gray-600 rounded-lg focus:ring-4 focus:ring-blue-400 focus:outline-none  hover:outline hover:outline-offset-0 hover:outline-gray-200 mt-4 px-2 py-4" value={desc} onChange={(e) => setdesc(e.target.value)} />

                        <div className='mx-auto mt-4 flex gap-8'>
                            <button type="submit" className="cursor-pointer w-20 h-[36px] font-bold bg-teal-500 text-white rounded-lg hover:bg-teal-600 ">Add</button>
                            <button type="submit" onClick={cancel} className="cursor-pointer w-20 h-[36px] font-bold bg-teal-500 text-white rounded-lg hover:bg-teal-600 ">Cancel</button>
                        </div>

                    </form>
                </div>
            </div>}
        </div>
    )
}