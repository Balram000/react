import ItemList from "./ItemList";
import { categories } from "../data/catalog";

function Categories() {
  return (
    <section>
      <h2>Categories</h2>

      <ItemList items={categories} />
    </section>
  );
}

export default Categories;
