function Pricing() {
  return (
    <div className="max-w-300 mx-auto py-30 px-6 lg:px-0">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101727] mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-[1rem] leading-5 text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7.5">
        <div className="bg-[#F9FAFC] border-2 border-[#F2F2F2] rounded-2xl p-6">
          <h3 className="font-bold text-[#101727] text-[1.5rem] mb-2">
            Starter
          </h3>
          <p className="text-[1rem] leading-5 text-[#627382] mb-6">
            Perfect for getting started
          </p>
          <p className="text-[#101727] text-[2.5rem] font-bold mb-6">
            $0
            <span className="text-[1.25rem] text-[#627382] font-normal">
              /month
            </span>
          </p>
          <ul className="space-y-2 mb-20">
            <li className="flex items-center gap-2">
              <img src="/images/products/Check.png" alt="" />
              <span className="text-[1rem] leading-5 text-[#627382] font-medium">
                Access to 10 free tools
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src="/images/products/Check.png" alt="" />
              <span className="text-[1rem] leading-5 text-[#627382] font-medium">
                Basic templates
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src="/images/products/Check.png" alt="" />
              <span className="text-[1rem] leading-5 text-[#627382] font-medium">
                Community support
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src="/images/products/Check.png" alt="" />
              <span className="text-[1rem] leading-5 text-[#627382] font-medium">
                1 project per month
              </span>
            </li>
          </ul>
          <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white text-[1rem] font-bold w-full py-6 hover:bg-gradient-to-l">
            Get Started Free
          </button>
        </div>

        <div className="relative bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-2 border-[#F2F2F2] rounded-2xl text-white p-6">
          <button className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 text-[0.875rem] text-[#BB4D00] font-medium bg-[#FEF3C6] rounded-full px-3 py-1.5">
            Most Popular
          </button>
          <h3 className="font-bold text-[1.5rem] mb-2">Pro</h3>
          <p className="text-[1rem] leading-5 mb-6">Best for professionals</p>
          <p className="text-[2.5rem] font-bold mb-6">
            $29
            <span className="text-[1.25rem] font-normal">/month</span>
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <img src="/images/products/Check.png" alt="" />
              <span className="text-[1rem] leading-5 font-medium">
                Access to all premium tools
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src="/images/products/Check.png" alt="" />
              <span className="text-[1rem] leading-5 font-medium">
                Unlimited templates
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src="/images/products/Check.png" alt="" />
              <span className="text-[1rem] leading-5 font-medium">
                Priority support
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src="/images/products/Check.png" alt="" />
              <span className="text-[1rem] leading-5 font-medium">
                Unlimited projects
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src="/images/products/Check.png" alt="" />
              <span className="text-[1rem] leading-5 font-medium">
                Cloud sync
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src="/images/products/Check.png" alt="" />
              <span className="text-[1rem] leading-5 font-medium">
                Advanced analytics
              </span>
            </li>
          </ul>
          <button className="btn shadow-none bg-white rounded-full text-white text-[1rem] font-bold w-full py-6 hover:bg-[#F9FAFC]">
            <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Start Pro Trial
            </span>
          </button>
        </div>

        <div className="bg-[#F9FAFC] border-2 border-[#F2F2F2] rounded-2xl p-6">
          <h3 className="font-bold text-[#101727] text-[1.5rem] mb-2">
            Enterprise
          </h3>
          <p className="text-[1rem] leading-5 text-[#627382] mb-6">
            For teams and businesses
          </p>
          <p className="text-[#101727] text-[2.5rem] font-bold mb-6">
            $99
            <span className="text-[1.25rem] text-[#627382] font-normal">
              /month
            </span>
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <img src="/images/products/Check.png" alt="" />
              <span className="text-[1rem] leading-5 text-[#627382] font-medium">
                Everything in Pro
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src="/images/products/Check.png" alt="" />
              <span className="text-[1rem] leading-5 text-[#627382] font-medium">
                Team collaboration
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src="/images/products/Check.png" alt="" />
              <span className="text-[1rem] leading-5 text-[#627382] font-medium">
                Custom integrations
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src="/images/products/Check.png" alt="" />
              <span className="text-[1rem] leading-5 text-[#627382] font-medium">
                Dedicated support
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src="/images/products/Check.png" alt="" />
              <span className="text-[1rem] leading-5 text-[#627382] font-medium">
                SLA guarantee
              </span>
            </li>
            <li className="flex items-center gap-2">
              <img src="/images/products/Check.png" alt="" />
              <span className="text-[1rem] leading-5 text-[#627382] font-medium">
                Custom branding
              </span>
            </li>
          </ul>
          <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white text-[1rem] font-bold w-full py-6 hover:bg-gradient-to-l">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
