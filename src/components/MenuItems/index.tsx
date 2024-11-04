import { ButtonContainer } from '../Button/styles'
import { Card, Descricao, Titulo } from './styles'

type Props = {
  title: string
  image: string
  description: string
}

const MenuItems = ({ title, image, description }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <div className="container">
      <div>
        <Titulo>{title}</Titulo>
      </div>
      <Descricao>{description}</Descricao>
      <ButtonContainer>Adicionar ao carrinho</ButtonContainer>
    </div>
  </Card>
)

export default MenuItems
