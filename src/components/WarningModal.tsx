import { useEffect, useRef } from "react";

type WarningModalProps = {
  warning: boolean;
  setWarning: (warning: boolean) => void;
};

export default function WarningModal({
  warning,
  setWarning,
}: WarningModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (warning) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [warning]);
  return (
    <dialog
      ref={modalRef}
      onCancel={() => setWarning(false)}
      className="h-60 w-[40rem] p-2 outline-none rounded-xl"
    >
      <div className="flex justify-between h-1/6 pl-1 bg-yellow-200 border-2 rounded-lg border-yellow-600">
        <div className="flex gap-2 text-2xl text-yellow-600 font-semibold">
          <div>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 fill-none text-yellow-600"
            >
              <path
                d="M12 17.0001H12.01M12 10.0001V14.0001M6.41209 21.0001H17.588C19.3696 21.0001 20.2604 21.0001 20.783 20.6254C21.2389 20.2985 21.5365 19.7951 21.6033 19.238C21.6798 18.5996 21.2505 17.819 20.3918 16.2579L14.8039 6.09805C13.8897 4.4359 13.4326 3.60482 12.8286 3.32987C12.3022 3.09024 11.6978 3.09024 11.1714 3.32987C10.5674 3.60482 10.1103 4.4359 9.19614 6.09805L3.6082 16.2579C2.74959 17.819 2.32028 18.5996 2.39677 19.238C2.46351 19.7951 2.76116 20.2985 3.21709 20.6254C3.7396 21.0001 4.63043 21.0001 6.41209 21.0001Z"
                className="stroke-yellow-600"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>{`Warning: Invalid prompt`}</div>
        </div>
      </div>
      <div className="flex flex-col justify-around h-5/6 px-2 py-1">
        <div className="text-xl font-semibold">
          Please enter a valid non-empty prompt.
        </div>
        <div className="flex justify-center">
          <button
            className="px-5 py-2 rounded-lg bg-yellow-600 hover:bg-yellow-500 text-white text-lg"
            onClick={() => setWarning(false)}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}
