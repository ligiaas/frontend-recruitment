import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${props => props.bgcolor ? props.bgcolor : 'transparent'};
  border: ${props => (props.border ? props.border : 'none')};
  border-radius: ${props => props.radius}px;
  box-shadow: ${props => props.boxshadow};
  color: ${props => props.color};
  cursor: pointer;
  font-size: ${props => props.size};
  margin: 10px;
  outline: none;
  padding: ${props => props.padding};
  transition: all 0.3s linear;
  width: ${props => props.width};
  &:hover {
    background-color: ${props => props.hvbgcolor};
    border: ${props => (props.hvborder ? props.hvborder : 'none')};
    color: ${props => props.hvcolor};
  }
`

export { StyledButton }