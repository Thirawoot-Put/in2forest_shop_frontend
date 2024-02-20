import React from "react";
import DetailBox from "./DetailBox";
import Button from "../../../components/Button";
import { FaEdit } from "react-icons/fa";
import useAuth from "../../../hooks/use-auth";

function UserInformation({ userProfile, onClickEdit }) {
  const { firstName, lastName, email, mobile } = userProfile;
  return (
    <>
      <div className="flex items-center gap-2">
        <h1 className="font-bold text-2xl">Your profile</h1>
        <button className="text-gray-400" onClick={onClickEdit}>
          <FaEdit />
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <DetailBox title="Name" content={`${firstName} ${lastName}`} />
        <DetailBox title="Email address" content={email} />
        <DetailBox title="Mobile number" content={mobile} />
      </div>
    </>
  );
}

export default UserInformation;
