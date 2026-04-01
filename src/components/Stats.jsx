function Stats() {
  return (
    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-15">
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-300 mx-auto gap-15 md:gap-0">
        <div className="text-center space-y-0 md:space-y-3 text-white">
          <h1 className="text-[3.75rem] font-extrabold">50K+</h1>
          <p className="text-[1.5rem] font-medium">Active Users</p>
        </div>
        <div className="flex items-center mx-auto">
          <div class="hidden lg:block h-20 w-0.5 bg-gray-400"></div>
          <div className="text-center space-y-0 md:space-y-3 text-white px-15 sm:px-25 md:px-20 lg:px30">
            <h1 className="text-[3.75rem] font-extrabold">200+</h1>
            <p className="text-[1.5rem] font-medium whitespace-nowrap">
              Premium Tools
            </p>
          </div>
          <div class="hidden lg:block h-20 w-0.5 bg-gray-400"></div>
        </div>
        <div className="text-center space-y-0 md:space-y-3 text-white md:justify-self-center">
          <h1 className="text-[3.75rem] font-extrabold">4.9</h1>
          <p className="text-[1.5rem] font-medium">Rating</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
