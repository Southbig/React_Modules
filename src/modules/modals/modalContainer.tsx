import { useModalData } from "../../hooks/modal/useModalData";
import { useModal } from "../../hooks/modal/useModal";
import Modal from "./modal";


const ModalContainer = () => {
  const {modalDataList} = useModalData();
  const {findModalcontent} = useModal();

  console.log('findModalcontent', findModalcontent)

  // const sendModalDataList = modalDataList.map((data) => (
  //   <div key={data.title}>
      

  //     <Modal isBackgroundclose={data.isBackgroundClose} component={data} />
      
  //   </div>
  // ))

  const sendModalDataList = modalDataList.filter(data => findModalcontent(data.title)).map(data => (
        <div key={data.title}>
      

      <Modal isBackgroundclose={data.isBackgroundClose} component={data} />
      
    </div>
  ))

  console.log('sendModalDataList', sendModalDataList)
  return (
    <>
    {sendModalDataList}
    </>
  );
};

export default ModalContainer;