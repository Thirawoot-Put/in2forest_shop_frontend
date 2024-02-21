import React from "react";
import LogoListImg from "./LogoListImg";

function LogoList() {
  return (
    <div className="flex justify-center items-center bg-gray-300 px-16 py-4">
      <LogoListImg src="/src/assets/pic/homepage/tnf-logo.png" alt="tnf-logo" />
      <LogoListImg
        src="/src/assets/pic/homepage/patagonia-logo.png"
        alt="patagonia-logo"
      />
      <LogoListImg
        src="/src/assets/pic/homepage/gramicci-logo.png"
        alt="gramicci-logo"
      />
      <LogoListImg
        src="/src/assets/pic/homepage/carhartt-logo.png"
        alt="carhartt-logo"
      />
      <LogoListImg
        src="/src/assets/pic/homepage/quicksilver-logo.png"
        alt="quicksilver-logo"
      />
      <LogoListImg
        src="/src/assets/pic/homepage/columbia-logo.png"
        alt="columbia-logo"
      />
    </div>
  );
}

export default LogoList;
