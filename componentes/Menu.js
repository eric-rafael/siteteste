import Link from 'next/link'

const layoutLink = {
    color: '#333',
    textDecoration: 'none'

}
const layoutMenu = {
    display: 'inline-block',
    minWidth: '150px',
    fontFamily: 'calibri',
    color: '#333'
}
let categories = [
    {
        label:'Vercel',
        link:'https://vercel.com/',
        icon: '../public/images/vercel.png'
     },
    {
        label:'JavaScript',
        link:'https://www.javascript.com/',
        icon: '../public/images/js.png'
     },
     {
        label:'PHP 7',
        link:'https://www.php.net/',
        icon: '../public/images/php.png'
     },
     {
        label:'HTML5',
        link:'https://www.w3.org/html/',
        icon: '../public/images/html5.png'
     },
     {
        label:'Bootstrap 4',
        link:'https://getbootstrap.com/',
        icon: '../public/images/bootstrap.png'
     }
    ]
     
const Menu = props => (
    <nav>
        <ul>
            {
            categories.map(items =>(
            <li style={layoutMenu}>
                <Link href={items.link}>
                <a style={layoutLink} >{items.label}</a>
            </Link></li>
            ))
            }
        </ul>
    </nav>
)

export default Menu