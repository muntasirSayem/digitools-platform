function Steps() {
  return (
    <div className="bg-[#F9FAFC] py-30 px-6 lg:px-0">
      <div className="max-w-300 mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101727] mb-4">
            Get Started in 3 Steps
          </h1>
          <p className="text-[1rem] leading-5 text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7.5">
          <div className="bg-white p-6 border-2 border-[#F1F1F1] rounded-2xl">
            <div className="flex justify-end">
              <div className="flex items-center justify-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full h-10 w-10">
                <p className="text-white font-bold text-[0.875rem]">01</p>
              </div>
            </div>
            <div className="space-y-4 pt-7 pb-16">
              <div className="p-5 bg-[#F9FAFC] rounded-full w-25 mx-auto">
                <img src="/images/user.png" alt="" />
              </div>
              <h3 className="text-center font-bold text-[#101727] text-[1.5rem]">
                Create Account
              </h3>
              <p className="text-center text-[1rem] leading-5 text-[#627382]">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 border-2 border-[#F1F1F1] rounded-2xl">
            <div className="flex justify-end">
              <div className="flex items-center justify-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full h-10 w-10">
                <p className="text-white font-bold text-[0.875rem]">02</p>
              </div>
            </div>
            <div className="space-y-4 pt-7 pb-16">
              <div className="p-5 bg-[#F9FAFC] rounded-full w-25 mx-auto">
                <img src="/images/package.png" alt="" />
              </div>
              <h3 className="text-center font-bold text-[#101727] text-[1.5rem]">
                Choose Products
              </h3>
              <p className="text-center text-[1rem] leading-5 text-[#627382]">
                Browse our catalog and select the toolsthat fit your needs.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 border-2 border-[#F1F1F1] rounded-2xl">
            <div className="flex justify-end">
              <div className="flex items-center justify-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full h-10 w-10">
                <p className="text-white font-bold text-[0.875rem]">03</p>
              </div>
            </div>
            <div className="space-y-4 pt-7 pb-16">
              <div className="p-5 bg-[#F9FAFC] rounded-full w-25 mx-auto">
                <img src="/images/rocket.png" alt="" />
              </div>
              <h3 className="text-center font-bold text-[#101727] text-[1.5rem]">
                Start Creating
              </h3>
              <p className="text-center text-[1rem] leading-5 text-[#627382]">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
