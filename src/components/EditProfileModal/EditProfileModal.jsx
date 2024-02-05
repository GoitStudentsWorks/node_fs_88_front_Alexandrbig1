import { useEffect } from "react";
import {
  AvatarModal,
  BtnClose,
  StyledModal,
  TitleModalText,
} from "./EditProfileModal.styled";
import ProfileForm from "../EditProfileForm/EditProfileForm";

export default function EditProfileModal({ toggleModal }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [toggleModal]);

  const handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return (
    <>
      <StyledModal onClick={handleOverlayClick}>
        <AvatarModal>
          <BtnClose onClick={toggleModal} className="btnClose" />
          <TitleModalText>Edit Profile</TitleModalText>
          <ProfileForm />
        </AvatarModal>
      </StyledModal>
    </>
  );
}
