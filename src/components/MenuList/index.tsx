import { Container, List } from './styles'

import MenuItems from '../MenuItems'
import { Food } from '../../Pages/Home'

export type Props = {
  foods: Food[]
}

const MenuList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <MenuItems
            key={food.id}
            title={food.titulo}
            description={food.descricao}
            image={food.capa}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default MenuList
