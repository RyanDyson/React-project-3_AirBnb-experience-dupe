import React from "react"
import Header from "./components/header"
import MainContent from "./components/main-content"
import Card from "./components/card"

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App