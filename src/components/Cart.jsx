import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment successful!");
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((cart) => cart.id !== item.id);
    setCarts(filteredArray);

    toast.success("Item deleted!");
  };

  return (
    <div className="bg-[#FFFFFF] border-2 border-[#F2F2F2] rounded-2xl p-10 max-w-300 mx-auto space-y-6">
      <h1 className="text-[#101727] text-2xl font-bold">Your Cart</h1>

      {carts.length === 0 ? (
        <div className="mx-auto py-10">
          <img
            className="max-w-30 md:max-w-50 mx-auto"
            src="/images/empty-cart.png"
            alt=""
          />
          <p className="text-center text-[#627382]/60 text-2xl md:text-5xl whitespace-nowrap">
            Your cart is empty.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {carts.map((item) => (
              <div
                className="flex items-center flex-col sm:flex-row gap-6 sm:gap-0 sm:justify-between bg-[#F9FAFC] rounded-2xl p-5"
                key={item.id}
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center p-3.5 rounded-full bg-white border border-[#F2F2F2] ">
                    <img className="" src={item.icon} />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-[#101727] text-xl font-semibold">
                      {item.name}
                    </h2>
                    <p className="text-[#627382] text-[1rem]">${item.price}</p>
                  </div>
                </div>
                <p
                  onClick={() => handleDelete(item)}
                  className="text-[#FF3980] text-[1rem] font-bold self-end sm:self-auto cursor-pointer hover:underline"
                >
                  Remove
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <div className="text-[#627382] text-[1rem]">Total:</div>
            <div className="text-[#101727] text-2xl font-bold">
              ${totalPrice}
            </div>
          </div>

          <button
            onClick={handlePayment}
            className="btn h-12.5 w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full hover:bg-gradient-to-l"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
