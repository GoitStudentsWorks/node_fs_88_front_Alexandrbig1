import {
  BackDrop,
  Modal,
  CloseIcon,
  ModalContainer,
  Title,
} from "./AddCardModal.styled";
import { AddCardForm } from "../AddCardForm/AddCardForm";

export const AddCardModal = ({ onClose }) => {
  return (
    <BackDrop>
      <Modal>
        <ModalContainer>
          <CloseIcon onClick={onClose} />
          <Title>Add card</Title>
          <AddCardForm />
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};
