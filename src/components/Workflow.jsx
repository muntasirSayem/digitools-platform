function Workflow() {
  return (
    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-30 px-6 lg:px-0">
      <div className="max-w-300 mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-[2.5rem] font-extrabold mb-4">
            Ready to Transform Your Workflow?
          </h1>
          <p className="text-[1rem] leading-6">
            Join thousands of professionals who are already using Digitools to
            work smarter.
            <br />
            Start your free trial today.
          </p>
        </div>
        <div className="flex justify-center flex-col sm:flex-row mx-auto gap-4 mb-4">
          <button className="btn shadow-none bg-white rounded-full text-white text-[1rem] font-bold px-4 py-6 hover:bg-[#F9FAFC]">
            <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Explore Products
            </span>
          </button>
          <button className="btn shadow-none bg-transparent border-white rounded-full text-white text-[1rem] font-semibold px-9 py-6 hover:brightness-90">
            View Pricing
          </button>
        </div>
        <p className="text-center text-[1rem] leading-5">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
}

export default Workflow;
