import styled from 'styled-components'

const StyledParagraph = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  line-height: 1.2;
  text-align: ${props => props.align};
`
export { StyledParagraph }