import { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";

const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const productPromise = getProducts();

function App() {
  const [activeTab, setActiveTab] = useState("product");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar carts={carts} />
      <Banner></Banner>
      <Stats></Stats>

      <div className="py-30 px-6 lg:px-0">
        <div className="text-center space-y-4 pb-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#101727]">
            Premium Digital Tools
          </h2>
          <p className="text-[#627382] text-[1rem] leading-5">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>
        <div className="flex justify-center pb-10">
          <div className="border border-[#F6F6F6] p-1 rounded-full flex">
            <button
              onClick={() => setActiveTab("product")}
              className={`w-30 h-12.5 text-[1rem] font-medium rounded-full transition-all duration-200 cursor-pointer
        ${
          activeTab === "product"
            ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white  shadow shadow-[#6107EC]/30 hover:bg-gradient-to-l"
            : "text-[#25065D]"
        }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className={`w-30 h-12.5 text-[1rem] font-medium rounded-full transition-all duration-200 cursor-pointer
        ${
          activeTab === "cart"
            ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white  shadow shadow-[#6107EC]/30 hover:bg-gradient-to-l"
            : "text-[#25065D]"
        }`}
            >
              Cart ({carts.length})
            </button>
          </div>
        </div>
        {activeTab === "product" && (
          <Products
            productPromise={productPromise}
            carts={carts}
            setCarts={setCarts}
          />
        )}

        {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}
      </div>

      <Steps></Steps>
      <Pricing></Pricing>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
