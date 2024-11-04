import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.salmao};
  color: ${cores.laranja};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
  width: 100%;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.laranja};
  color: ${cores.salmao};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`
