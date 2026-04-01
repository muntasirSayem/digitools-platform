function Footer() {
  return (
    <div className="bg-[#101727] pt-30 pb-7.5 px-6 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 max-w-300 mx-auto mb-20">
        <div className="space-y-4 col-span-2">
          <h1 className="font-extrabold text-[2.5rem] text-white">DigiTools</h1>
          <p className="text-[1rem] leading-6 text-white/80">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <ul className="space-y-4">
          <li className="text-[1.25rem] font-bold text-white">
            <a href="">Product</a>
          </li>
          <li className="text-[1rem] text-white/80 hover:underline">
            <a href="">Features</a>
          </li>
          <li className="text-[1rem] text-white/80 hover:underline">
            <a href="">Pricing</a>
          </li>
          <li className="text-[1rem] text-white/80 hover:underline">
            <a href="">Templates</a>
          </li>
          <li className="text-[1rem] text-white/80 hover:underline">
            <a href="">Integrations</a>
          </li>
        </ul>
        <ul className="space-y-4">
          <li className="text-[1.25rem] font-bold text-white">
            <a href="">Company</a>
          </li>
          <li className="text-[1rem] text-white/80 hover:underline">
            <a href="">About</a>
          </li>
          <li className="text-[1rem] text-white/80 hover:underline">
            <a href="">Blog</a>
          </li>
          <li className="text-[1rem] text-white/80 hover:underline">
            <a href="">Careers</a>
          </li>
          <li className="text-[1rem] text-white/80 hover:underline">
            <a href="">Press</a>
          </li>
        </ul>
        <ul className="space-y-4">
          <li className="text-[1.25rem] font-bold text-white">
            <a href="">Resources</a>
          </li>
          <li className="text-[1rem] text-white/80 hover:underline">
            <a href="">Documentation</a>
          </li>
          <li className="text-[1rem] text-white/80 hover:underline">
            <a href="">Help Center</a>
          </li>
          <li className="text-[1rem] text-white/80 hover:underline">
            <a href="">Community</a>
          </li>
          <li className="text-[1rem] text-white/80 hover:underline">
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="space-y-4">
          <h4 className="text-[1.25rem] font-bold text-white">Social Links</h4>
          <div className="flex items-center gap-3">
            <a className="hover:brightness-90" href="">
              <img src="/images/Instagram.png" alt="Instagram" />
            </a>
            <a className="hover:brightness-90" href="">
              <img src="/images/Facebook.png" alt="Facebook" />
            </a>
            <a className="hover:brightness-90" href="">
              <img src="/images/Twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      <hr className="max-w-300 mx-auto text-[#E5E7EB]/20 mb-7.5" />
      <div className="flex justify-between flex-col-reverse lg:flex-row gap-4 lg:gap-0 text-center lg:text-left text-[#FAFAFA]/50 max-w-300 mx-auto">
        <p className="text-[1rem] leading-6 whitespace-nowrap">
          &copy; 2026 Digitools. All rights reserved.
        </p>
        <ul className="flex whitespace-nowrap justify-center gap-4 sm:gap-10 text-[1rem]">
          <li className="hover:underline">
            <a href="">Privacy Policy</a>
          </li>
          <li className="hover:underline">
            <a href="">Terms of Service</a>
          </li>
          <li className="hover:underline">
            <a href="">Cookies</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
