import React, { useContext } from 'react'
import { Mycontext } from './contexts/Mycontext'


const Card = () => {
    const {count,setCount} = useContext(Mycontext)

    return (
        <div className='card-main my-4'>
            <div className="card" style={{width:"18rem"}}>
                <img src="https://img.freepik.com/free-vector/shopping-basket-fresh-fruits-vegetables_1284-17179.jpg?w=2000" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Cart</h5>
                    <p className="card-text">Add items to buy</p>
                    <button className="btn btn-primary" onClick={()=>setCount(count + 1)}>Add product</button>
                </div>
            </div>
        </div>
    )
}

export default Card
