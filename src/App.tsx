import "./App.css";
import { useState, useEffect } from "react";

const drumSound = [
  {
    key: "Q",
    sound: "Heater-1",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
  },
  {
    key: "W",
    sound: "Heater-2",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
  },
  {
    key: "E",
    sound: "Heater-3",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
  },
  {
    key: "A",
    sound: "Heater-4",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
  },
  {
    key: "S",
    sound: "Clap",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  },
  {
    key: "D",
    sound: "Open-HH",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    sound: "Kick-n'-Hat",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    sound: "Kick",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    sound: "Closed-HH",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
  },
];

function App() {
  // afficher le son du pad cliqué
  const [displaySound, setDisplaySound] = useState("");

  // Fonction pour jouer le son et mettre à jour l'affichage
  const playSound = (key: string, sound: string) => {
    const audio = document.getElementById(key) as HTMLAudioElement;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setDisplaySound(sound);
    }
  };

  // fonction pour jouer les on au clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const pad = drumSound.find((d) => d.key === e.key.toUpperCase());
      if (pad) playSound(pad.key, pad.sound);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-300">
      <div
        id="drum-machine"
        className="flex flex-col items-center min-w-2xs justify-center h-30 bg-gray-100 shadow-2xs rounded-md"
      >
        <h1 className="p-2.5">Drum's Machine MV</h1>
        <div id="display" className="m-2 w-full p-5 bg-amber-100 mb-4">{displaySound}</div>
        <div id="element" className="w-full p-5 bg-gray-200 rounded-md">
          <div className="grid grid-cols-3 gap-4">
            {drumSound.map((pad) => (
              <button
                key={pad.key}
                id={pad.sound}
                className="drum-pad p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => playSound(pad.key, pad.sound)}>
                {pad.key}
                <audio
                  className="clip"
                  id={pad.key}
                  src={pad.src}
                ></audio>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
