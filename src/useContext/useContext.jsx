import { createContext, useContext, useEffect, useState } from "react";
let ContextName = createContext(null)

export function Level1Component(){
    let abc = useContext(ContextName)
    return(
        <div className="container-fluid p-2 bg-warning text-dark">
            <h2>Level1-{abc}</h2>
            <Level2Compo/>
        </div>
    )
}
export function Level2Compo(){
    let abc = useContext(ContextName)
    return(
        <div className="d-flex justify-content-around container-fluid p-2 bg-secondary text-warning">
            <div className="bg-danger p-2">
            <h2>Level2-{abc}</h2>
            </div>
        
            <div className="bg-danger p-2">
                <h2>Level2-{abc}</h2>
            </div>
        </div>
    )
}

export function ContextComponent(){
    let [val,setVal] = useState('');
    

    function funAbc(e){
        setVal(e.target.value)
    }

    return(    
        <div>
            <ContextName.Provider value={val}>
        <div className="container-fluid p-2 bg-dark text-white">
            <h1>Use Context-{val}</h1>
            <dd>
            <input type="text" placeholder="Enter..." onChange={funAbc} className="form-control"/>
            </dd>
            <Level1Component/>

        </div>
        </ContextName.Provider>
        </div>
    )
}