import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products">
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/product/123">
                        Product with id=1234
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
