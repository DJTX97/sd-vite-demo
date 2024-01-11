import { useRef } from "react";
import { useModalToggle } from "../hooks/useModalToggle";

type modal = {
  state: boolean;
  content: null | {
    error?: string;
    warning?: string;
  };
};

type ModalProps = {
  modal: modal;
  setModal: React.Dispatch<React.SetStateAction<modal>>;
};

export default function Modal({ modal, setModal }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const toggleState = modal.state;

  useModalToggle({ modalRef, toggleState });

  const errorCode = modal.content?.error?.includes("loading")
    ? `Error: Model is currently loading.`
    : modal.content?.error
    ? `Error: ${modal.content?.error}`
    : modal.content?.warning;

  const styles = modal.content?.error
    ? {
        header_bg: "bg-red-200",
        header_border: "border-red-500",
        header_text: "text-red-500",
        stroke: "stroke-red-500",
        bg_btn: "bg-red-600",
        bg_hover: "hover:bg-red-400",
      }
    : {
        header_bg: "bg-yellow-200",
        header_border: "border-yellow-600",
        header_text: "text-yellow-600",
        stroke: "stroke-yellow-600",
        bg_btn: "bg-yellow-600",
        bg_hover: "hover:bg-yellow-500",
      };

  const message = modal.content?.error
    ? "Something went wrong. Try again in a few minutes."
    : "Please enter a valid prompt non-empty prompt.";
  return (
    <dialog
      ref={modalRef}
      onCancel={() => setModal({ state: false, content: null })}
      className="h-60 w-[40rem] p-2 outline-none rounded-xl"
    >
      <div
        className={`flex justify-between h-1/6 pl-1 ${styles.header_bg} border-2 rounded-lg ${styles.header_border}`}
      >
        <div
          className={`flex gap-2 text-2xl ${styles.header_text} font-semibold`}
        >
          <div>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={`w-8 h-8 fill-none ${styles.header_text}`}
            >
              <path
                d="M12 17.0001H12.01M12 10.0001V14.0001M6.41209 21.0001H17.588C19.3696 21.0001 20.2604 21.0001 20.783 20.6254C21.2389 20.2985 21.5365 19.7951 21.6033 19.238C21.6798 18.5996 21.2505 17.819 20.3918 16.2579L14.8039 6.09805C13.8897 4.4359 13.4326 3.60482 12.8286 3.32987C12.3022 3.09024 11.6978 3.09024 11.1714 3.32987C10.5674 3.60482 10.1103 4.4359 9.19614 6.09805L3.6082 16.2579C2.74959 17.819 2.32028 18.5996 2.39677 19.238C2.46351 19.7951 2.76116 20.2985 3.21709 20.6254C3.7396 21.0001 4.63043 21.0001 6.41209 21.0001Z"
                className={styles.stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            {errorCode}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around h-5/6 px-2 py-1">
        <div className="text-xl font-semibold">{message}</div>
        <div className="flex justify-center">
          <button
            className={`px-5 py-2 rounded-lg ${styles.bg_btn} ${styles.bg_hover} text-white text-lg`}
            onClick={() => setModal({ state: false, content: null })}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}
