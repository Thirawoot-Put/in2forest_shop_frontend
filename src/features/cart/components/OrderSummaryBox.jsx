import React from "react";
import Button from "../../../components/Button";
import useCart from "../../../hooks/use-cart";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/Modal";
import { useState } from "react";
import AddAddressForm from "./AddAddressForm";
import { useEffect } from "react";
import useAuth from "../../../hooks/use-auth";
import useUser from "../../../hooks/use-user";
import * as orderApi from "../../../api/order";
import { toast } from "react-toastify";
import useOrder from "../../../hooks/use-order";
import useProduct from "../../../hooks/use-product";

function OrderSummaryBox() {
  const navigate = useNavigate();

  const { getAllTypesWithProducts } = useProduct();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(0);
  const { authUser } = useAuth();
  const { productsInUserCart, subTotal, isIncludeSoldOut } = useCart();
  const { allAddresses, getAllReceiveAddress } = useUser();
  const { setTargetOrder } = useOrder();

  const handleClickCheckOut = async (e) => {
    try {
      if (selectedAddress === 0) {
        toast.error("Please select receiver address before checkout");
        return;
      }
      const {
        data: { newOrder },
      } = await orderApi.createUserOrder({
        addressId: +selectedAddress,
      });
      setTargetOrder(newOrder);
      navigate("/payment");
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  const closModal = () => setOpen(false);

  const handleClickAddAddress = (e) => {
    setOpen(true);
  };

  useEffect(() => {
    getAllReceiveAddress(authUser.id);
    getAllTypesWithProducts();
  }, [loading]);

  return (
    <>
      <div className="flex flex-col items-center h-96 w-5/12 border p-4 border-black rounded-2xl justify-between">
        <h1 className="font-semibold text-xl">Order Summary</h1>
        <div className="w-full flex flex-col gap-4 text-lg">
          <div className="flex justify-between">
            <p className="text-gray-400">subTotal</p>
            <p className="font-semibold">THB {subTotal}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400">Delivery fee</p>
            <p className="font-semibold">free</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Total</p>
            <p className="font-semibold text-2xl">THB {subTotal}</p>
          </div>
        </div>
        <div className="flex w-full gap-2">
          <select
            className="select select-bordered w-full max-w-xs bg-[#F2F0F1] text-center"
            onChange={(e) => setSelectedAddress(e.target.value)}
          >
            <option disabled selected value="">
              Select receiving address
            </option>
            {allAddresses.map((el) => (
              <option key={el.id} value={el.id}>
                {el.addressDetail} {el.subdistrict} {el.district} {el.province}{" "}
                {el.zipCode} {el.receiverMobile}
              </option>
            ))}
          </select>
          <Button
            onClick={handleClickAddAddress}
            width="w-44"
            text="text-md"
            color="secondary"
          >
            Add address
          </Button>
        </div>
        <Button color="secondary" onClick={() => navigate("/")}>
          Continue shopping
        </Button>
        {isIncludeSoldOut ? (
          <h1 className="border border-red-500 p-1 bg-red-200 rounded-lg text-center">
            There are sold out product in your cart, may be another user has
            checkout before your, please it remove before checkout.
          </h1>
        ) : (
          <Button onClick={handleClickCheckOut}>Check out</Button>
        )}
      </div>
      {open && (
        <Modal onClose={closModal}>
          <AddAddressForm
            onClose={closModal}
            loading={loading}
            setLoading={setLoading}
          />
        </Modal>
      )}
    </>
  );
}

export default OrderSummaryBox;
