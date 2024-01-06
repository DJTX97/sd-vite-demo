import { useAtom } from "jotai";
import { input } from "../store/store";
import { useEffect, useRef } from "react";

export default function Input() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useAtom(input);

  // Autosize textarea to fit content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <div>
      <textarea
        value={text}
        placeholder="Enter your image prompt..."
        ref={textareaRef}
        rows={1}
        onChange={(e) => setText(e.target.value)}
        className="w-80 sm:w-96 p-2 rounded-xl resize-none"
      />
    </div>
  );
}
