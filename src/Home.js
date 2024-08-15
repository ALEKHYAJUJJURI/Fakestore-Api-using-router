import { useCustomHooks } from "./customhooks/custom-hooks"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useFetchApi } from "./customhooks/fetchApi";
import { useState } from "react";

export function Home(){
    const num = useCustomHooks()
    let vals = useFetchApi(`https://fakestoreapi.com/products`)
    const [count,setCount] = useState(0)
    const [cartProduct,setCartProduct] = useState([])
    function onClickAddCart(item){
        cartProduct.push(item)
        setCount(cartProduct.length)
    }

    return(
        <div className="container-fluid">
            <div className="text-center" >
                <h3>Random Number Generator using CustomHook</h3>
                <h2 className="text-danger">{num}</h2>
                <div>
                    <div className="text-start my-2">
                        <select className="">
                            <option value='-1'>Choose Layout</option>
                            <option value={'grid'}>Grid</option>
                            <option value={'card'}>Card</option>
                        </select>
                    </div>
                    <nav className="bg-dark text-white d-flex justify-content-between px-3">
                        <div className="h2">
                            <span className="bi bi-cart4"></span>
                        </div>
                        <div>
                            <h2>PRODUCTS</h2>
                        </div>
                        <div className="py-1">
                            <button className="bi bi-cart3 bg-warning btn position-relative" data-bs-toggle="modal" data-bs-target="#cart"><span className="badge bg-danger position-absolute rounded-circle">{count}</span></button>
                            <div className="modal" id="cart">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <div className="h3">Cart Items</div>
                                        </div>
                                        <div className="modal-body">
                                            <h5>fghj</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </nav>
                    <table className="table table-hover"> 
                        <thead>
                            <tr>
                               <th>S.No</th>
                               <th>Title</th>
                               <th>Image</th>
                               <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                vals.map(item=>
                                <tr key={item}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        <img src={item.image} width={'50px'}/>
                                    </td>
                                    <td className="fs-5 fw-bold">{item.price}</td>
                                    <td>
                                        <button className="btn btn-info" onClick={()=>onClickAddCart(item)}>Add To Cart</button>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                   
                </div>
            </div>
        </div>
    )
}