function Banner() {
  return (
    <div className="max-w-300 mx-auto py-21 grid grid-cols-1 lg:grid-cols-2 gap-15 items-center px-6 lg:px-0">
      <div className="space-y-4">
        <button className="flex items-center gap-2 bg-[#E1E7FF] rounded-full px-4 py-2">
          <img src="/images/dot-icon.png" alt="" />
          <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-[0.75rem] sm:text-[1rem] font-medium">
            New: AI-Powered Tools Available
          </span>
        </button>
        <h1 className="text-[3rem] sm:text-[4.5rem] leading-15 sm:leading-21 font-extrabold text-[#101727]">
          Supercharge YourDigital Workflow
        </h1>
        <p className="text-[1.125rem] leading-5 text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white text-[1rem] font-bold px-4 py-6  hover:bg-gradient-to-l">
            Explore Products
          </button>
          <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border-[#9514FA] rounded-full text-[1rem] font-bold px-4 py-6 hover:brightness-90">
            <img src="images/Play.png" alt="" />
            Watch Demo
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <img className="w-full h-auto" src="images/banner.png" alt="" />
      </div>
    </div>
  );
}

export default Banner;
