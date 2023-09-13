import React, { useContext } from 'react'
import { Mycontext } from './contexts/Mycontext'

const Navbar = () => {
    const {count} = useContext(Mycontext)

    
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">ContextApi</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className= "px-2 mx-4">
                        <h3>Count : {count}</h3>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
