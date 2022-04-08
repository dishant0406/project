import React from 'react'
import './App.css';
import Header from './Components/Header/Header';
import InputSection from './Components/InputSection/InputSection';
import RewardList from './Components/List/List'
import CardContainer from './Components/CardContainer/CardContainer'

const App = () => {
  return (
    <div  className="ui center aligned container">
      <Header/>
      <InputSection/>
      <RewardList/>
      <CardContainer/>
    </div>
  )
}

export default App