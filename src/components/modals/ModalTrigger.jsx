import React, { useLayoutEffect } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import LogInPage from '../../pages/LogInPage';
import { ModalContext } from './ModalProvider'

export default function ModalTrigger  ({content , children}) {
    const {openModal , closeModal} = useContext(ModalContext);
    useEffect(()=>{
		openModal()
   
	}, [])
  return (
    <div>
        {/* <button onClick={()=>openModal(content)}> */}
            
         
        {children}
        {/* </button> */}
    </div>
  )
}
