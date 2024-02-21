import React from "react";

const defaultData = {
  mainImage: "/src/assets/default-img.png",
  id: "id",
  productName: "Product name",
  size: "size",
  defect: "defect",
  price: "price",
};

function ProductCardHorizontal({
  children,
  data = defaultData,
  width = "w-[44rem]",
}) {
  console.log(data.status);
  return (
    <div
      className={`${width} h-full ${
        data.status === "SOLDOUT" ? "text-red-500" : ""
      }`}
    >
      <div className="card card-side bg-base-100 border-gray-500 h-32 ">
        <div className="rounded-xl flex justify-center items-center">
          <img
            className="w-32"
            src={
              data.status === "SOLDOUT"
                ? "src/assets/pic/sample-product/sold-out.jpg"
                : data.mainImage || "/src/assets/default-img.png"
            }
            alt="main-image"
          />
        </div>
        <div className="flex items-center justify-between w-full pl-4 pr-10">
          <div>
            <h2 className="card-title">
              No. {data.id} {data.productName}
            </h2>
            <p className="text-sm text-gray-500">Size : {data.size}</p>
            <p className="text-sm text-gray-500">Defect: {data.defect}</p>
            <h2 className="card-title">THB {data.price}</h2>
          </div>
          <div className="flex flex-col gap-4">{children}</div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ProductCardHorizontal;
