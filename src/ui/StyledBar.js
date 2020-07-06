import styled from 'styled-components'

const StyledBar = styled.div`
  background-color: ${props => props.color};
  display: block;
  height: ${props => props.height};
  margin: 10px 0;
  position: relative;
  width: ${props => props.width};
`

export { StyledBar }
