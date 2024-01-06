import GenerateBtn from "./components/GenerateBtn";
import Input from "./components/Input";
import Output from "./components/Output";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-purple-300 to-green-400">
      <div className="mb-10 pt-10 text-3xl font-bold text-center">
        Stable Diffusion Demo
      </div>
      <div className="flex flex-col-reverse items-center md:flex-row gap-10 md:justify-evenly">
        <div className="flex flex-col items-center gap-5">
          <Input />
          <GenerateBtn />
        </div>
        <Output />
      </div>
    </div>
  );
}
