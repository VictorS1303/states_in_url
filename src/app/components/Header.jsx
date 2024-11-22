const Header = ({children, headerText, className}) =>
{
    return (
        <header className={className}>
            {headerText}
            {children}
        </header>
    )
}

export default Header