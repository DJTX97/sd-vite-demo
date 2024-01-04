import { useEffect } from "react";

export default function Input({ query, image, setImage, loading, setLoading }: any) {
  const handleClick = async () => {
    setImage(null);
    setLoading(true)
    query({ inputs: "Giant robot" }).then((response: Blob) => {
      // Use image
      setImage(response);
    });
  };

  useEffect(() => {
      console.log(loading)
      console.log(image)
  }, [loading])


  return (
    <div>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate</button>
    </div>
  );
}
