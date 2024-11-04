import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.salmao};
  color: ${cores.laranja};
  padding: 40px 0;
  font-size: 10px;
  text-align: center;
`
export const Social = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 40px;
`
export const Icons = styled.li`
  margin-right: 8px;
`
