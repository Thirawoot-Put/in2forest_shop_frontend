import React from "react";
import { useEffect } from "react";
import useAdmin from "../../../hooks/use-admin";
import ProductForm from "../../../components/ProductForm";
import { useState } from "react";
import LoadingBar from "../../../components/LoadingBar";
import { toast } from "react-toastify";
import validateAddProduct from "../../auth/validations/validate-add-product";

const initial = {
  productName: "",
  size: "",
  productDetail: "",
  defect: "",
  price: "",
  productTypeId: "",
  mainImage: null,
};

function AddProductForm() {
  const { addProduct } = useAdmin();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState(initial);
  const [error, setError] = useState({});

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const valError = validateAddProduct(input);
      if (valError) {
        setError(valError);
      }
      if (!valError) {
        setLoading(true);
        await addProduct(input);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setInput(initial);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "mainImage") {
      setInput({ ...input, mainImage: e.target.files[0] });
    } else {
      setInput({ ...input, [e.target.name]: e.target.value });
    }
    setError({});
  };

  console.log(error);

  return (
    <>
      {loading ? (
        <LoadingBar />
      ) : (
        <div className="py-8 pb-60 pt-20">
          <ProductForm
            title="Add new product"
            onSubmit={handleSubmit}
            onChange={handleChange}
            data={input}
            error={error}
          />
        </div>
      )}
    </>
  );
}

export default AddProductForm;
