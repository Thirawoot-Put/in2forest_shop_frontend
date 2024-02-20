import React from "react";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useProduct from "../hooks/use-product";
import useAuth from "../hooks/use-auth";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/use-cart";

function ProductDetailPage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { authUser } = useAuth();
  const { addToCart } = useCart();
  const { getProductById, productObj } = useProduct();

  const handleClick = async (e) => {
    try {
      const productTarget = {
        userId: authUser.id,
        productId: productObj.id,
        productName: productObj.productName,
        productPrice: productObj.price,
      };
      await addToCart(productTarget);
      navigate("/");
    } catch (err) {
      console.log(err.response?.data.message);
    }
  };

  useEffect(() => {
    getProductById(productId);
  }, []);

  return (
    <div className="flex justify-center items-center w-full py-10">
      <div className="flex w-10/12 px-20 gap-32">
        <div className="bg-[#D9D9D9] flex flex-1 justify-center items-center aspect-square rounded-md">
          <img
            className="object-cover"
            src={productObj.mainImage || "/src/assets/default-img.png"}
            alt="product_image"
          />
        </div>
        <div className="flex flex-col flex-1 gap-6 text-lg">
          <h1 className="font-bold text-3xl">
            {productObj.id} {productObj.productName}
          </h1>
          <p>{productObj.productDetail}</p>
          <p>Size: {productObj.size}</p>
          <p>defect: {productObj.defect}</p>
          <p className="rounded-full bg-[#D9D9D9] w-64 py-2 px-4">
            Price: THB {productObj.price}
          </p>
          {authUser?.role !== "ADMIN" && (
            <Button onClick={handleClick}>Add to cart</Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
