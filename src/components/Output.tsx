import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { output, loading } from "../store/store";

export default function Output() {
  const [image, setImage] = useAtom(output);
  const [isLoading, setIsLoading] = useAtom(loading);
  const [imageURL, setImageURL] = useState<string>("");

  useEffect(() => {
    if (image) {
      const objectURL = URL.createObjectURL(image as Blob);
      setImageURL(objectURL);
    }

    return () => {
        setIsLoading(false);
        setImage(null);
    }
  }, [image]);


  return (
    <div className="h-80 w-80 sm:h-96 sm:w-96 border-4 rounded-xl border-gray-800 bg-gray-100">
      {isLoading && <div className="p-3">Loading...</div>}
      {!isLoading && <img src={imageURL} className="rounded-lg" alt="image" />}
    </div>
  );
}
