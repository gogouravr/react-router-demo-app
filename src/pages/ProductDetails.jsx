import { useParams, Link } from "react-router-dom"


export default function ProductDetails() {
    const { productId } = useParams();
    return (
        <>
            <div>The ID of the product is {productId}</div>
            <span>
                <Link to={'..'} relative="path">
                    Go back!
                </Link>
            </span>
        </>
    )
}
