import React from 'react';
import ReactDOM from 'react-dom'
import history from '../history'

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick = {()=>history.push('/')} className='ui dimmer modals visible active'>
      <div onClick={e => e.stopPropagation()} className='ui stnadard modal visible active'>
        <div class="header">{props.title}</div>
        <div class="content">
          <h4>{props.description}</h4>
        </div>
        <div class="actions">
          <div class="ui button negative">{props.confirmText}</div>
          <div class="ui button neutral">{props.neutralText}</div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal;