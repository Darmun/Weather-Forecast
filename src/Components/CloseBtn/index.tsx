import * as React from "react";

interface Props{
  onClose: Function
}

 function CloseButton(props: Props) {
  return (
    <button className="close-btn" onClick={() => props.onClose()}>
      ×
    </button>
  );
}

export default CloseButton;