import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [toggle, setToggle] = useState()
const [data, setData] = useState([
  {
    question: "What is React?",
    Answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, optio."

  },

  {
    question: "What is React?",
    Answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, optio."

  },

  {
    question: "What is React?",
    Answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, optio."

  },

  {
    question: "What is React?",
    Answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, optio."

  },

  {
    question: "What is React?",
    Answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, optio."

  },
])

const toggleQuestion = (index) => {
  if (toggle === index) {
    setToggle(null);
  } else {
    setToggle(index);
  }
};



  return (
      <div>
   {
    data.map((item, index)=>{
      return (
        
        <div key={index}>
         
         <div className='question-btn'>
          <p onClick={toggleQuestion}>+</p>
          <h2>{item.question}</h2>
          </div>
          <p>{item.Answer}</p>
        </div>
        
      )
    })
   }
      </div>
    
  )
}

export default App
