import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import { Container, Icons, Social } from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <div>
        <img src={logo} alt="" />
        <Social>
          <Icons>
            <a href="">
              <img src={insta} alt="" />
            </a>
          </Icons>
          <Icons>
            <a href="">
              <img src={facebook} alt="" />
            </a>
          </Icons>
          <Icons>
            <a href="">
              <img src={twitter} alt="" />
            </a>
          </Icons>
        </Social>
      </div>
      <div>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
          estabelecimento contratado.
        </p>
      </div>
    </div>
  </Container>
)

export default Footer
