'use client'

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Header from './Header.jsx';

const ColorPicker = () =>
{
    const colorPickerButtons = [
        { buttonText: 'Gray', buttonBackgroundColor: '#ccc' },
        { buttonText: 'Mocca', buttonBackgroundColor: '#a07b71' },
        { buttonText: 'Olive', buttonBackgroundColor: '#808000' },
        { buttonText: 'Navy', buttonBackgroundColor: '#000080' },
        { buttonText: 'Lightblue', buttonBackgroundColor: '#add8e6' },
    ];

    const router = useRouter();
    const [chosenColor, setChosenColor] = useState('Olive');

    useEffect(() =>
    {
        // Avoid unnecessary redirects
        router.push(`?color=${chosenColor}`, { scroll: false });
    }, [chosenColor, router]); // Only depend on `chosenColor` and `router`

    return (
        <article className="mt-12">
            <Header>
                <h3 className="text-black text-xl text-left">Color</h3>
            </Header>

            <div className="color-picker-buttons-container flex gap-5 mt-3">
                {colorPickerButtons.map((colorPickerButton) => (
                    <button
                        key={colorPickerButton.buttonText}
                        className={`${chosenColor === colorPickerButton.buttonText ? 'scale-90' : 'scale-100'
                            } text-white p-2 rounded transition ease-in duration-150 hover:opacity-80`}
                        style={{ backgroundColor: colorPickerButton.buttonBackgroundColor }}
                        onClick={() => setChosenColor(colorPickerButton.buttonText)} // Fix handler
                    >
                        {colorPickerButton.buttonText}
                    </button>
                ))}
            </div>
        </article>
    );
};

export default ColorPicker;
