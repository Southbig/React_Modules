import styled from "styled-components";
import { useModal } from "../hooks/modal/useModal";

const ModaltestPage = () => {
  const {addModal} = useModal()

  const handleModal = () => {
    console.log('modal')
    addModal('testModal')
  }
  return (
    <div>
      <Modal onClick={handleModal}>Modal !</Modal>
    </div>
  );
};

const Modal = styled.button`
  
`

export default ModaltestPage;