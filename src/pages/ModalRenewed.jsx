import React from "react";
import { useNavigate } from "react-router-dom";
const ModalRenewed = () => {
  const navigate = useNavigate();
  return (
    <div className="modal-overlay">
      <div
        id="modal-content"
        className="bg-white text-black uppercase w-[450px]"
      >
        <div className="heading bg-primary py-2 px-3 flex justify-between ">
          <button
            className="text-xl font-extrabold order-2"
            onClick={() => {
              navigate(-1);
            }}
          >
            X
          </button>
          <h1 className="order-1">Lorem ipsum dolor sit amet consectetur</h1>
        </div>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          autem laborum quod maiores commodi excepturi ab, rerum illum
          perspiciatis animi dolores reiciendis, quasi beatae. Corporis delectus
          animi repellat enim autem?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          autem laborum quod maiores commodi excepturi ab, rerum illum
          perspiciatis animi dolores reiciendis, quasi beatae. Corporis delectus
          animi repellat enim autem?
        </p>
      </div>
    </div>
  );
};

export default ModalRenewed;
