import Hero from '../../components/Hero'
import ItemsList from '../../components/ItemsList'

import { useEffect, useState } from 'react'

export type Food = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}
export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Food[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])
  return (
    <>
      <Hero />
      <ItemsList foods={restaurants} />
    </>
  )
}

export default Home
