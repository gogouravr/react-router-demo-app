import styles from './MainNavigation.module.css'
import { NavLink } from "react-router-dom";


export default function EventsNavigation() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__list}>
                <li className={styles['navbar__list--item']}>
                    <NavLink to="" className={({ isActive }) => isActive ? styles['navbar__list-item--active'] : undefined} end>
                        All events
                    </NavLink>
                </li>
                <li className={styles['navbar__list--item']}>
                    <NavLink to="new" className={({ isActive }) => isActive ? styles['navbar__list-item--active'] : undefined}>
                        New Events
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
