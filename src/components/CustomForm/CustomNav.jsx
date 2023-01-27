import React from "react";
import { MdCancel } from "react-icons/md";
import { useContext } from "react";
import { ModalContext } from "../../components/modals/ModalProvider";
const CustomNav = ({ text }) => {
  const { closeModal } = useContext(ModalContext);

  return (
    <div className="  w-full text-center text-sm font-normal text-white uppercase bg-primary  px-2 py-4 rounded-t-md">
      {text}
      <button className="close-modal float-right " onClick={() => closeModal()}>
        <MdCancel className="text-black text-4xl" />
      </button>
    </div>
  );
};

export default CustomNav;
