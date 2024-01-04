import { useEffect } from "react";
import { useAtom } from "jotai";
import { input, output, loading } from "../store/store";

const TOKEN = import.meta.env.VITE_TOKEN;
const MODEL = import.meta.env.VITE_MODEL;

async function query(data: object) {
  const response = await fetch(MODEL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  
  let result = await response.blob()

  return result;
}

export default function GenerateBtn() {
  const [prompt] = useAtom(input);
  const [image, setImage] = useAtom(output);
  const [isLoading, setIsLoading] = useAtom(loading);
  const handleClick = async () => {
    setIsLoading(true);
    const response = await query({ inputs: prompt })

    if (response.type === "application/json") {
        const result = JSON.parse(await response.text())
        console.log(result)
        setIsLoading(false);
    } else {
        //console.log(response)
        setImage(response);
    }
  };

  // useEffect(() => {
  //   console.log(isLoading);
  //   console.log(image);
  // }, [isLoading, image]);

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Generate
      </button>
    </div>
  );
}
