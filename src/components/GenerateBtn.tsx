import { useAtom } from "jotai";
import { input, output, loading } from "../store/store";
import { query } from "../scripts/generate";
import { useState } from "react";
import Modal from "./Modal";

type modal = {
  state: boolean;
  content: null | {
    error?: string;
    warning?: string;
  };
};

export default function GenerateBtn() {
  const [prompt, setPrompt] = useAtom(input);
  const [, setImage] = useAtom(output);
  const [isLoading, setIsLoading] = useAtom(loading);

  const [modal, setModal] = useState<modal>({
    state: false,
    content: null,
  });

  const handleGenerate = async () => {
    setIsLoading(true);

    setPrompt((prev) => (prev === prompt ? prompt + " " : prompt)); //add spaces to prompt based if previous input matches the current one

    //console.log(prompt)

    if (!prompt.trim()) {
      setIsLoading(false);
      setModal({ state: true, content: { warning: "Invalid prompt!" } });
      //alert("Please enter a prompt");
    } else {
      const response = await query({
        inputs: prompt,
      });

      if (response.type === "application/json") {
        const result = JSON.parse(await response.text());
        console.error(result);
        setModal({ state: true, content: result });
        setIsLoading(false);
      } else {
        //console.log(response)
        setImage(response);
      }

      //FOR TESTING
      // setTimeout(() => {
      //   setModal({ state: true, content: { error: "Test Error!" } });
      //   setIsLoading(false);
      // }, 3000);
    }
  };

  // useEffect(() => {
  //   console.log(isLoading);
  //   console.log(image);
  // }, [isLoading, image]);

  return (
    <>
      <button
        onClick={handleGenerate}
        className={`w-1/2 bg-blue-700 ${
          isLoading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-500"
        } p-5 rounded text-2xl text-white font-bold`}
        disabled={isLoading}
      >
        Generate
      </button>
      <Modal modal={modal} setModal={setModal} />
    </>
  );
}
