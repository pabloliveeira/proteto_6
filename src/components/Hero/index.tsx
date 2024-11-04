import { Slogan, Vetor } from './styles'
import vetorImg from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'

const Hero = () => (
  <Vetor style={{ backgroundImage: `url(${vetorImg})` }}>
    <div className="container">
      <img src={logo} alt="logo" />
      <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
    </div>
  </Vetor>
)

export default Hero
