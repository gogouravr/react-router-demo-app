import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__list}>
                <li className={styles['navbar__list--item']}>
                    <NavLink to="">
                        Home
                    </NavLink>
                </li>
                <li className={styles['navbar__list--item']}>
                    <NavLink to="products">
                        Products
                    </NavLink>
                </li>
                <li className={styles['navbar__list--item']}>
                    <NavLink to="products/123">
                        Product with id=1234
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
