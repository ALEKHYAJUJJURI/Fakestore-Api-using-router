import { useEffect, useState } from 'react'
import './routs.css'
import { Route,BrowserRouter,Routes,Link } from 'react-router-dom'

export function Porfolio(){
    const [cardWid,setCardWid] = useState('')
    useEffect(()=>{
        setCardWid('w-25')
    },[])
    return(
        <div className="body container-fluid" style={{'height':'100vh'}}>
            <BrowserRouter>
            <div>
                <header className="bg-dark text-white d-flex justify-content-around align-items-center p-3">
                    <nav className='nav d-flex justify-content-around fs-5'>
                        <span className='mx-2 fs-5'><Link className="btn btn-primary" to="about">About Me</Link></span>
                        <span className='mx-2 fs-5'><Link className="btn btn-primary" to="skills">Skills</Link></span>
                        <span className='mx-2 fs-5'><Link className="btn btn-primary" to="projects">Projects</Link></span>
                        <span className='mx-2 fs-5'><Link className="btn btn-primary" to="resume">My Resume</Link></span>
                    </nav>
                </header>
                <main className='text-white bg-con' style={{'height':'100vh'}}>
             <div className='bg-con2'>
             <div className='d-flex justify-content-around align-items-center' style={{'height':"500px"}}> 
                <div className="d-flex flex-column" >
                  <img className="profile" src="profile2.jpg" width={200} />
                  </div>
                  <div className='fs-3 fw-bold'>
                    <span>Hello! <br/> I am ALEKHYA <br/> I'm React Developer </span>
                  </div>
                  </div>
                   <div className='bg-secondary' style={{'height':'100vh'}}>
                   <Routes className=''>
                        <Route path='/' element={<div className='d-flex flex-column justify-content-around align-items-center' style={{'height':'100vh'}}><div><h2>UI/UX Designer</h2><p>HTML | CSS | JavaScript | React Js</p></div></div>}/>
                        <Route path='/about' element={<div className='d-flex flex-column justify-content-around align-items-center' style={{'height':'100vh'}}><div className='m-5'><h2>I am a Recat Developer</h2><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum accusamus at placeat. Repellendus sit quod quas impedit mollitia itaque est provident facilis, assumenda, cum, id praesentium nam delectus porro sunt.</p></div></div>}/>
                        <Route path='/skills' element={<div className='d-flex flex-column justify-content-around align-items-center' style={{'height':'100vh'}}><div><h2>Skills</h2><ul><li>HTML</li><li>CSS</li><li>JavaScript</li><li>Bootstrap</li><li>React</li></ul></div></div>}/>
                        <Route path='/projects' element={
                        <div className='d-flex flex-row justify-content-center align-content-center flex-wrap' style={{'height':'100vh'}}>
                            <div className={`card bg-dark text-white p-2 mx-2 my-2 ${cardWid}`}>
                                <div className='card-header'>
                                    <h4>Todo Application</h4>
                                </div>
                                <div className='card-body'>
                                    <a href='https://todo-application-task.netlify.app'>open</a>
                                </div>
                                
                            </div>
                            <div className={`card bg-dark text-white p-2 mx-2 my-2 ${cardWid}`}>
                                <div className='card-header'>
                                    <h4>FakeStore API</h4>
                                </div>
                                <div className='card-body'>
                                    <a href='https://alekhyajujjuri.github.io/fakestoreAPI/'>open</a>
                                </div>
                            </div>
                            <div className={`card bg-dark text-white p-2 mx-2 my-2 ${cardWid}`}>
                                <div className='card-header'>
                                    <h4>Random Joke Generator</h4>
                                </div>
                                <div className='card-body'>
                                    <a href='https://alekhyajujjuri.github.io/Random-Joke/'>open</a>
                                </div>
                            </div>
                            <div className={`card bg-dark text-white p-2 mx-2 my-2 ${cardWid}`}>
                                <div className='card-header'>
                                    <h4>Contact Form</h4>
                                </div>
                                <div className='card-body'>
                                    <a href='https://alekhyajujjuri.github.io/contact-form/'>open</a>
                                </div>
                            </div>
                            <div className={`card bg-dark text-white p-2 mx-2 my-2 ${cardWid}`}>
                                <div className='card-header'>
                                    <h4>Movie-Search</h4>
                                </div>
                                <div className='card-body'>
                                    <a href='https://alekhyajujjuri.github.io/movie-search-react/'>open</a>
                                </div>
                            </div>
                        </div>}
                        />
                         <Route path='/resume' element={<div><h4>My Resume</h4><span><a href='Alekhya_J.pdf'>Alekhya</a></span></div>}/>
                         <Route path='/*' element={<h2>OOps!... Your request not Found</h2>}/>
                    </Routes>
                   </div>
             </div>
                </main>
            </div>
            </BrowserRouter>
           
        </div>
    )
}