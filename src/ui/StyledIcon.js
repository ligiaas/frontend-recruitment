import styled from 'styled-components'

const StyledIcon = styled.img`
  height: ${props => props.height}px;
  margin: ${props => props.margin}px;
  transition: all 0.3s linear;
  width: ${props => props.width}px;
`

export { StyledIcon }