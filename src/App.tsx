import GenerateBtn from "./components/GenerateBtn";
import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-purple-300 to-green-400">
      <Header />
      <div className="flex flex-col-reverse items-center md:flex-row gap-10 md:justify-evenly py-8">
        <div className="flex flex-col items-center gap-10 md:gap-5">
          <Input />
          <GenerateBtn />
        </div>
        <Output />
      </div>
    </div>
  );
}
