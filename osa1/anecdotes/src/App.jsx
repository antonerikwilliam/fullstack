import { useState } from 'react'

const Header = (props) => {
  return(
    <h1>{props.header}</h1>
  )
}


const Display = (props) => {
  return(
    <div>
      {props.anecdote}
    </div>
  )
}

const Votes = (props) => {
  return(
    <div>
      has {props.vote} votes
    </div>
  )
}

const Button = (props) => (
  <Button onClick={props.handleClick}>
    {props.text}
  </Button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [lista, setLista] = useState(Array(8).fill(0))
  
  const [selected, setSelected] = useState(0)

  

  const handleGoodClick = () => {
    let number = Math.floor(Math.random()*8)
    setSelected(number)
  }

  const handleVoteClick = () => {
    const copy = [...lista]
    copy[selected] += 1
    setLista(copy)
  }

  const indexOfMax = () => {
    let maxIndex = 0
    for (let i = 1; i < lista.length; i++){
      if (lista[i] > lista[maxIndex]){
        maxIndex = i
      }
    }
    return(
      maxIndex
    )
  }
  return (
    <div>
      <Header header = "Anecdote of the day"/>
      <Display anecdote = {anecdotes[selected]}/>
      <Votes vote = {lista[selected]}/>
      <button onClick = {handleVoteClick}>vote</button>
      <button onClick = {handleGoodClick}>next anecdote</button>
      <Header header = "Anecdote with the most votes"/>
      <Display anecdote = {anecdotes[indexOfMax()]}/>
      <Votes vote = {lista[indexOfMax()]}/>
    
    </div>
  )
}

export default App
