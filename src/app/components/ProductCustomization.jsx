import Image from 'next/image'
import tShirt from '@/images/tshirt/tshirt.png'

import Section from './Section.jsx'
import Header from './Header.jsx'
import SizePicker from './SizePicker.jsx'
import ColorPicker from './ColorPicker.jsx'


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
                <article className="self-left w-[50%]">
                    <Header 
                        headerText="Bare en T-shirt" 
                        className="text-black text-2xl underline text-center" 
                    />
                    <SizePicker />
                    <ColorPicker />
                </article>
            </div>
        </Section>
    )
}
