'use client'

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation'
import Header from './Header.jsx';

const ColorPicker = () =>
{

    const router = useRouter();
    const searchParams = useSearchParams()
    const [chosenColor, setChosenColor] = useState('gray');


    const colors = [
        { name: 'Gray', value: 'gray', backgroundColor: '#ccc' },
        { name: 'Mocca', value: 'mocca', backgroundColor: '#a07b71' },
        { name: 'Olive', value: 'olive', backgroundColor: '#808000' },
        { name: 'Navy', value: 'navy', backgroundColor: '#000080' },
        { name: 'Blue', value: 'blue', backgroundColor: '#add8e6' },
    ];

    useEffect(() =>
    {
        const params = new URLSearchParams(searchParams.toString())
        params.set('color', chosenColor)
        router.push(`?${params.toString()}`)
    }, [chosenColor, searchParams, router]);

    return (
        <article className="mt-4">
            <Header>
                <h3 className="text-black text-xl text-left">Color</h3>
            </Header>

            <div className="container color-picker-buttons-container flex gap-4 mt-2">
                {colors.map((color, index) => (
                    <button
                        key={index}
                        className={`${chosenColor === color.value ? 'scale-90' : 'scale-100'} grid place-content-center w-fit h-[50px] px-4 text-lg uppercase rounded-md cursor-pointer transition-opacity ease-in duration-150 hover:opacity-80`}
                        style={{ backgroundColor: color.backgroundColor }}
                        onClick={() => setChosenColor(color.value)}
                    >
                        {color.name}
                    </button>
                ))}
            </div>
        </article>
    );
};

export default ColorPicker;
