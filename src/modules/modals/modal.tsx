import { IModal } from "../../interface/modal";
import { useModal } from "../../hooks/modal/useModal";
import { styled } from "styled-components";
import { rgba } from "emotion-rgba";
import color from "../../config/utils/color_paette";

type Props = {
  isBackgroundclose: boolean | undefined;
  component:IModal,
}

const Modal = ({isBackgroundclose, component}: Props) => {
  const {addModal, removeModal} = useModal()

  const handleCancel = () => {
    removeModal()
  }
  const handleConfirm = () => {
    removeModal()
  }
  const handleBackgroundClose = () => {
    isBackgroundclose ? removeModal() : null
  }
  return (
    <ModalBackground onClick={() => handleBackgroundClose()}>
      <ModalContainer>
      <div>Modal !</div>
      <component.component/>
      </ModalContainer>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: ${rgba(color.WarmBlack900, 0.6)};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContainer = styled.div`
  width: 460px;
  background-color: ${color.BlueGray100};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Modal;