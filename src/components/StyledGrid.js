import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  row-gap: 2rem;
  grid-template-columns: repeat(3, 180px);
  grid-auto-flow: row;
  justify-content: space-around;
`

export { StyledGrid }