import React from "react";
import ProductSection from "./ProductSection";
import useProduct from "../../../hooks/use-product";
import { useState } from "react";
import { useEffect } from "react";
import LoadingBar from "../../../components/LoadingBar";

function ProductAllSections() {
  const { allTypesWithProducts, getAllTypesWithProducts } = useProduct();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("render");
    try {
      setLoading(true);
      getAllTypesWithProducts();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading ? (
        <LoadingBar />
      ) : (
        <div className="bg-[#f9f9f9]">
          {allTypesWithProducts.map((el) => (
            <ProductSection key={el.id} type={el.type} products={el.products} />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductAllSections;
