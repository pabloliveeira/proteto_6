import { Container, List } from './styles'

import MenuItems from '../MenuItems'
import { Cardapio } from '../../Pages/Home'

export type Props = {
  menu: Cardapio
}

const MenuList = ({ menu }: Props) => (
  <Container>
    <div className="container">
      <List>
        <li key={menu.id}>
          <MenuItems
            title={menu.nome}
            description={menu.descricao}
            image={menu.foto}
            porcao={menu.porcao}
            preco={menu.preco}
          />
        </li>
      </List>
    </div>
  </Container>
)

export default MenuList
