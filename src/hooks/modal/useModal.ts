import { useState, useEffect } from "react"
import { UModals } from "../../interface/modal"


export const  useModal = () => {
  const [activeModal, setActiveModal] = useState<UModals[]>([])

  const addModal = (modal: UModals) => {
    setActiveModal(prve => [... prve, modal])
  }

  const removeModal = () => {
    const newData = [...activeModal]

    newData.pop()
    setActiveModal(newData)
  }

  const findModalcontent = (text: UModals) => {
    console.log('findModalcontent text', text)
    return (
      activeModal.some((data) => data === text)
    )
  }

  console.log('activeModal', activeModal)


  return {
    activeModal,
    findModalcontent,
    addModal,
    removeModal
  }
}