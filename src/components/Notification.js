import React from 'react'
import Proptypes from 'prop-types'
import { ToastContainer } from 'react-toastify'

const Notification = ({ children, type }) => {
  return (
    <ToastContainer
      position="top-left"
      type={`toast.TYPE.${type}`}
    >
      {children}
    </ToastContainer>
  )
}

Notification.propTypes = {
  children: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired
}

export default Notification
