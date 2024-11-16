import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.laranja};
  margin-top: 80px;
  color: ${cores.salmao};
  padding: 8px;

  img {
    width: 304px;
    height: 167px;
  }
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
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`
export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1024px;
  background-color: ${cores.laranja};
  padding: 32px;
  color: ${cores.branco};
  display: flex;
  align-items: center;

  .text {
    margin-left: 24px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  ${ButtonContainer} {
    max-width: 218px;
  }

  .close {
    position: absolute;
    padding: 8px;
    top: 4px;
    right: 4px;

    img {
      width: 16px;
      height: 16px;
    }
  }
`
