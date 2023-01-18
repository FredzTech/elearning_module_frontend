import React from 'react'
import Forbid from '../assets/403-Forbidden.gif'
import { Modal } from '../components/modals'

function Forbidden() {
  return (
    <Modal>

    
        <div>
        <img src={Forbid} alt="" />
        </div>
    </Modal>
  )
}

export default Forbidden