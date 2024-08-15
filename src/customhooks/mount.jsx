import { useEffect, useState } from "react"

export function Login(){
    useEffect(()=>{
        console.log("Login component Mounted")
        return()=>{
            console.log("Login component UnMounted ")
        }
    },[])
    return(
        <div className="container-fluid">
            <div>
                <h2>Login component</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password"/></dd>
                </dl>
                <button>Login</button>
            </div>
        </div>
    )
}
export function Register(){
    useEffect(()=>{
        console.log("Register component Mounted")
        return()=>{
            console.log("Register component UnMounted ")
        }
    },[])
    return(
        <div className="container-fluid">
        <div>
            <h2>Register component</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text"/></dd>
                <dt>Create Password</dt>
                <dd><input type="password"/></dd>
                <dt>Email</dt>
                <dd><input type="email"/></dd>
            </dl>
            <button>REgister</button>
        </div>
    </div>
    )
}

export function UseEffectMountDemo(){
    const [compo,setCompo] = useState()
   function loginClick(){
    setCompo(<Login/>)
   }
   function registerClick(){
    setCompo(<Register/>)
   }
    return(
        <div className="container-fluid">
        <h2>Home</h2>
        <div>
            <button onClick={loginClick}>Login</button>
            <button onClick={registerClick}>Register</button>
        </div>
        <hr/>
        <div className="my-2">
            {compo}
        </div>
    </div>
    )
}