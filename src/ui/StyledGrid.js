import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  gap: 2rem 6rem;
  grid-template-columns: repeat(3, 180px);
  grid-auto-flow: row;
  justify-content: center;
  margin: auto;
  padding: 2rem 0;
  max-width: 1300px;
`

export { StyledGrid }