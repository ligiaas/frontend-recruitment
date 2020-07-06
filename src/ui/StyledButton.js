import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${props => props.bgcolor ? props.bgcolor : 'transparent'};
  border: ${props => (props.border ? props.border : 'none')};
  color: ${props => props.color};
  cursor: pointer;
  font-size: ${props => props.size};
  margin: 10px;
  outline: none;
  transition: all 0.3s linear;
  &:hover {
    background-color: ${props => props.hvbgcolor};
    border: ${props => (props.hvborder ? props.hvborder : 'none')};
    color: ${props => props.hvcolor};
  }
`

export { StyledButton }