import styled from 'styled-components'
import { cores } from '../../styles'

export const Vetor = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  text-align: center;

  img {
    padding-top: 32px;
  }
`

export const Slogan = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 540px;
  text-align: center;
  padding-top: 180px;
  margin: 0 auto;
  color: ${cores.laranja};
`
