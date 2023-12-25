import Foreground from "./components/Foreground"
import Background from "./components/background"

const App = () => {
  return (
    <>
      <div className="relative w-full h-screen bg-zinc-800">
      <Background/>
      <Foreground/>
      </div>
      
    
    </>
  )
}

export default App
