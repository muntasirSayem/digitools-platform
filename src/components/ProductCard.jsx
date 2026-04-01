import { useState } from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product, carts, setCarts }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddition = () => {
    setIsAdded(true);

    const isFound = carts.find((item) => item.id === product.id);

    if (isFound) {
      toast.error("Item already in cart!");
      return;
    }

    setCarts([...carts, product]);
    toast.success("Item added to cart!");
  };

  return (
    <div className="relative rounded-2xl border-2 border-[#F2F2F2] p-6 space-y-4">
      <div className="flex justify-center items-center p-2 border border-[#F2F2F2] rounded-full w-15 h-15">
        <img className="" src={product.icon} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#101727]">{product.name}</h2>
        <p className="text-[#627382] text-[1rem] leading-5">
          {product.description}
        </p>
        <div className="text-2xl font-bold text-[#101727]">
          ${product.price}
          <span className="text-[#627382] text-[1rem] font-normal">
            /{product.period}
          </span>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <img src="/images/products/Check.png" alt="" />
            <span className="text-[1rem] leading-5 text-[#627382] font-medium">
              {product.features[0]}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/images/products/Check.png" alt="" />
            <span className="text-[1rem] leading-5 text-[#627382] font-medium">
              {product.features[1]}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/images/products/Check.png" alt="" />
            <span className="text-[1rem] leading-5 text-[#627382] font-medium">
              {product.features[2]}
            </span>
          </li>
        </ul>
        <button
          onClick={handleAddition}
          className="btn w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white text-[1rem] font-semibold px-4 py-6 hover:bg-gradient-to-l"
        >
          {isAdded ? "Added to cart" : "Buy Now"}
        </button>
        <div
          className={`absolute top-2.5 right-2.5 w-fit rounded-full font-medium text-[0.875rem] py-1.5 px-3 ${
            product.tag === "New"
              ? "bg-[#DBFCE7] text-[#0A883E]"
              : product.tag === "Popular"
                ? "bg-[#E1E7FF] text-[#9514FA]"
                : product.tag === "Best Seller"
                  ? "bg-[#FEF3C6] text-[#BB4D00]"
                  : "bg-white"
          }`}
        >
          <p>{product.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
