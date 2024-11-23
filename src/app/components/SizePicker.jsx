'use client'

import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Header from './Header.jsx'

const SizePicker = () =>
{
    const router = useRouter()    
    const sizes = ['xs', 's', 'm', 'lg', 'xl', 'xxl']
    // const chosenSize = 'lg'

    useEffect(() =>
    {
        router.push(`&size=`)
    }, [])

    return (
        <article className="mt-4">
            <Header>
                <h3 className="text-black text-xl text-left">Size</h3>
            </Header>

            <div className="container size-buttons-container flex gap-4 mt-2">
                {
                    sizes.map((size, index) =>
                    {
                        return (
                            <button key={index} href="#" className={`${chosenSize === size ? 'scale-90' : 'scale-100'} grid place-content-center bg-green-500 w-[50px] h-[50px] text-lg uppercase rounded-md cursor-pointer transition-opacity ease-in duration-150 hover:opacity-80`}>
                                {size}
                            </button>
                        )
                    })
                }
            </div>
        </article>
    )
}

export default SizePicker