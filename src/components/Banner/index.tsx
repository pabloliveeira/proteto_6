import { Background, Category, Name } from './styles'

import restaurantBg from '../../assets/images/restaurant-bg.png'

const Banner = () => (
  <Background
    style={{
      backgroundImage: `url(${restaurantBg})`
    }}
  >
    <div className="container">
      <Category>Italiana</Category>
      <Name>La Dolce Vita Trattoria</Name>
    </div>
  </Background>
)

export default Banner
