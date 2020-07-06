import styled from 'styled-components'

const StyledCenter = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FooterModal = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const BodyModal = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  width: 350px;
`

const ButtonModal = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 4px;
  color: #dfbd00;
  cursor: pointer;
  font-size: 14px;
  margin: 5px;
  outline: none;
  padding: 5px;
  transition: all 0.3s linear;
  &:hover {
    background-color: #dfbd00;
    color: #313135;
  }
`

const Content = styled.div`
  align-items: flex-start;
  background-color: #313135;
  border-radius: 8px;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 350px;
`

const ModalContainer = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  transition: all 0.3s linear;
  width: 100%;
  z-index: 1;
`

const StyledSize = styled.input`
  align-items: center;
  background-color: transparent;
  border: 1px solid #dfbd00;
  border-radius: 50%;
  color: #dfbd00;
  cursor: pointer;
  display: inline-flex;
  height: 50px;
  justify-content: center;
  margin: 10px;
  position: relative;
  transition: all 0.3s linear;
  width: 50px;
  &:focus {
    background-color: #dfbd00;
    color: #313135;
    outline: none;
  }
`

export {
  ButtonModal,
  BodyModal,
  Content,
  FooterModal,
  ModalContainer,
  StyledCenter,
  StyledSize
}