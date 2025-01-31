"use client";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const items = Object.values(cart.entities); // Convert normalized data to array

    return (
        <div>
            <h2>Shopping Cart</h2>
            {items.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.title} - ${item.points} x {item.quantity}
                            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total Items: {cart.totalQuantity}</h3>
        </div>
    );
}
