import { Link } from "react-router-dom"

const PRODUCTS = [
    { id: '123', title: 'Product 1' },
    { id: '1533', title: 'Product 2' },
    { id: '1233', title: 'Product 3' }
]

export default function Products() {
    return (
        <>
            <div>Products</div>
            <ul>
                {PRODUCTS.map((item, idx) =>
                    <li key={idx}>
                        {/* The value of to prop must be a string */}
                        <Link to={item.id}>
                            {item.title}
                        </Link>
                    </li>)}
            </ul>
        </>
    )
}
