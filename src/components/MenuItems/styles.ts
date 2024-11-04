import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.laranja};
  margin-top: 80px;
  color: ${cores.salmao};
  padding: 8px;
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: flex;
  margin-top: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 8px 0;
`
export const Nota = styled.div`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  margin-top: 8px;

  img {
    margin-right: 8px;
    margin-left: 4px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  color: ${cores.salmao};
`
