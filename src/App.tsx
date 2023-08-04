import styled from 'styled-components'
import ModaltestPage from './pages/modaltestPage'

import ModalContainer from './modules/modals/modalContainer'
import { useModal } from './hooks/modal/useModal';


function App() {
  const {activeModal} = useModal();

  console.log('activeModal', activeModal)

  return (
    <Container>
    <div>main</div>
    {/* <ModaltestPage/>

  <ModalContainer/>  */}

    </Container>
  )
}

const Container = styled.div`
  font-size: 20px;
`

export default App
