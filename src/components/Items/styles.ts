import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  margin-top: 80px;
  color: ${cores.laranja};
  position: relative;
  border: 1px solid ${cores.laranja};

  > img {
    width: 472px;
    height: 217px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .container {
    padding: 8px;
    display: inline-block;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  margin-top: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0;
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
