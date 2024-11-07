import { useParams } from "react-router-dom"

export default function ProductDetails() {
    const { productId } = useParams();
    return (
        <div>The ID of the product is {productId}</div>
    )
}
