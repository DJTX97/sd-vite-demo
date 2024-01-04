import { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";

const TOKEN = import.meta.env.VITE_TOKEN;
const MODEL = import.meta.env.VITE_MODEL;

async function query(data: object) {
  const response = await fetch(
    MODEL,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  let result = await response.blob();

  if(result.type === "application/json") {
    result = JSON.parse(await result.text());
  }

  return result;
}
// query({"inputs": "Astronaut riding a horse"}).then((response) => {
// 	// Use image
// });

export default function App() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="text-3xl font-bold">Behold your SD image!</div>
      <Output image={image} loading={loading} setLoading={setLoading} />
      <Input
        query={query}
        image={image}
        setImage={setImage}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}
