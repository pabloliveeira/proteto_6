import { Header, Vetor } from './styles'
import vetorImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const HeroMenu = () => (
  <Vetor style={{ backgroundImage: `url(${vetorImg})` }}>
    <div className="container">
      <Header>
        <nav>
          <ul>
            <li>
              <Link to="/">Restaurantes</Link>
            </li>
          </ul>
        </nav>
        <img src={logo} alt="" />
        <a href=""> 0 produto(s) no carrinho</a>
      </Header>
    </div>
  </Vetor>
)

export default HeroMenu
