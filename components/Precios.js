import React, { useState } from 'react'

const Precios = ({ data, add, id }) => {
    const {element , index} = data
    const {descripcion, value} = element 
    const [amount, setAmount] = useState(0)
    return (
        <>
            <p>{descripcion ? descripcion : <>sencillo</> }</p>
            <div><button className='btn btn-primary' onClick={()=>setAmount(amount - 1)}>-</button>{amount}<button className='btn btn-primary' onClick={()=>setAmount(amount + 1)}>+</button></div>
            <button className='btn btn-outline-danger' onClick={() => add({data:{id, opcion:{descripcion, valor:value, amount, id:index}}})}>{amount*value}</button>
        </>
    )
}

export default Precios