import axios from "axios";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function HandleProducts(){
    const [products,setProducts] = useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${par.item}`)
        .then(response=>{
            console.log(response.data)
            setProducts(response.data)
        }
        )
    },[])
    let par = useParams()
    return(
        <div>
            <h3>{par.item.toUpperCase()} Products</h3>
            <div className="d-flex flex-wrap">
                {
                    products.map(prod=>
                        <div className="card m-2" key={prod.id} style={{'width':'250px'}}> 
                            <div className="card-header"> 
                                <span>{prod.title}</span>
                             </div>  
                             <div className="card-body">
                                <img src={prod.image} width={150}/>
                             </div>   
                             <div className="card-footer"> 
                                <span className="fs-3">{prod.price}</span><br/>
                                <button className="btn btn-warning"><Link to={`/page/${prod.id}`} className="bi bi-eye-fill"></Link></button>
                             </div>    
                        </div>
                    )
                }
                
            </div>
            <Link to='/categories'>Back to Categories</Link>
        </div>
    )
}