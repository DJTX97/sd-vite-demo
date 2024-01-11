import { useEffect } from "react";

interface ModalToggleArgs {
  modalRef: React.RefObject<HTMLDialogElement>;
  toggleState: boolean;
};

export const useModalToggle = ({ modalRef, toggleState }: ModalToggleArgs) => {
  useEffect(() => {
    if (toggleState) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [toggleState]);
};
