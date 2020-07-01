import styled from 'styled-components'

const StyledHeader = styled.div`
  align-items: center;
  display: flex;
  height: 140px;
  justify-content: center;
  > img {
    margin: 0 25px;
  }
`

const StyledTitle = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.2;
  text-transform: uppercase;
`

export { StyledHeader, StyledTitle }