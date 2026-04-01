import { use } from "react";
import ProductCard from "./ProductCard";

const Products = ({ productPromise, carts, setCarts }) => {
  const products = use(productPromise);

  return (
    <div className="max-w-300 mx-auto">
      <div className="grid  md:grid-cols-2  lg:grid-cols-3 gap-7.5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            carts={carts}
            setCarts={setCarts}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
