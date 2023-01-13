import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ModalContext } from './ModalProvider'
import Cancel from '../../assets/remove-icon.png'

export default function Modal ({children}) {
    const {isOpen , modalContent , closeModal , openModal} = useContext(ModalContext);
    useEffect(()=>{
		openModal()
   
	}, [])
  return (
    
     <>
     
     {isOpen &&
      <div className='modal' >
         <div className="overlay" onClick={closeModal} ></div> 
                <div className="modal-content" >
                       
                    
                            {children}
                        
                        
                </div>
            
         
        </div>
    }
    </>
  )
}
