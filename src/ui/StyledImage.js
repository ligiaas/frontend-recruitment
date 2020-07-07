import styled from 'styled-components'

const StyledImage = styled.img`
  height: ${props => props.height}px;
  margin-bottom: 10px;
  width: ${props => props.width}px;
`

export { StyledImage }