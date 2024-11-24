'use client'

import Section from '../components/Section.jsx'
import Link from 'next/link'
import Image from 'next/image'
import tShirt from '@/images/tshirt/tshirt.png'


export default function Checkout() 
{
    return (
        <Section>
            <div className="flex items-center justify-center h-screen gap-40">
                <article>
                    <Image
                        src={tShirt}
                        height={400}
                        width={400}
                        alt="T-shirt image"
                    />
                </article>
                <article className="flex flex-col gap-16">
                    <div className="text-black">
                        <h2 className="text-2xl">Size:</h2>
                        <p className="text-lg uppercase">md</p>
                    </div>
                    <div className="text-black">
                        <h2 className="text-2xl">Color:</h2>
                        <p className="text-lg capitalized">Blue</p>
                    </div>

                    <Link href="#" className="inline-block w-[300px] text-center bg-green-500 mt-28 ml-12 py-4 rounded-full uppercase font-bold tracking-wider transition ease-in duration-150 hover:opacity-80">
                        Go To Payment
                    </Link>
                </article>

            </div>
        </Section>
    )
}