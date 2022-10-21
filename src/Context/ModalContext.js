import { useState,createContext } from 'react'

export const ModalContext = createContext({})

export const Context = ({children}) => {

    const [isOpen,setIsOpen] = useState(false)
  
    return(
        <ModalContext.Provider value={{isOpen,setIsOpen}}>
            {children}
        </ModalContext.Provider>
    )

}



