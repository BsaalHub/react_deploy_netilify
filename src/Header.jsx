/* 
function Header (props) {  // Instead of using props, we can use object destructuring. props = {title} in header function and only title in h1.

    return(
        <header>

            <h1>{props.title}</h1>

        </header>
    )
}
 */

function Header ({title}) {  // Instead of using props, we can use object destructuring. props = {title} in header function and only title in h1.

    return(
        <header>

            <h1>{title}</h1>

        </header>
    )
}

Header.defaultProps = {   // if we don't have our title on app.jsx , this default title will be shown.
    title: "Default List"
}

export default Header