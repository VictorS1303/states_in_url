import Link from 'next/link'
import Header from './Header.jsx'

const SizePicker = () =>
{
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
                            <Link key={index} href="#" className="grid place-content-center bg-green-500 w-[50px] h-[50px] text-lg uppercase rounded-md cursor-pointer transition ease-in duration-150 hover:opacity-80">
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