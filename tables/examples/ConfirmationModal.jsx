import React from "react";
import Loader from "./Loader";

function ConfirmationModal({ handleCancel, message }) {
  return (
    <div className="p-4 text-center">
      <p className="text-[15px] text-black">{message}</p>
      <div className="flex gap-4 justify-center items-center mt-4">
        <button
          className="border p-2 rounded-[8px] text-[14px]"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
