'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import Header from './Header.jsx'

const SizePicker = () =>
{
    const searchParams = useSearchParams()
    const chosenSize = searchParams.get('size')

    
    // Sizes
    const sizes = ['xs', 's', 'm', 'lg', 'xl', 'xxl']

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
                            <Link key={index} href={`/payment?size=${size}`} className={`${chosenSize === size ? 'scale-90' : 'scale-100'} grid place-content-center bg-green-500 w-[50px] h-[50px] text-lg uppercase rounded-md cursor-pointer transition-opacity ease-in duration-150 hover:opacity-80`}>
                                {size}
                            </Link>
                        )

                    })
                }
            </div>
        </article>
    )
}

export default SizePicker