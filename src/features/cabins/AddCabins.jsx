import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
function AddCabins() {
  const [isOpenModel, setIsOpenModel] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModel((show) => !show)}>
        Show / Hide
      </Button>

      {isOpenModel && (
        <Modal onClose={() => setIsOpenModel(false)}>
          <CreateCabinForm />
        </Modal>
      )}
    </div>
  );
}

export default AddCabins;
