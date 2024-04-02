import styled from 'styled-components'

import type { Props } from './index'

export const Aside = styled.aside<Props>`
  padding: 16px;
  background-color: #eee;
  height: 100vh;

  @media screen and (max-width: 768px) {
    height: ${(props) => (props.mostrarFiltros ? '40vh' : '10vh')};
    background-color: ${(props) => (props.mostrarFiltros ? '' : '#fff')};
    margin-bottom: ${(props) => (props.mostrarFiltros ? '20px' : '')};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
