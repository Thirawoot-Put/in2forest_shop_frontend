import React from "react";
import UserInformation from "../features/user/components/UserInformation";
import { useState } from "react";
import UserInfoForm from "../components/UserInfoForm";
import useUser from "../hooks/use-user";
import { useEffect } from "react";
import LoadingBar from "../components/LoadingBar";
import * as authApi from "../api/auth";

function ProfileInfoPage() {
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState({});

  const { handleChangeInput, submitEditProfile } = useUser();

  const handleClickEdit = (e) => {
    setIsEdit(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await submitEditProfile();
    } catch (error) {
      console.log(error);
    } finally {
      setIsEdit(false);
    }
  };

  useEffect(() => {
    authApi
      .getMe()
      .then((res) => {
        setUserProfile(res.data.user);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [loading]);

  return (
    <>
      {loading && <LoadingBar />}
      <div className="flex justify-center items-center py-8">
        <div className="min-h-80 flex flex-col justify-between">
          {isEdit ? (
            <UserInfoForm
              formName="Edit profile"
              btnName="Save"
              onChange={handleChangeInput}
              onSubmit={handleSubmit}
            />
          ) : (
            <UserInformation
              userProfile={userProfile}
              onClickEdit={handleClickEdit}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ProfileInfoPage;
