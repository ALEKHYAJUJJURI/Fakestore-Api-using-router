import { useEffect, useState } from "react";
import { BrowserRouter,Router,Route,Link, Routes } from "react-router-dom";
import { HandeleCategories } from "./categories";
import { HandleHome } from "./home";
import { HandleProducts } from "./products";
import { HandlePage } from "./page";
export function RouteAPI(){
    
    return(
        <div>
           <BrowserRouter>
           <div className="text-center bg-secondary p-2 d-flex justify-content-around align-items-center">
                <div className="">
                    <h2 className="bi bi-cart-fill p-2 rounded"> Fakestore.</h2>
                </div>
                <div className="h3">
                   <span className="btn btn-warning"><Link to='/home' className="text-decoration-none text-white">Home</Link></span>
                   <span className="btn btn-warning mx-2"><Link to="/categories" className="text-decoration-none text-white">Categories</Link></span>
                   
                </div>
                <div className="h5 text-warning rounded py-2">
                    <span className="bi bi-search btn"></span>
                    <span className="bi bi-cart btn" data-bs-target="#moda" data-bs-toggle="modal"></span>
                    <div className="modal fade" id='cart'>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div>hello</div>
                            </div>
                        </div>
                    </div>
                    <span className="bi bi-person-fill text-dark bg-warning rounded-circle btn"></span>
                </div>
            </div>
            <section className="bg-dark text-white p-3" style={{'height':'100vh'}}>
                
               <Routes>
                <Route path="/" element={<HandleHome/>} />
                <Route path="home" element={<HandleHome/>} />
                <Route path="categories" element={<HandeleCategories/>} />
                <Route path="products/:item" element={<HandleProducts/>} />
                <Route path="page/:id" element={<HandlePage/>}/>
                <Route path="*" element={<h2>Not Found</h2>}/>
               </Routes>
            </section>
           </BrowserRouter>
        </div>
    )
}