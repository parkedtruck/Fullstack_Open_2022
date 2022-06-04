
   
import { useState } from 'react'

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const DisplayVote = ({ vote }) => {
  return (
    <div>
      <p>has {vote} votes</p>
    </div>
  )

}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const points = new Uint8Array(anecdotes.length);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(points);
  const [most, setMost] = useState(0);


  const handleNextClick =() => {
    setSelected(Math.floor((Math.random() * 6) + 1))
}
  const handleVote = () => {
    const newPoints = [...votes]
    newPoints[selected] += 1
    setVotes(newPoints)
    if (newPoints[selected] > most) {
      setMost(newPoints[selected])
    }
  }



  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <DisplayVote vote={votes[selected]} />
      <br></br>
      <Button handleClick = {handleVote} text="vote"></Button>
      <Button handleClick = {handleNextClick} text="next anecdote"></Button>
      <h1>Anecdotes with the most votes</h1>
      {anecdotes[votes.indexOf(most)]}
      <DisplayVote vote={most} />
    </div>
  )
}

export default App
