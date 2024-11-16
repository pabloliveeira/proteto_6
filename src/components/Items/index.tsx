import estrela from '../../assets/images/estrela.png'
import { Card, Descricao, Infos, Nota, Titulo } from './styles'
import Tag from '../Tag'
import Button from '../Button'

type Props = {
  title: string
  tipo: string
  image: string
  nota: number
  description: string
  destaque: string
}

const Items = ({ title, image, nota, description, tipo, destaque }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <div className="container">
      <div>
        <Titulo>{title}</Titulo>
        <Infos>
          <Tag>{destaque}</Tag>
          <Tag>{tipo}</Tag>
        </Infos>
        <Nota>
          {nota}
          <img src={estrela} alt="estrela" />
        </Nota>
      </div>
      <Descricao>{description}</Descricao>
      <Button type="link" to="/menu" title="clique aqui e confira">
        Saiba mais
      </Button>
    </div>
  </Card>
)

export default Items
