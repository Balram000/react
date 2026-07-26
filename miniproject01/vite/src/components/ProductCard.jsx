function ProductCard({ name, price, image = "https://via.placeholder.com/150" }) {
  return (
    <div>
      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>{price}</p>

      <button>Buy Now</button>
    </div>
  );
}

export default ProductCard;
