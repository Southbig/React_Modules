import styled from "styled-components";
import { useModal } from "../hooks/modal/useModal";

import ModalContainer from "../modules/modals/modalContainer";

const ModaltestPage = () => {
  const {addModal} = useModal()

  const handleModal = async () => {
    console.log('modal')
    addModal('testModal')
  }
  return (
    <div>
      <Modal onClick={handleModal}>Modal Page</Modal>
      <ModalContainer/>
    </div>
  );
};

const Modal = styled.button`
  
`

export default ModaltestPage;