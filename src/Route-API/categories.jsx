import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export function HandeleCategories(){
    const [categories,setCategories] = useState([])
   useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/categories')
    .then(response=>
    {
        console.log(response.data)
        setCategories(response.data)
    }
    )

   },[])
    return(
        <div>
            <h3 className="">Categories</h3>
            <div className="">
                <ul className="list-unstyled d-flex flex-column" >
                    {
                        categories.map(item=>
                        <li key={item} className="w-25 btn btn-secondary m-2"><Link className="text-white text-decoration-none" to={`/products/${item}`}>{item.toUpperCase()}</Link></li>
                    )
                    }
                </ul>
            </div>
            <Link to="/home">Back To Home</Link>
        </div>
    ) 
}