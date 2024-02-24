import React from "react";

function ModalContainer({ children, height }) {
  return (
    <div className="fixed bg-[#2A2E4398] inset-0 h-screen flex justify-center items-center z-50">
      <div className="relative">
        <div className=" bg-white w-[41.2rem] h-[560px] overflow-y-auto rounded-xl  relative" style={{height}}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ModalContainer;
