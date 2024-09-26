import { useState } from 'react'

const Header = (props) => {
  return(
    <div>
      <h1>{props.header}</h1>
    </div>

  )
}


const Button = (props) => (
  <Button onClick={props.handleClick}>
    {props.text}
  </Button>
)

const StatisticLine = (props) => {
  if (props.text === "positive"){
    return(
      <div>
        {props.text} {props.value}
      </div>
    )
  }
  return(
    <div>
    {props.text} {props.value}
    </div>
     
  )
}

const Stats = (props) => {
  if (props.total === 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <table>
      <tbody>
        <tr>
          <td><StatisticLine text = "good"/></td>
          <td><StatisticLine value = {props.good}/></td>
        </tr>
        <tr>
          <td><StatisticLine text = "neutral"/></td>
          <td><StatisticLine value = {props.neutral}/></td>
        </tr>
        <tr>
          <td><StatisticLine text = "bad"/></td>
          <td><StatisticLine value = {props.bad}/></td>
        </tr>
        <tr>
          <td><StatisticLine text = "average"/></td>
          <td><StatisticLine value = {(props.score/props.total).toPrecision(1)}/></td>
        </tr>
        <tr>
          <td><StatisticLine text = "positive"/></td>
          <td><StatisticLine value = {(props.good/props.total*100).toPrecision(3)}/></td>
          <td>%</td>
        </tr>
      </tbody>
    </table>
         
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const header = "give feedback"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [score, setScore] = useState(0)

  const handleGoodClick = () => {
    const updateGood = good + 1
    setGood(updateGood)
    setTotal(bad + neutral + updateGood)
    const updateScore = score + 1
    setScore(updateScore)
  }

  const handleBadClick = () => {
    const updateBad = bad + 1
    setBad(updateBad)
    setTotal(good + neutral + updateBad)
    const updateScore = score - 1 
    setScore(updateScore)
  }

  const handleNeutralClick = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    setTotal(good + bad + updateNeutral)
  }

  return (
    <div>
      <Header header={header}/>
      <button onClick = {handleGoodClick}>good</button>
      <button onClick = {handleNeutralClick}>neutral</button>
      <button onClick = {handleBadClick}>bad</button>
      <Header header = "statistics"/>
      <Stats total = {total} good = {good} neutral = {neutral} bad = {bad} score = {score} />
    </div>
  )
}

export default App