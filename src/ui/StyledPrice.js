import styled from 'styled-components'

const StyledPrice = styled.span`
  color: #313135;
  font-size: ${props => props.size}px;
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
  line-height: 0.808;
`

export { StyledPrice }