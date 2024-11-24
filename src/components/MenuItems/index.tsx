import { ButtonContainer } from '../Button/styles'
import { Card, Descricao, Modal, ModalContent, Titulo } from './styles'

import close from '../../assets/images/fechar.png'
import { useState } from 'react'

type Props = {
  title: string
  image: string
  description: string
  porcao: string
  preco: number
}

const MenuItems = ({ title, image, description, preco, porcao }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <div className="container">
          <div>
            <Titulo>{title}</Titulo>
          </div>
          <Descricao>{description}</Descricao>
          <ButtonContainer onClick={() => setModalEstaAberto(true)}>
            Mais detalhes
          </ButtonContainer>
        </div>
      </Card>
      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={image} alt="" />
          <div className="text">
            <h3>{title}</h3>
            <Descricao>
              {description} <br /> <br />
              Serve: de {porcao}
            </Descricao>
            <ButtonContainer>
              Adicionar ao carrinho - R$ {preco}
            </ButtonContainer>
          </div>
          <div className="close">
            <img
              className="icon"
              src={close}
              alt=""
              onClick={() => setModalEstaAberto(false)}
            />
          </div>
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default MenuItems
