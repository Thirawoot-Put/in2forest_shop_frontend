import React from "react";

import ProductCardHorizontal from "../../../components/ProductCardHorizontal";
import { MdEdit } from "react-icons/md";
import { HiTrash } from "react-icons/hi2";
import useAdmin from "../../../hooks/use-admin";
import Modal from "../../../components/Modal";
import ProductForm from "../../../components/ProductForm";
import { useState } from "react";
import * as adminApi from "../../../api/admin";
import * as productApi from "../../../api/product";
import LoadingBar from "../../../components/LoadingBar";
import { useEffect } from "react";
import appendDataWithImage from "../../../utils/appendDataWithImage";
import { toast } from "react-toastify";
import validateEditProduct from "../../auth/validations/validate-edit-product";

function AdminProductCard() {
  const { entireProduct, getAllProduct, setEntireProduct } = useAdmin();
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    try {
      setLoading(true);
      getAllProduct();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleDeleteProduct = async (productId) => {
    try {
      setLoading(true);
      const {
        data: { deletedProduct },
      } = await adminApi.deleteProduct(productId);
      const updateArr = entireProduct.filter(
        (el) => el.id !== deletedProduct.id
      );
      setEntireProduct(updateArr);
      toast.error("Delete product success");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickEdit = async (id, e) => {
    const {
      data: { productById },
    } = await productApi.getProductById(id);
    // delete productById.mainImage
    productById.mainImage = "";
    setUpdateData(productById);
    setOpen(true);
  };

  const handleChange = (e) => {
    if (e.target.name === "mainImage") {
      setUpdateData({ ...updateData, mainImage: e.target.files[0] });
    } else {
      setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    }
    setError({});
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const valError = validateEditProduct(updateData);
      if (valError) {
        setError(valError);
      }
      if (!valError) {
        console.log(valError);
        setLoading(true);
        const formData = new FormData();
        appendDataWithImage(formData, updateData);
        await adminApi.editProductById(updateData.id, formData);
        const {
          data: { productById },
        } = await productApi.getProductById(updateData.id);
        const updateArr = entireProduct.filter((el) => el.id !== updateData.id);
        updateArr.unshift(productById);
        setEntireProduct(updateArr);
        handleCloseModal();
        toast.success("Edit product success");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <LoadingBar />
      ) : (
        <div>
          {entireProduct.map((data) => (
            <ProductCardHorizontal key={data.id} data={data}>
              <button
                className="text-xl text-gray-800"
                onClick={(e) => handleClickEdit(data.id)}
              >
                <MdEdit />
              </button>
              <button
                className="text-xl text-red-500"
                onClick={(e) => handleDeleteProduct(data.id)}
              >
                <HiTrash />
              </button>
            </ProductCardHorizontal>
          ))}
          {open && (
            <Modal onClose={handleCloseModal}>
              <ProductForm
                title="Edit product"
                onSubmit={handleSubmit}
                onChange={handleChange}
                data={updateData}
                error={error}
              />
            </Modal>
          )}
        </div>
      )}
    </div>
  );
}

export default AdminProductCard;
