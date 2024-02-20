import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";
import useAuth from "../../../hooks/use-auth";
import * as userApi from "../../../api/user";
import { toast } from "react-toastify";
import { useEffect } from "react";
import LoadingBar from "../../../components/LoadingBar";

function AddAddressForm({ onClose, loading, setLoading }) {
  const [input, setInput] = useState({});

  const { authUser } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const data = { ...input, userId: authUser.id };
      const result = await userApi.addNewAddress(data);
      toast.success("Add new address success");
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {}, [loading]);

  return (
    <>
      {loading && <LoadingBar />}
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <h1 className="font-semibold text-2xl text-center">
          Add receiver address
        </h1>
        <div className="flex flex-col gap-2 pb-2">
          <div className="flex gap-2">
            <div>
              <Input
                title="First name"
                onChange={handleChangeInput}
                name="receiverFirstName"
              />
            </div>
            <div>
              <Input
                title="Last name"
                onChange={handleChangeInput}
                name="receiverLastName"
              />
            </div>
          </div>
          <Input
            title="Address detail"
            onChange={handleChangeInput}
            name="addressDetail"
          />
          <div className="flex gap-2">
            <div>
              <Input
                title="Subdistrict"
                onChange={handleChangeInput}
                name="subdistrict"
              />
            </div>
            <div>
              <Input
                title="District"
                onChange={handleChangeInput}
                name="district"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <Input
                title="Province"
                onChange={handleChangeInput}
                name="province"
              />
            </div>
            <div>
              <Input
                title="Zip code"
                onChange={handleChangeInput}
                name="zipCode"
              />
            </div>
          </div>
          <Input
            title="Mobile number"
            onChange={handleChangeInput}
            name="receiverMobile"
          />
        </div>
        <Button type="submit">Save</Button>
      </form>
    </>
  );
}

export default AddAddressForm;
