import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TableArticulos = ({data, eliminar}) => {
    const {id, nombre, opciones } = data
    let row = opciones.length
    return (
        <>
            <tr>
                <td rowSpan={row + 1}><button className="btn btn-outline-danger" onClick={()=>eliminar({id:id})}><FontAwesomeIcon icon={faTrash} size="xs"/></button></td>
                <td rowSpan={row + 1}>{id}</td>
                <td rowSpan={row + 1} style={{textAlign:'match-parent'}}>{nombre}</td>
            </tr>
            {opciones.map((item, index) => <tr key={index}>
                <td>{item.descripcion}</td>
                <td>{item.amount}</td>
                <td>{item.valor}</td>
                <td>{item.valor * item.amount}</td>
            </tr>)}
        </>
    )
}

export default TableArticulos