'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Itemstore = ({ data, add }) => {
    const { nombre, descripcion, valor, img, id } = data
    const [amount, SetaAmount] = useState(1)
    return (<>
                <article className='relative rounded-md overflow-hidden border p-1 w-72 flex flex-wrap justify-center items-center'>
                    <h2 className='text-2xl text-center'>{nombre}</h2>
                    <figure className='relative w-full'>
                        <Image loading='lazy' src={img} alt={nombre} width={0} height={0} className='w-64 h-96 object-cover rounded-md' />

                        <figcaption className='absolute bottom-0 right-0 left-0 bg-gray-100/50 line-clamp-2'>
                            <p className='text-lg font-bold first-letter:uppercase'>{descripcion}</p>
                        </figcaption>
                    </figure>
                    <div className='flex justify-center items-center gap-2 w-1/2 text-2xl'>
                        <button className='font-bold text-5xl w-fit h-fit' onClick={() => amount > 1 ? SetaAmount(amount - 1) : null}>-</button>
                        <p className='m-0 pt-2'>{amount}</p>
                        <button className='font-bold text-5xl w-fit h-fit' onClick={() => SetaAmount(amount + 1)}>+</button>
                    </div>
                    <button className='btn btn-success' style={{ justifySelf: "center" }} onClick={() => add({ data: { id, opcion: { descripcion: "sencillo", valor, amount: amount, id: data.opcionId } } })}>{valor * amount}</button>
                </article>
    </>
    )
}

export default Itemstore