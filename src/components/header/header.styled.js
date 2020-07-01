import styled from 'styled-components'
import Logo from '../../assets/bag.svg'

const StyledHeader = styled.div`
  align-items: center;
  display: flex;
  height: 140px;
  justify-content: center;
`

const StyledLogo = styled.div`
  background-image: url(${Logo});
  background-repeat: no-repeat;
  height: 40px;
  margin: 0 25px;
  width: 33px;
`

const StyledTitle = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.2;
  text-transform: uppercase;
`

const StyledCounter = styled.div`
  align-items: center;
  background-color: rgb(223, 189, 0);
  border-radius: 50%;
  display: flex;
  height: 19px;
  justify-content: center;
  left: 20px;
  position: relative;
  top: 27px;
  width: 19px;
  > span {
    color: #000;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.16;
    text-align: center;
  }
`

export { StyledHeader, StyledLogo, StyledTitle, StyledCounter }