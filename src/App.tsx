import { useEffect } from 'react';
import './App.css'
import {FaTwitter, FaTumblr} from 'react-icons/fa'


const citation = [
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    color: "bg-orange-500",
    textColor: "text-white"
  },
  {
    quote: "Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates",
    color: "bg-blue-700",
    textColor: "text-white"
  },
  {
    quote: "It’s not about money. It’s about the people you have, how you’re led, and how much you get it.",
    author: "Steve Jobs",
    color: "bg-gray-800",
    textColor: "text-yellow-200"
  },
  {
    quote: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
    author: "Mark Zuckerberg",
    color: "bg-blue-600",
    textColor: "text-white"
  },
  {
    quote: "If you’re changing the world, you’re working on important things. You’re excited to get up in the morning.",
    author: "Larry Page",
    color: "bg-green-500",
    textColor: "text-white"
  },
  {
    quote: "Don’t be evil.",
    author: "Sergey Brin",
    color: "bg-red-500",
    textColor: "text-white"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    color: "bg-yellow-500",
    textColor: "text-green-900"
  },
  {
    quote: "Ideas are easy. Implementation is hard.",
    author: "Guy Kawasaki",
    color: "bg-purple-600",
    textColor: "text-white"
  },
  {
    quote: "If you double the number of experiments you do per year you’re going to double your inventiveness.",
    author: "Jeff Bezos",
    color: "bg-yellow-700",
    textColor: "text-white"
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    color: "bg-indigo-700",
    textColor: "text-white"
  }
]


function App() {

  const randomIndex = Math.floor(Math.random() * citation.length);
  const randomCitation = citation[randomIndex];
  useEffect(() => {
    // Set the initial random citation when the component mounts
    handleClickable();
  }, []);

  const handleClickable = ()=>{
    const newIndex = Math.floor(Math.random() * citation.length);
    const newCitation = citation[newIndex];
    const textElement = document.getElementById('text');
    const authorElement = document.getElementById('author');
    
    if (textElement && authorElement) {
      textElement.textContent = newCitation.quote;
      authorElement.textContent = newCitation.author;
      textElement.className = `text-center text-xl ${newCitation.textColor}`;
      authorElement.className = `${newCitation.textColor}`;
    }
  };

  return (
    <div className='flex flex-col'>
      {/* <CitationBox /> */}
      <main className='bg-white-500  p-5 flex flex-col justify-center items-center gap-5 h-screen'>
        <CitationBox>
          {/* citation */}
          <div className={`flex flex-col justify-center items-center gap-5 ${randomCitation.color} ${randomCitation.textColor} p-5 rounded-lg`}>
            <p id='text' className='text-center text-xl'>{randomCitation.quote}</p>
            <div id="author" className={`${randomCitation.textColor}`}>{randomCitation.author}</div>
          </div>
          
          {/* bouton clickable */}
          <div className="containClickable flex gap-5">
              <div className="linkClickable flex flex-row justify-center items-center gap-5">
                <a href='twitter.com/intent/tweet' className={`bg-blue-500 p-5  text-white`} id='tweet-quote'><FaTwitter /></a>
                <a href='#' className={`bg-blue-500 p-5  text-white`}><FaTumblr /></a>
              </div>
            <button id='new-quote' className="bg-blue-400 text-white p-5 " onClick={handleClickable}>new quotes</button>
          </div>
        </CitationBox>
      </main>
      
    </div>
  )
}
function CitationBox({children} :{children?:React.ReactNode}) {
  return(
    <div id='quote-box' className={`flex flex-col justify-center items-center h-auto gap-5 p-5 bg-white-500 shadow-lg rounded-lg`}>
      {children}
    </div>
    
  )
}


export default App
