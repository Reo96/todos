import Todo from './todo.jsx'
export default function todos(props) {
  return (
    <div className='bg-slate-700 py-4 w-max-w-screen pl-4'>
        <h2 className='text-2xl text-white pb-4 font-bold text-center relative'>Todos List <span><img src="https://cdn-icons-png.flaticon.com/512/6134/6134622.png" alt="" className='h-8 absolute left-180 top-0 '/>
        </span></h2>
        <div className='grid grid-cols-3 w-[95vw] overflow-y-auto mt-4'>
          {props.list.length!==0 ? props.list.map((x) =>{
                  return (<>
                      <div className='rounded-xl border-2 w-100 border-gray-400 p-4 m-2 mx-0'>
                          <Todo item={x} key= {x.sno} onDelete={props.onDelete} onEdit={props.onEdit}/>
                      </div>
                  </>)
              }) : <h3 className='text-2xl text-red-500 font-bold w-100 text-center m-10 ml-112'>No Todos to display</h3>}
        </div>
    </div>
  )
}
