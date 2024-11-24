'use client'

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation'
import Header from './Header.jsx'

const SizePicker = () =>
{
    const router = useRouter()
    const searchParams = useSearchParams()
    const [chosenSize, setChosenSize] = useState('md')
    const sizes = ['xs', 's', 'm', 'lg', 'xl', 'xxl']
    
    useEffect(() =>
    {
        const params = new URLSearchParams(searchParams.toString())
        params.set('size', chosenSize)
        router.push(`?${params.toString()}`)
    }, [chosenSize, searchParams, router])

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
                            <button key={index} href="#" className={`${chosenSize === size ? 'scale-90' : 'scale-100'} grid place-content-center bg-green-500 w-[50px] h-[50px] text-lg uppercase rounded-md cursor-pointer transition-opacity ease-in duration-150 hover:opacity-80`} onClick={() => setChosenSize(size)}>
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