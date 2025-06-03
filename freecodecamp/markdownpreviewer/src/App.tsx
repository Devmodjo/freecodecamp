import { useState } from "react";
import { marked } from "marked";
import "./App.css";

marked.setOptions({breaks:true})

function App() {

  const defaultMarkdown = `
  # Bienvenue sur le Markdown Previewer 🚀

  ## Découvre la puissance du markdown en temps réel !

  Voici un [lien vers Wikipedia](https://fr.wikipedia.org/wiki/Markdown).

  Du code en ligne : \`let message = "Hello Markdown!"\`

  \`\`\`js
  // Exemple de fonction JavaScript
  function greet(name) {
    return \`Bonjour, \${name} !\`;
  }
  \`\`\`

  - Premier élément de liste
  - Deuxième élément de liste

  > Ceci est une citation inspirante : *"Le markdown, c'est la liberté !"*

  **Texte en gras pour attirer l'attention**

  ![Montagne sur Unsplash](https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80)
  `;

  const [preview, setPreview] = useState<string>(`${defaultMarkdown}`);

  return (
    <div className="h-screen bg-black w-screen flex align-center justify-center">
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
