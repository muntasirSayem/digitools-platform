function Navbar({ carts }) {
  return (
    <div className="py-4 border-b border-b-[#F2F2F2]">
      <div className="navbar max-w-300 mx-auto flex flex-col md:flex-row gap-2 md:gap-0 justify-between">
        <div>
          <h1 className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-extrabold text-[2.5rem]">
            DigiTools
          </h1>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 text-[1rem] font-semibold">
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <a
            id="cart-icon"
            className="relative hover:bg-gray-100 p-1.5 rounded-full"
            href=""
          >
            <img src="/images/products/shopping-cart.png" alt="" />
            <div className="absolute top-0 right-0 bg-orange-500 w-3 h-3 flex items-center justify-center rounded-full">
              <span className="text-[0.5rem] font-bold text-white">
                {carts.length}
              </span>
            </div>
          </a>
          <a
            className="text-[1rem] font-semibold cursor-pointer hover:bg-gray-200 p-1.5 rounded"
            href=""
          >
            Login
          </a>
          <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white text-[1rem] font-semibold px-4 py-6 hover:bg-gradient-to-l">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
