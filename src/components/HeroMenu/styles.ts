import styled from 'styled-components'
import { cores } from '../../styles'

export const Vetor = styled.div`
  width: 100%;
  height: 184px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  padding: 24px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  color: ${cores.laranja};
  font-size: 18px;
  font-weight: bold;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${cores.laranja};
    font-weight: bold;
  }
`
