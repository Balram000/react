import ProductCard from "./ProductCard";
import { products } from "../data/catalog";

function ProductList() {
  return (
    <section>
      <h2>Featured Products</h2>

      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
}

export default ProductList;
