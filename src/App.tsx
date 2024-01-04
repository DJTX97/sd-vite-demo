import GenerateBtn from "./components/GenerateBtn";
import Input from "./components/Input";
import Output from "./components/Output";

export default function App() {
  return (
    <div className="min-h-screen bg-green-400">
      <div className="mb-10 pt-10 text-3xl font-bold text-center">Behold your SD image!</div>
      <div className="flex justify-evenly">
        <div className="flex flex-col items-center justify-evenly">
          <Input />
          <GenerateBtn />
        </div>
        <div>
          <Output />
        </div>
      </div>
    </div>
  );
}
