import { useContext, useState, createContext } from "react";

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export function ModalContextProvider({ children }) {
  const [modal, setModal] = useState(0);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
}
