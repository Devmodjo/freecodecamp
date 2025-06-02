import './App.css'

const citation = [
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    color: "bg-orange-500"
  },
  {
    quote: "Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates",
    color: "bg-blue-700"
  },
  {
    quote: "It’s not about money. It’s about the people you have, how you’re led, and how much you get it.",
    author: "Steve Jobs",
    color: "bg-gray-800"
  },
  {
    quote: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
    author: "Mark Zuckerberg",
    color: "bg-blue-600"
  },
  {
    quote: "If you’re changing the world, you’re working on important things. You’re excited to get up in the morning.",
    author: "Larry Page",
    color: "bg-green-500"
  },
  {
    quote: "Don’t be evil.",
    author: "Sergey Brin",
    color: "bg-red-500"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    color: "bg-yellow-500"
  },
  {
    quote: "Ideas are easy. Implementation is hard.",
    author: "Guy Kawasaki",
    color: "bg-purple-600"
  },
  {
    quote: "If you double the number of experiments you do per year you’re going to double your inventiveness.",
    author: "Jeff Bezos",
    color: "bg-yellow-700"
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    color: "bg-indigo-700"
  }
]


function App() {


  return (
    <div className='flex flex-col flex-wrap justify-center items-center h-screen'>
      <CitationBox />
    </div>
  )
}
function CitationBox(){
  return(
    <div id='quote-box' className='flex flex-col'>
      <div id="text"></div>
      <div id="author"></div>
      <div className="flex">
        <button id='new-quote'>new quotes</button>
      </div>
    </div>
    
  )
}


export default App
