import "./App.css";


const drumSound = [
  { key: "Q",
    sound: "Heater-1",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
  },
  { key: "W",
    sound: "Heater-2",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
  },
  { key: "E",
    sound: "Heater-3",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
  },
  { key: "A",
    sound: "Heater-4",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4.mp3"
  },
  { key: "S",
    sound: "Clap",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Clap.mp3"
  },
  { key: "D",
    sound: "Open-HH",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
  },
  { key: "Z",
    sound: "Kick-n'-Hat",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
  },
  { key: "X",
    sound: "Kick",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
  },
  { key: "C",
    sound: "Closed-HH",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
  }
]


function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-300">
      <div
        id="drum-machine"
        className="flex flex-col items-center min-w-2xs justify-center h-30 bg-gray-100 shadow-2xs rounded-md"
      >
        <h1 className="p-2.5">Dum's Machine MV</h1>
        <div id="display" className="m-2 w-full p-5 bg-amber-100 mb-4">
          
        </div>
        <div id="element" className="w-full p-5 bg-gray-200 rounded-md">
          <div className="grid grid-cols-3 gap-4">
            <button id="Q" className="drum-pad p-4 bg-blue-500 text-white rounded hover:bg-blue-600">Q</button>
            <button id="W" className="drum-pad p-4 bg-blue-500 text-white rounded hover:bg-blue-600">W</button>
            <button id="E" className="drum-pad p-4 bg-blue-500 text-white rounded hover:bg-blue-600">E</button>
            <button id="A" className="drum-pad p-4 bg-blue-500 text-white rounded hover:bg-blue-600">A</button>
            <button id="S" className="drum-pad p-4 bg-blue-500 text-white rounded hover:bg-blue-600">S</button>
            <button id="D" className="drum-pad p-4 bg-blue-500 text-white rounded hover:bg-blue-600">D</button>
            <button id="Z" className="drum-pad p-4 bg-blue-500 text-white rounded hover:bg-blue-600">Z</button>
            <button id="X" className="drum-pad p-4 bg-blue-500 text-white rounded hover:bg-blue-600">X</button>
            <button id="C" className="drum-pad p-4 bg-blue-500 text-white rounded hover:bg-blue-600">C</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
