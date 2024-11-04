import estrela from '../../assets/images/estrela.png'
import { Card, Descricao, Infos, Nota, Titulo } from './styles'
import Tag from '../Tag'
import Button from '../Button'

type Props = {
  title: string
  infos: string[]
  image: string
  nota: string
  description: string
}

const Items = ({ title, infos, image, nota, description }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <div className="container">
      <div>
        <Titulo>{title}</Titulo>
        <Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
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
