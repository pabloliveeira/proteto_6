import Items from '../Items'
import { Container, List } from './styles'

import Food from '../../models/Food'

export type Props = {
  foods: Food[]
}

const ItemsList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Items
            key={food.id}
            title={food.title}
            description={food.description}
            image={food.image}
            infos={food.infos}
            nota={food.nota}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ItemsList
