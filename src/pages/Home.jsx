import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('products');
    }
    return (
        <>
            <div>Home</div>
            <button onClick={clickHandler}>
                Browse Products
            </button>
        </>

    )
}
