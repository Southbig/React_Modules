import { IModal } from "../../interface/modal"
import TestModal from "../../modules/modals/testModal"

export const useModalData = () => {
  const modalData: IModal[] = [
    {
      title: 'testModal',
      component: TestModal,
      isBackgroundClose: true,
    }
  ]

  const modalDataList = modalData.map((data) => {
    return data
  })


  return {
    modalDataList,
  }
}