import { Container, List } from './styles'

import RestaurantFood from '../../models/RestaurantFoods'
import MenuItems from '../MenuItems'

export type Props = {
  foods: RestaurantFood[]
}

const MenuList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <MenuItems
            key={food.id}
            title={food.title}
            description={food.description}
            image={food.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default MenuList
