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

function AdminProductCard() {
  const { entireProduct, getAllProduct } = useAdmin();
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState({});

  useEffect(() => {
    getAllProduct();
  }, [loading]);

  const handleDeleteProduct = async (productId) => {
    try {
      setLoading(true);
      await adminApi.deleteProduct(productId);
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
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      appendDataWithImage(formData, updateData);
      await adminApi.editProductById(updateData.id, formData);
      handleCloseModal();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <LoadingBar />}
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
            />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default AdminProductCard;
