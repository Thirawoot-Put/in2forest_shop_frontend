import React from "react";
import { useEffect } from "react";
import useAdmin from "../../../hooks/use-admin";
import ProductForm from "../../../components/ProductForm";
import { useState } from "react";
import LoadingBar from "../../../components/LoadingBar";
import { toast } from "react-toastify";

function AddProductForm() {
  const { product, getAllTypes, handleChange, addProduct } = useAdmin();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      await addProduct();
      toast.success("Add new product success");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllTypes();
  }, [loading]);

  return (
    <>
      {loading && <LoadingBar />}
      <div className="py-8">
        <ProductForm
          title="Add new product"
          onSubmit={handleSubmit}
          onChange={handleChange}
          data={product}
        />
      </div>
    </>
  );
}

export default AddProductForm;
