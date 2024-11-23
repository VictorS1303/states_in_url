import Header from './Header.jsx'
import Link from 'next/link'

const ColorPicker = () =>
{
    const colorPickerButtons = [
        { buttonText: 'Gray', buttonBackgroundColor: '#ccc' },
        { buttonText: 'Mocca', buttonBackgroundColor: '#a07b71' },
        { buttonText: 'Olive', buttonBackgroundColor: '#808000' },
        { buttonText: 'Navy', buttonBackgroundColor: '#000080' },
        { buttonText: 'Lightblue', buttonBackgroundColor: '#add8e6' },
    ];

    return (
        <article className="mt-12">
            <Header>
                <h3 className="text-black text-xl text-left">Color</h3>
            </Header>

            <div className="color-picker-buttons-container flex gap-5 mt-3">
                {
                    colorPickerButtons.map((colorPickerButton, index) => (
                        <Link
                            key={index}
                            className="text-white p-2 rounded transition ease-in duration-150 hover:opacity-80"
                            style={{ backgroundColor: colorPickerButton.buttonBackgroundColor }}
                            href="#"
                        >
                            {colorPickerButton.buttonText}
                        </Link>
                    ))
                }
            </div>
        </article>
    );
};

export default ColorPicker;
