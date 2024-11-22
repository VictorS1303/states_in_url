import Image from 'next/image'
import tShirt from '@/images/tshirt/tshirt.png'

import Section from './Section.jsx'
import Header from './Header.jsx'


export default function ProductCustomization() 
{
    return (
        <Section>
            <div className="flex justify-center items-start h-fit gap-40 mt-48">
                <article>
                    <Image
                        src={tShirt}
                        height={400}
                        width={400}
                        alt="T-shirt image"
                    />
                </article>
                <article>
                    <Header headerText="Bare en T-shirt" className="text-black text-2xl underline" />
                </article>
            </div>
        </Section>
    )
}