function Footer() {
  return (
    <footer className="bg-[#f0f0f0] h-40 flex flex-col items-center justify-center gap-2 fixed bottom-0 w-full">
      <div className="text-center flex flex-col gap-2">
        <h1 className="font-bold text-2xl">IN2FOREST SHOP</h1>
        <p className="w-80 text-sm font-light text-gray-600">
          In2Forest shop, Good value for second hand outdoor gears are here!
          Let's shop and explore the world
        </p>
      </div>
      <div className="flex flex-col w-full px-20 gap-2">
        <div className="flex justify-center gap-6">
          <img
            className="w-5"
            src="/src/assets/pic/header-footer/facebook-logo.png"
            alt="fb-logo"
          />
          <img
            className="w-5"
            src="/src/assets/pic/header-footer/instagram-logo.png"
            alt="ig-logo"
          />
          <img
            className="w-5"
            src="/src/assets/pic/header-footer/line-logo.png"
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
