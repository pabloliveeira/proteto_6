import { Background, Category, Name } from './styles'

import restaurantBg from '../../assets/images/restaurant-bg.png'
import { useEffect, useState } from 'react'
import { Food } from '../../Pages/Home'

const Banner = () => {
  const [food, setFood] = useState<Food>()
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setFood(res))
  }, [])
  return (
    <Background
      style={{
        backgroundImage: `url(${food?.capa})`
      }}
    >
      <div className="container">
        <Category>{food?.tipo}</Category>
        <Name>{food?.titulo}</Name>
      </div>
    </Background>
  )
}

export default Banner
