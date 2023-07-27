import { useModalData } from "../../hooks/modal/useModalData";
import Modal from "./modal";
const ModalContainer = () => {
  const {modalDataList} = useModalData();



  const sendModalDataList = modalDataList.map((data) => (
    <div key={data.title}>
      <Modal isBackgroundclose={data.isBackgroundClose} component={data} />
    </div>
  ))
  return (
    <>
    {sendModalDataList}
    </>
  );
};

export default ModalContainer;