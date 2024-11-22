import Button from './Button.jsx'
import Header from './Header.jsx'

const SizePicker = ({ headerText }) =>
{
    const sizes = ['xs', 's', 'm', 'lg', 'xl', 'xxl']

    return (
        <article className="mt-4">
            <Header headerText={headerText}>
                <h3 headerText="Size" className="text-black text-xl text-left">Size</h3>
            </Header>

            <div className="container size-buttons-container flex gap-4 mt-2">
                {
                    sizes.map((size, index) =>
                    {
                        return (
                            <button key={index} className="bg-green-500 w-[50px] h-[50px] text-lg uppercase rounded-md cursor-pointer transition ease-in duration-150 hover:opacity-80">
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