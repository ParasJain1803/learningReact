import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-100"
        style={{ backgroundColor: color }}
      ></div>
      <div
        className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center gap-2
            bg-white px-3 py-2 rounded-3xl"
        >
          <button
            onClick={() => setColor("red")}
            className="outline-none text-white
                px-4 py-1 rounded-full"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none text-white
                px-4 py-1 rounded-full"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none text-white
                px-4 py-1 rounded-full"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
