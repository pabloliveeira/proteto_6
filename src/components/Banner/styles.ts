import styled from 'styled-components'
import { cores } from '../../styles'

export const Background = styled.div`
  width: 100%;
  height: 280px;
  display: block;

  position: relative;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }

  .container {
    z-index: 1;
    position: relative;
  }
`
export const Name = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${cores.branco};
  margin-top: 157px;
`
export const Category = styled.h2`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branco};
  padding-top: 24px;
`
