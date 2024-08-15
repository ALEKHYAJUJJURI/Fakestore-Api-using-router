
import { useReducer, useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import { CoockiesDemo } from "./coockies";
import { useCookies } from "react-cookie";

let initialState={viewCount:0}; 
function reducer(state,action){
    switch(action.type){
        case "addLike":
            return {viewCount:state.viewCount+1}
        case "addDisLike":
            return {viewCount:state.viewCount-1}
    }
}

export function ReducerDemo(){
    const [cookie,setCookie,removeCookie] = useCookies(['user Name'])
   
    const [state,dipatch] = useReducer(reducer,initialState)
    const [likeIcon,setIcon] = useState('')
    function handleClick(){
        dipatch({type:"addLike"});
        setIcon('')
    }
    function handleSignOut(){
        removeCookie('user Name');
    }
    return(
        <div className="container-fluid">
            <div>
                <h2>{cookie['user Name']} Signed In</h2>
                <button className="btn btn-primary" onClick={handleSignOut}>Signed Out</button>
                <iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
</iframe>
            </div>
            <button className={`bi bi-hand-thumbs-up btn btn-primary ${likeIcon}`} onClick={handleClick}></button>
            <span className="mx-2">{state.viewCount} Likes</span>
        </div>
    )
}