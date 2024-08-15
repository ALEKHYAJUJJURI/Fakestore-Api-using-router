import { useState } from "react";
import { Cookies,useCookies } from "react-cookie";



export function CoockiesDemo(){
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [cookie,setCookie,removeCookie] = useCookies(['user Name'])
    const [cookie2,setCookie2,removeCookie2] = useCookies(['password'])
    function nameChange(e){
        setUserName(e.target.value)
    }
    function passwordChange(e){
        setPassword(e.target.value)
    }
    function handleSubmitClick(){
        setCookie('user Name',userName);
        setCookie2('password',password)
        alert('Cookie is created');
        
    }

    return(
        <div className="container-fluid">
            <div className="">
                <form>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input className="" type="text" onChange={nameChange}/></dd>
                        <dt>Password</dt>
                        <dd><input className="" type="password" onChange={passwordChange}/></dd>
                    </dl>
                   
                    <button type="button" onClick={handleSubmitClick}>Submit</button>
                     
                </form>
            </div>
        </div>
    )
}