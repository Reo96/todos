import Nav from './nav'
import Todos from './todos'
import Footer from './footer'
import Add from './add.jsx'
import {useState ,useEffect} from 'react'
import Edit from './edit.jsx'
import {useNavigate} from "react-router-dom"
export default function Home() {

    let list ; 
    const navigate = useNavigate();
    if(localStorage.getItem("items")){list =JSON.parse(localStorage.getItem("items"));}
    else {list =[];}
    let [items , setItems] = useState(list);
    const [item , setItem] = useState("");
    const [user , setUser] = useState("");
    const [shows ,setShows] = useState(false);
    const onDelete = (item) =>{
        console.log("deleted", item);
        setItems(items.filter((e)=>{
          return e!==item;
        }))
      } 
    const onEdit = (item) =>{
        setShows(!shows);
        setItem(item);
      } 
      const addItem = (title, desc)=>{
        let sno = items.length;
        const myItem ={
          sno : sno,
          title : title,
          desc : desc
        }
        if(title && desc){
          setItems([...items,myItem]);
        }
      }
      const editItem = (editItem)=>{
        let index = editItem.sno;
        items[index].title = editItem.title;
        items[index].desc = editItem.desc;
        setItems([...items]);
        setItem({});
        setShows(false);
      }
      useEffect(() => {
        const storedUser = (localStorage.getItem("user"))
        if (!storedUser) {
            navigate('/login');
        } else {
            setUser(JSON.parse(storedUser));
        }
    },[]);
      useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
      },[items])
  return (
    <div className='bg-slate-700 h-screen'>
        <Nav name = {user} />
        <Edit shows = {shows} editItem = {editItem} item = {item}/>
        <Add addItem = {addItem}/>
        <Todos list = {items} onDelete ={onDelete} onEdit= {onEdit}/>
        <Footer/>
    </div>
  )
}
