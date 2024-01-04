import { useState, useEffect } from "react";
type OutputProps = {
  image: Blob | null;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export default function Output({ image, loading, setLoading }: OutputProps) {
  const [imageURL, setImageURL] = useState<string>("");

  useEffect(() => {
    if (image) {
      const objectURL = URL.createObjectURL(image as Blob);
      setImageURL(objectURL);
    }

    return () => setLoading(false);
  }, [image]);

  useEffect(() => {
    console.log(loading)
    console.log(image)
}, [loading])

  return (
    <div className="h-96 w-96 border-2">
        {loading && "Loading..."}
        {(!loading && image) && <img src={imageURL} alt="image" />}
    </div>
  );
}
