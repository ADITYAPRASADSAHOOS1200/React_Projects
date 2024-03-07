import { useState } from "react";
import ModalCard from "./ModalCard";

export default function Modal() {
  const [ShowModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(!ShowModal);
  }

  return (
    <div className="" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <button onClick={handleClick}  disabled={ShowModal}>Open Modal Popup</button>
      <div>
        {ShowModal && (
          <p>
            <ModalCard
              id={Date.now()}
              header={<h1>hello</h1>}
              body={<p>learn react in a better way</p>}
              Footer={<p>Modal</p>}
              onClick={handleClick}
            />
          </p>
        )}
      </div>
    </div>
  );
}
