'use client'
import Link from 'next/link'

const ButtonLink = ({ href, buttonLinkText }) =>
{
    return (
            <Link
                href={href}
                className="bg-green-500 text-white px-6 py-3 flex justify-center min-w-fit max-w-full uppercase font-bold text-lg tracking-wider rounded-lg transition ease-in duration-150 hover:opacity-80"
            >
                {buttonLinkText}
            </Link>
    )
}

export default ButtonLink