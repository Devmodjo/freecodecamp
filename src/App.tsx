import { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {

  const [preview, setPreview] = useState<string>(`
  <h1>Modjo's Previewer</h1>
  <img src="https://media.gettyimages.com/id/1396388341/fr/photo/background-abstract-misty-mountain-range-colourful-wallpaper-digital-art-gradiant-pastel.jpg?s=612x612&w=0&k=20&c=53NGRBVq82X5891BGxKgEiAQQP_m3hnljrP0POs_lJo=" alt="image random"/>
  un beau paysage acceuillant confirmant la validation de ce projet freecodecamps.
  cordialement <u>Modjo victor<u>

  
  `)

  return (
    <div className="h-screen bg-black flex align-center justify-center">
      {/* <h1 className="text-white text-2xl">Modjo's Previewer</h1> */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-8">
        <textarea
          id="editor"
          value={preview}
          className="w-full md:w-1/2 h-64 p-4 bg-gray-800 text-white border border-gray-600 rounded-lg"
          placeholder="Type your markdown here..."
          onChange={(e) => setPreview(e.target.value)}
        ></textarea>
        <div
          id="preview"
          className="min-w-100 h-full p-4 bg-gray-800 text-white border border-gray-600 rounded-lg overflow-y-auto"
          dangerouslySetInnerHTML={{ __html: marked(preview) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
