import ProductList from "../../../components/item/ProductList";
import Cart from "../../../components/item/Cart";

export default function Shop() {
    return (
        <div>
            <h1>Online Store</h1>
            <Cart />
            <ProductList />
        </div>
    );
}
