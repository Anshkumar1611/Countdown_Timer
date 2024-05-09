import { useState } from "react";
import "./App.css";
import CountdownTimer from "./components/CountdownTimer";

function App() {
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center items-center bg-gradient-to-tr from-fuchsia-400 to-cyan-400">
      <div className="text-4xl text-bold text-white">
        Countdown <span className="text-indigo-500">Timer</span>
      </div>
      <form className="flex gap-2 pb-6">
        <input
          type="datetime-local"
          placeholder="enter date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border border-indigo-500  p-1 bg-indigo-400 rounded text-white"
        />
        <button className="p-1 px-2 border border-indigo-500 text-sm rounded text-white text-bold bg-indigo-400">
          {selectedDate ? "Stop Timer" : "Start Timer"}
        </button>
      </form>
      <CountdownTimer targetDate={selectedDate}/>
    </div>
  );
}

export default App;
