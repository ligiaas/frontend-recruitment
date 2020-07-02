import styled from 'styled-components'

const StyledPrice = styled.span`
  color: ${props => (props.color)};
  font-size: ${props => props.size};
  line-height: 0.808;
`

export { StyledPrice }