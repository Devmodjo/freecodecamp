import "./App.css";
import { useEffect, useState, useRef } from "react";

const padTime = (time: number) => {
  return time < 10 ? `0${time}` : time.toString();
};

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("Session");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);

  useEffect(() => {
    if (timeLeft === 0 && !isRunning) return;
    if (timeLeft === 0) {
      audioRef.current?.play();
      if (mode === "Session") {
        setMode("Break");
        setTimeLeft(breakLength * 60);
      } else {
        setMode("Session");
        setTimeLeft(sessionLength * 60);
      }
    }
  }, [timeLeft]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const toggleTimer = () => {
    setIsRunning((running) => {
      if (!running) {
        timerRef.current = setInterval(() => {
          setTimeLeft((prev) => prev - 1);
        }, 1000);
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
      }
      return !running;
    });
  };

  const reset = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setMode("Session");
    setIsRunning(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; 
    }
  };

  const changeTime = (type: string, op: string) => {
    if (isRunning) return;
    if (type === "break") {
      setBreakLength((prev) => {
        const val = op === "inc" ? prev + 1 : prev - 1;
        return val > 0 && val <= 60 ? val : prev;
      });
    } else {
      setSessionLength((prev) => {
        const val = op === "inc" ? prev + 1 : prev - 1;
        return val > 0 && val <= 60 ? val : prev;
      });
    }
  };


   return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-4">
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Minuteur 25-5</h1>
      </div>

      <div className="flex gap-8">
        <div id="break-label" className="text-center">
          <p className="mb-1">Temps de pause</p>
          <div className="flex items-center justify-center gap-2">
            <button
              id="break-decrement"
              onClick={() => changeTime("break", "dec")}
              className="px-3 py-1 bg-red-500 rounded"
            >-</button>
            <span id="break-length" className="text-xl">{breakLength}</span>
            <button
              id="break-increment"
              onClick={() => changeTime("break", "inc")}
              className="px-3 py-1 bg-green-500 rounded"
            >+</button>
          </div>
        </div>

        <div id="session-label" className="text-center">
          <p className="mb-1">Temps de travail</p>
          <div className="flex items-center justify-center gap-2">
            <button
              id="session-decrement"
              onClick={() => changeTime("session", "dec")}
              className="px-3 py-1 bg-red-500 rounded"
            >-</button>
            <span id="session-length" className="text-xl">{sessionLength}</span>
            <button
              id="session-increment"
              onClick={() => changeTime("session", "inc")}
              className="px-3 py-1 bg-green-500 rounded"
            >+</button>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center border border-white rounded p-6 w-64">
        <p id="timer-label" className="text-2xl mb-2">{mode}</p>
        <p id="time-left" className="text-4xl">{padTime(Math.floor(timeLeft / 60))}:{padTime(timeLeft % 60)}</p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            id="start_stop"
            onClick={toggleTimer}
            className="px-4 py-2 bg-blue-500 rounded"
          >{isRunning ? "Pause" : "Démarrer"}</button>
          <button
            id="reset"
            onClick={reset}
            className="px-4 py-2 bg-yellow-500 text-black rounded"
          >Réinitialiser</button>
        </div>
      </div>

      <audio
        id="beep"
        ref={audioRef}
        src="https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg"
        preload="auto"
      />
    </div>
  );
}

export default App;
