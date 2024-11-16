import { Food } from '../../Pages/Home'
import Items from '../Items'
import { Container, List } from './styles'

export type Props = {
  foods: Food[]
}

const ItemsList = ({ foods }: Props) => {
  const getFoodTags = (food: Food) => {
    const tags = []
    if (food.destacado === true) {
      tags.push(food.destacado)
    }
    return tags
  }
  return (
    <Container>
      <div className="container">
        <List>
          {foods.map((food) => (
            <Items
              key={food.id}
              title={food.titulo}
              description={food.descricao}
              image={food.capa}
              tipo={food.tipo}
              nota={food.avaliacao}
              destaque={''}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ItemsList
