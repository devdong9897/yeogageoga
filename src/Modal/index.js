import React from "react";
import "./SightseeingPageModal.css";

const SightseeingPageModal = ({ sightseeingSelected, setModalOpen }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={() => setModalOpen(false)}>Close</button>
        <img
          src={sightseeingSelected.firstimage}
          alt={sightseeingSelected.title}
        />
        <h2>{sightseeingSelected.title}</h2>
      </div>
    </div>
  );
};

export default SightseeingPageModal;
