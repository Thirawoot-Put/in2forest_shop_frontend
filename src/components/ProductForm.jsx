import React from "react";
import Input from "./Input";
import SelectTypes from "../features/admin/components/SelectTypes";
import Button from "./Button";

function ProductForm({ title, onSubmit, onChange, data, error }) {
  return (
    <form
      className="flex flex-col items-center py-2"
      encType="multipart/form-data"
      onSubmit={onSubmit}
    >
      <h1 className="font-semibold text-2xl pb-5">{title}</h1>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4">
          <div>
            <Input
              title="Product name"
              name="productName"
              onChange={onChange}
              value={data.productName}
              errorMsg={error?.productName}
            />
          </div>
          <div>
            <Input
              title="Size"
              name="size"
              onChange={onChange}
              value={data.size}
              errorMsg={error?.size}
            />
          </div>
        </div>
        <Input
          title="Product detail"
          name="productDetail"
          width="w-full"
          onChange={onChange}
          value={data.productDetail}
          errorMsg={error?.productDetail}
        />
        <Input
          title="Defect"
          name="defect"
          width="w-full"
          onChange={onChange}
          value={data.defect}
          errorMsg={error?.defect}
        />
        <Input
          title="Price"
          name="price"
          width="w-full"
          onChange={onChange}
          value={data.price}
          errorMsg={error?.price}
        />
        <SelectTypes
          onChange={onChange}
          data={data}
          errorMsg={error?.productTypeId}
        />
        <div className="pt-6">
          <Input
            type="file"
            name="mainImage"
            width="w-full"
            onChange={onChange}
            errorMsg={error?.mainImage}
          />
        </div>
        <div className="pt-10">
          <Button color="primary" type="submit">
            Save
          </Button>
        </div>
      </div>
    </form>
  );
}

export default ProductForm;
