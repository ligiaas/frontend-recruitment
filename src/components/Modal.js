import React from 'react'
import PropTypes from 'prop-types'
import {
  ButtonModal,
  FooterModal,
  Content,
  ModalContainer,
  StyledCenter
} from '../ui/StyledModal'

const Modal = ({ close, children, confirmationAction, openModal }) => {
  return (
    <>
      {openModal ? (
        <ModalContainer>
          <Content>
            <StyledCenter>
              {children}
            </StyledCenter>
            <FooterModal>
              <ButtonModal onClick={() => confirmationAction()}>Adicionar a Sacola</ButtonModal>
              <ButtonModal onClick={() => close()}>Voltar</ButtonModal>
            </FooterModal>
          </Content>
        </ModalContainer>
      ) : null}
    </>
  )
}

Modal.defaultProps = {
  close: null,
  item: null
}

Modal.propTypes = {
  children: PropTypes.array.isRequired,
  close: PropTypes.func,
  openModal: PropTypes.bool.isRequired
}

export default Modal
