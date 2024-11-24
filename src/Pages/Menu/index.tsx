import MenuList from '../../components/MenuList'
import HeroMenu from '../../components/HeroMenu'
import Banner from '../../components/Banner'
import { useEffect, useState } from 'react'
import { Cardapio } from '../Home'
import { useParams } from 'react-router-dom'

const Menu = () => {
  const { id } = useParams()
  const [pratos, setMenu] = useState<Cardapio[]>([])
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setMenu(res))
  }, [id])

  return (
    <>
      <HeroMenu />
      <Banner />
      <MenuList menu={pratos} />
    </>
  )
}

export default Menu
