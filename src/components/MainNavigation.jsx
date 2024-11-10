import { NavLink } from "react-router-dom";
import styles from './MainNavigation.module.css'

export default function MainNavigation() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__list}>
                <li className={styles['navbar__list--item']}>
                    <NavLink to="" className={({ isActive }) => isActive ? styles['navbar__list-item--active'] : undefined} end>
                        Home
                    </NavLink>
                </li>
                <li className={styles['navbar__list--item']}>
                    <NavLink to="events" className={({ isActive }) => isActive ? styles['navbar__list-item--active'] : undefined}>
                        Events
                    </NavLink>
                </li>
                {/* <li className={styles['navbar__list--item']}>
                    <NavLink to="products/123">
                        Product with id=1234
                    </NavLink>
                </li> */}
            </ul>
        </nav>
    )
}