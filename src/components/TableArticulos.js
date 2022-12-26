import React from 'react'

const TableArticulos = ({ data }) => {
    const {id, nombre, opciones } = data
    let row = opciones.length
    return (
        <>
            <tr>
                <td rowSpan={row + 1}>{id}</td>
                <td rowSpan={row + 1} style={{textAlign:'match-parent'}}>{nombre}</td>
            </tr>
            {opciones.map((item) => <tr>
                <td>{item.descripcion}</td>
                <td>{item.amount}</td>
                <td>{item.valor}</td>
                <td>{item.valor * item.amount}</td>
            </tr>)}
        </>
    )
}

export default TableArticulos