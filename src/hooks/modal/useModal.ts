import { useState } from "react"
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

  console.log('activeModal', activeModal)

  return {
    addModal,
    removeModal
  }
}