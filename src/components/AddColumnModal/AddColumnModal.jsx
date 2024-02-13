import { useEffect } from "react";
import PropTypes from "prop-types";
import { CardButton } from "../CardButton/CardButton";
import "react-toastify/dist/ReactToastify.css";
import {
  AddModalWrap,
  StyledAddModal,
  AddColumnModalBtn,
  CloseAddColumnModal,
  AddColumnTitle,
  AddColumnForm,
  AddColumnInput,
} from "../AddColumnModal/AddColumnModal.styled";

const AddColumnModal = ({ openColumnModal, onSubmitColumnClick }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        openColumnModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [openColumnModal]);

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      openColumnModal();
    }
  };

  return (
    <AddModalWrap onClick={handleModalClick}>
      <StyledAddModal className="modal">
        <AddColumnModalBtn onClick={openColumnModal} type="button">
          <CloseAddColumnModal />
        </AddColumnModalBtn>
        <div>
          <AddColumnTitle>Add column</AddColumnTitle>
          <AddColumnForm onSubmit={onSubmitColumnClick}>
            <AddColumnInput
              autoFocus
              type="text"
              placeholder="Title"
              name="title"
              maxLength={25}
            />
            <CardButton type="submit" btnText="Add" />
          </AddColumnForm>
        </div>
      </StyledAddModal>
    </AddModalWrap>
  );
};

export default AddColumnModal;

AddColumnModal.propTypes = {
  openColumnModal: PropTypes.func.isRequired,
  onSubmitColumnClick: PropTypes.func.isRequired,
};
