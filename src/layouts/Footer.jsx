function Footer() {
  return (
    <footer className="bg-[#f0f0f0] h-64 flex flex-col items-center justify-center gap-10">
      <div className="text-center flex flex-col gap-2">
        <h1 className="font-bold text-2xl">IN2FOREST SHOP</h1>
        <p className="w-80 text-sm font-light text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis
          elit, pretium Donec turpis elit, pretium Donec turpis elit, pretium
          nec ante eget
        </p>
      </div>
      <div className="flex flex-col w-full px-20 gap-2">
        <div className="flex justify-center gap-6">
          <img
            className="w-5"
            src="/src/assets/facebook-logo.png"
            alt="fb-logo"
          />
          <img
            className="w-5"
            src="/src/assets/instagram-logo.png"
            alt="ig-logo"
          />
          <img
            className="w-5"
            src="/src/assets/line-logo.png"
            alt="line-logo"
          />
        </div>
        <hr className="border-gray-300" />
        <p className="text-center text-xs text-gray-600 font-light">
          in2forest shop &#169; 2021 - 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;
