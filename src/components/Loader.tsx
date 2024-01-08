export default function Loader() {
  const color = "text-black"; //valid tailwind text color
  const size = "6rem"; //valid CSS value in px, em, rem, vh, vw, etc.
  const thickness = "border-[10px]"; //valid tailwind border width

  return (
    <div className="flex flex-col gap-3 justify-center items-center h-full rounded-lg bg-gradient-to-br from-white to-gray-400">
      <div
        style={{ height: size, width: size }}
        className={`inline-block animate-spin rounded-full ${thickness} border-solid border-current border-r-transparent align-[-0.125em] ${color} motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      />
      <div className="text-xl font-semibold text-center">
        <p>Generating image...</p>
        <p>(This might take a few minutes!)</p>
      </div>
    </div>
  );
}
