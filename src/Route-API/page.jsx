import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export function HandlePage(){
    let params = useParams()
    const [disProduct,setDisProduct] = useState([{id:0,title:'',price:'',description:'',image:'',category:'',rating:{rate:0,count:0}}])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=>{
            console.log(response.data)
            setDisProduct(response.data)
        }) 
        
    },[])
    return(
        <div className="bg-white text-dark" style={{'width':"100vw", 'height':'100vh'}}>
            <h2>Display product page</h2>
            <div className="container-fluid m-3">
                <div className="row">
                    <div className="col-5">
                        <img src={disProduct.image} width={300} />
                    </div>
                    <div className="col-6">
                        <dl>
                            <dt className="my-2"><span className="h3">{disProduct.title}</span></dt>
                            <dt>Description</dt>
                            <dd ><span>{disProduct.description}</span></dd>
                            <dt className="my-2">Price:<span className="h3">{disProduct.price}</span></dt>
                            
                        </dl>
                    </div>
                </div>
            </div>
            <Link to={`/products/${disProduct.category}`}>Back to products</Link>
        </div>
    )
}