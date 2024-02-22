import React from "react";
import Hero from "../features/home/components/Hero";
import LogoList from "../features/home/components/LogoList";
import ProductFeed from "../features/home/components/ProductFeed";

function HomePage() {
  return (
    <div className="pb-52 pt-20">
      <Hero />
      <LogoList />
      <ProductFeed />
    </div>
  );
}

export default HomePage;
