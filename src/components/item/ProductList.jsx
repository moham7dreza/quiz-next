import {setItems} from "../../store/itemSlice";
import {store} from "../../store";
import ProductCard from "../../components/item/ProductCard";

export default async function ProductList() {
    const items = await fetch("http:/toprate.test/api/v1/items", {cache: "force-cache"})
        .then((res) => res.json())
        .then((response) => response.data);

    console.log(items)
    // ✅ Dispatch items to Redux store
    store.dispatch(setItems(items));

    return (
        <div>
            <h2>Products</h2>
            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px"}}>
                {items.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
}