import Compiler from "./components/Compiler";
import Header from "./components/Header";
import Output from "./components/Output";

function App() {
  return (
    <>
      <div className="px-6 lg:px-10 py-4 gap-4 min-h-screen max-w-7xl mx-auto">
        <Header />
        <Compiler />
        <Output />
      </div>
    </>
  );
}

export default App;
