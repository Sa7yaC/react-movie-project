import './App.css'

function App() {
  return (
    <>
    <Text display="hello"/>
    <Text display="what's up"/>
    </>
  )
}

function Text({display}){
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}
export default App
