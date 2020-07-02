import styled from 'styled-components'

const StyledBar = styled.div`
  color: ${props => props.color};
  display: block;
  height: ${props => props.height};
  width: ${props => props.width};
`

export { StyledBar }
