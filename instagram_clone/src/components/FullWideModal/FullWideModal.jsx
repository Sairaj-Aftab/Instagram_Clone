import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import "./FullWideModal.scss";

const FullWideModal = ({ children, close }) => {
  const rem = useRef(null);

  return (
    <div className="modal" ref={rem}>
      {close && (
        <div className="close" onClick={close}>
          <IoClose />
        </div>
      )}
      {/* <div className="header">
        <h4>Hello World!</h4>
        <div className="header-close">
          <IoClose />
        </div>
      </div> */}

      <div>{children}</div>
    </div>
  );
};

export default FullWideModal;
