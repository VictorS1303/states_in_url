'use client'
import Link from 'next/link'

const ButtonLink = ({ href, buttonLinkText, className}) =>
{
    return (
            <Link
                href={href}
                className={className}
            >
                {buttonLinkText}
            </Link>
    )
}

export default ButtonLink