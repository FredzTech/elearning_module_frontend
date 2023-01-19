import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ModalContext } from './ModalProvider'
import Cancel from '../../assets/remove-icon.png'
import { useNavigate } from 'react-router'

export default function Modal ({children}) {
    
    const {isOpen , modalContent , closeModal , openModal} = useContext(ModalContext);
    useEffect(()=>{
		openModal()
   
	}, [])
  return (
    
     <>
     
     {isOpen &&
      <div className='modal' >
         <div className="overlay"  ></div> 
                <div className="modal-content " >
                
                <button className="float-right -mb-10  z-10"><img src={Cancel}onClick={()=>closeModal()} alt="cancel" height={20} width={20}/></button>
 
                    
                            {children}
                        
                        
                </div>
            
         
        </div>
    }
    </>
  )
}
