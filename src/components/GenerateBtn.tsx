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

  let result = await response.blob();

  return result;
}

export default function GenerateBtn() {
  const [prompt, setPrompt] = useAtom(input);

  const [, setImage] = useAtom(output);
  const [isLoading, setIsLoading] = useAtom(loading);
  const handleGenerate = async () => {
    setIsLoading(true);

    setPrompt((prev) => (prev === prompt ? prompt + " " : prompt)); //add spaces to prompt based if previous input matches the current one

    //console.log(prompt)

    if (!prompt.trim()) {
      setIsLoading(false);
      alert("Please enter a prompt");
    } else {
      const response = await query({
        inputs: prompt,
      });

      if (response.type === "application/json") {
        const result = JSON.parse(await response.text());
        console.error(result);
        setIsLoading(false);
      } else {
        //console.log(response)
        setImage(response);
      }
    }
  };

  // useEffect(() => {
  //   console.log(isLoading);
  //   console.log(image);
  // }, [isLoading, image]);

  return (
    <button
      onClick={handleGenerate}
      className={`w-1/2 bg-blue-700 ${
        !isLoading ? "hover:bg-blue-500" : "opacity-60 cursor-not-allowed"
      } p-5 rounded text-2xl text-white font-bold`}
      disabled={isLoading}
    >
      Generate
    </button>
  );
}
