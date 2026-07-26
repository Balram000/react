import ItemList from "./ItemList";
import { navLinks } from "../data/catalog";

function Navbar() {
  return (
    <nav>
      <h1>🛒 MyShop</h1>

      <ItemList items={navLinks} />
    </nav>
  );
}

export default Navbar;
