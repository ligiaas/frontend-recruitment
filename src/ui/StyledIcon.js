import styled from 'styled-components'

const StyledIcon = styled.img`
  height: ${props => props.height}px;
  margin: ${props => props.margin}px;
  width: ${props => props.width}px;
  z-index: 10;
`

export { StyledIcon }