import MenuList from '../../components/MenuList'
import HeroMenu from '../../components/HeroMenu'
import Banner from '../../components/Banner'
import { useEffect, useState } from 'react'
import { Food } from '../Home'

const Menu = () => {
  const [menu, setMenu] = useState<Food[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setMenu(res))
  }, [])
  return (
    <>
      <HeroMenu />
      <Banner />
      <MenuList foods={menu} />
    </>
  )
}

export default Menu
