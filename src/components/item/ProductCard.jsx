"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

export default function ProductCard({ product }) {
    const dispatch = useDispatch();

    return (
        <div style={{ border: "1px solid #ddd", padding: "10px" }}>
            <h3>{product.title}</h3>
            <p>${product.points}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
    );
}