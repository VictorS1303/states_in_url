import Image from 'next/image'
import tShirt from '@/images/tshirt/tshirt.png'

import Section from './Section.jsx'
import Header from './Header.jsx'
import SizePicker from './SizePicker.jsx'
import ColorPicker from './ColorPicker.jsx'
import Link from 'next/link'


export default function ProductCustomization() 
{
    return (
        <Section>
            <div className="mx-auto flex justify-center align-center w-[1200px] items-start h-fit gap-40 mt-48">
                <article>
                    <Image
                        src={tShirt}
                        height={400}
                        width={400}
                        alt="T-shirt image"
                    />
                </article>
                <article>
                    <Header
                        headerText="Bare en T-shirt"
                        className="text-black text-2xl underline text-center"
                    />
                    <SizePicker />
                    <ColorPicker />
                    <Link href="/checkout" className="inline-block w-[275px] text-center bg-green-500 mt-28 ml-12 py-4 rounded-full uppercase font-bold tracking-wider transition ease-in duration-150 hover:opacity-80">
                        Go To Checkout
                    </Link>
                </article>
            </div>
        </Section>
    )
}
